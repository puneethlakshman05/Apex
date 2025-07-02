
 const taskContainer = document.getElementById("task-list");
  let error =  document.createElement("p");
      taskContainer.appendChild(error)
const inputTask= () =>{
let task = document.getElementById("task").value;
console.log(task);
if (task===""){

    error.textContent="Please add tasks, dont add empty task";
    error.style.color="red";
    error.style.fontSize="20px";
    error.style.marginTop="20px";

    localStorage.setItem("error",error.textContent);
    let errorData=localStorage.getItem("error");
    console.log(errorData);

    return;
}

  error.textContent="";
  taskContainer.style.color = "";
  taskContainer.style.fontSize = "";
//    taskContainer.removeChild(error);




let taskName=document.createElement("p");
taskName.className="tname";
taskName.textContent=task.charAt(0).toUpperCase() + task.slice(1);
console.log(taskName);
console.log(taskName.textContent);

const buttonHolder=document.createElement("div");

let taskList =document.createElement("div");
taskList.className="tlist";

let taskRemove=document.createElement("button");
taskRemove.className="fas fa-times tremove";
// taskRemove.className="";
taskRemove.addEventListener("click",()=>{
    taskList.remove();
});



let taskComplete=document.createElement("button");
    taskComplete.className="fas fa-check tcomplete";
    taskComplete.addEventListener("click",() => {
    taskName.style.color="green";
    taskName.style.textDecoration ="line-through";

    });


    buttonHolder.appendChild(taskComplete);
    buttonHolder.appendChild(taskRemove);


// document.getElementById("tlist").appendChild(taskName);
taskList.appendChild(taskName);
taskList.appendChild( buttonHolder);


taskContainer.appendChild(taskList)

// localStorage.setItem("task",error.textContent);
// let errorData=localStorage.getItem("error");
// console.log(errorData);


localStorage.setItem("task",taskContainer.textContent);
let data=localStorage.getItem("task");
console.log(data);

document.getElementById("task").value="";
;


};

const taskButton=document.getElementById("task-btn");
taskButton.addEventListener("click",inputTask);


