const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");

        li.textContent = task;

        li.addEventListener("click", function () {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        taskList.appendChild(li);
    });
}

function addTask() {
    const task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);
        saveTasks();
        renderTasks();

        taskInput.value = "";
    }
}

addBtn.addEventListener("click", addTask);

renderTasks();