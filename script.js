let modal = document.querySelector(".modal-cont");
let button = document.querySelector(".add-btn");
let addModal = true;
let textArea = document.querySelector(".textarea-cont");
let mainContainer = document.querySelector(".main-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let taskColor = 'red' ;
let priorityColorCont = document.querySelector(".priority-color-cont");
let garbage = document.querySelector(".remove-btn");
let removeGarbage = true;
let sort = document.querySelector(".toolbox-priority-cont");
let colorArr = ['red','blue','green','pink'];
let ticketArr = [];
// Instantiate
var uid = new ShortUniqueId();

button.addEventListener("click",function(e){
    // console.log(`button is clicked`);
    if(addModal){
        modal.style.display="flex";
        addModal=false;
    }
    else{
        modal.style.display="none";
        addModal=true;
    }
})

textArea.addEventListener("keypress",function(e){
    // console.log(e);
    if(e.key=="Enter"){
        // console.log("Generate Ticket");
        // console.log(textArea.value);
        if(textArea.value==""){
            textArea.value="";
            alert("Please assign some task");
            return;
        }
        generateTicket(textArea.value);
        textArea.value="";
        modal.style.display="none";
        addModal="true"
    }
})

priorityColorCont.addEventListener("click",function(e){
    // console.log(e.target)
    if(e.target.classList.contains("priority-color")){
        let colors = document.querySelectorAll('.priority-color');        
        for(let i=0;i<colors.length;i++){
            colors[i].classList.remove('active');
        }
        e.target.classList.add("active");
        taskColor = e.target.classList[1];
    }
})

function generateTicket(task){
    // <div class="ticket-cont">
    //    <div class="ticket-color green"></div>
    //     <div class="ticket-id">#eidut3</div>
    //     <div class="ticket-area">Some Task </div>
    // </div>
    let id = uid.rnd();
    let ticketContainer = document.createElement("div");
    
    ticketContainer.className=("ticket-cont");
    ticketContainer.innerHTML = `<div class='ticket-color ${taskColor}'>
                                 </div><div class='ticket-id'>#${id}</div>
                                 <div class='ticket-area'>${task}</div>`
    // console.log(ticketContainer);
    mainContainer.appendChild(ticketContainer);
    let ticketColor = ticketContainer.querySelector('.ticket-color');
    ticketColor.addEventListener('click',function(){
        console.log("clickEd");
    })
}

garbage.addEventListener("click",function(e){
    // console.log(e.detail);
    if(removeGarbage==true){
        garbage.style.color = "orange";
        removeGarbage = false;
    }
    else if(removeGarbage==false){
        garbage.style.color = "black";
        removeGarbage = true;
    }
})

mainContainer.addEventListener("click",function(e){
    if(!removeGarbage && e.target.parentElement.classList.contains("ticket-cont")){
        // console.log(e.target)
        e.target.parentElement.remove();
    }
    // console.log(e.target)
})

sort.addEventListener("click",function(e){
    // console.log(e.target);
    if(e.target.classList.contains("color")){
        let colors = document.querySelectorAll(".color");
        // console.log(colors);
        for(let i=0;i<colors.length;i++){
            colors[i].classList.remove('active');
        }
        e.target.classList.add('active');
        // console.log(e.target.classList);
        let color = e.target.classList[1];
        
    }
})

mainContainer.addEventListener("")

