const taskInput =
document.getElementById(
"taskInput"
);

const taskList =
document.getElementById(
"taskList"
);

/* LOAD TASKS */

window.onload = () => {

const savedTasks =

JSON.parse(
localStorage.getItem(
"tasks"
)
) || [];

savedTasks.forEach(task => {

createTask(
task.text,
task.completed
);

});

};

/* ADD TASK */

function addTask(){

const taskText =
taskInput.value.trim();

if(taskText === "") return;

createTask(
taskText,
false
);

saveTasks();

taskInput.value = "";

}

/* CREATE TASK */

function createTask(
text,
completed
){

const li =
document.createElement(
"li"
);

li.className =

completed ?
"task completed"
:
"task";

li.innerHTML =

`
<span>${text}</span>

<div class="task-buttons">

<button
class="complete-btn">

✔

</button>

<button
class="delete-btn">

✖

</button>

</div>
`;

const completeBtn =
li.querySelector(
".complete-btn"
);

const deleteBtn =
li.querySelector(
".delete-btn"
);

/* COMPLETE */

completeBtn.onclick = () => {

li.classList.toggle(
"completed"
);

saveTasks();

};

/* DELETE */

deleteBtn.onclick = () => {

li.remove();

saveTasks();

};

taskList.appendChild(li);

}

/* SAVE */

function saveTasks(){

const tasks = [];

document.querySelectorAll(
".task"
).forEach(task => {

tasks.push({

text:
task.querySelector(
"span"
).innerText,

completed:
task.classList.contains(
"completed"
)

});

});

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

console.log(
"To-Do App loaded 📝"
);
