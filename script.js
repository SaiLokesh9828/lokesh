
let inputbox = document.getElementById("input-box");
let container = document.getElementById("list-container");


function addTask(){
    if (inputbox.value === ''){
        alert("You Must Write Something. ");
    } else {
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
    saveData();
}

container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
           e.target.classList.toggle("checked");
           saveData();
    } else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",container.innerHTML);
}
function showTask(){
    container.innerHTML=localStorage.getItem("data");
}
showTask();