function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.innerHTML = `
    <span onclick="toggleTaskCompletion(this)">${taskText}</span>
    <span class="delete-button" onclick="deleteTask(this)">&#10006;</span>
  `;
  taskList.appendChild(newTask);

  taskInput.value = "";
}

function deleteTask(deleteButton) {
  const taskList = document.getElementById("taskList");
  const taskToDelete = deleteButton.parentNode;
  taskList.removeChild(taskToDelete);
}

function toggleTaskCompletion(taskText) {
  taskText.classList.toggle("completed");
}
