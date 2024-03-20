const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}

function deleteTask(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
}
