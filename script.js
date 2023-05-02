const inputBox=document.getElementById("input-box"); 
const listContainer=document.getElementById("list-container"); 

function addTask()
{
    if(inputBox.value==='') 
    {
        // alert("You must write something!")
        //show the pop-up msg
        let emptyContainer=document.getElementById("empty-field");
        emptyContainer.classList.remove("hidden");
         // hide the message after 2 sec
        setTimeout(()=>{
            emptyContainer.classList.add("hidden");
        },2000);
    }
    else{
        let li=document.createElement("li"); 
        li.innerHTML=inputBox.value; 
        listContainer.appendChild(li); 
        let span= document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);

        //show the pop-up msg
        let popupContainer=document.getElementById("popup-container");
        popupContainer.classList.remove("hidden");
        // hide the message after 2 sec
        setTimeout(()=>
        {
            popupContainer.classList.add("hidden");
        },2000);
    }
    inputBox.value=""; // clear textfield
    savedata(); 

    
}

// this click function used to mark check and delete button
listContainer.addEventListener("click", function(e)
{
    if (e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked"); //mark as read
        savedata(); 
    }
    else if(e.target.tagName==="SPAN") 
    {
        e.target.parentElement.remove(); //delete task
        savedata(); 
    }
},false);

//save data in localstorage
function savedata(){
    localStorage.setItem("Data",listContainer.innerHTML); 
}

//func to show the data whenever the browser is open
function showTask(){
    listContainer.innerHTML=localStorage.getItem("Data");
}

showTask(); 