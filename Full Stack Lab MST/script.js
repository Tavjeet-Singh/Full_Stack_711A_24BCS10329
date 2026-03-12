const form = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const taskList = document.getElementById("myTasks");
const filter = document.getElementById("filter");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let task = taskInput.value;
    let p = priority.value;
    let li = document.createElement("li");
    let text = document.createTextNode(task + " - " + p);

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Complete";
    doneBtn.className = "done";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    li.appendChild(text);
    li.appendChild(document.createElement("br"));
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
    doneBtn.addEventListener("click", function(){
        li.style.textDecoration = "line-through";
        li.classList.add("completed");
    });
    deleteBtn.addEventListener("click", function(){
        taskList.removeChild(li);
    });
});

filter.addEventListener("change", function(){
    let tasks = taskList.getElementsByTagName("li");

    for(let i = 0; i < tasks.length; i++){
        if(filter.value === "all"){
            tasks[i].style.display = "block";
        }
        else if(filter.value === "completed"){
            if(tasks[i].classList.contains("completed")){
                tasks[i].style.display = "block";
            }else{
                tasks[i].style.display = "none";
            }
        }
        else if(filter.value === "pending"){
            if(tasks[i].classList.contains("completed")){
                tasks[i].style.display = "none";
            }else{
                tasks[i].style.display = "block";
            }
        }
    }
});