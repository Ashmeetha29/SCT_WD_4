const addBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

function addTask() {
  const text = taskInput.value.trim();
  const date = taskDate.value;

  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text} ${date ? `<small>📅 ${new Date(date).toLocaleString()}` : ""}</small></span>
    <div class="actions">
      <button onclick="completeTask(this)">✔</button>
      <button onclick="editTask(this)">✏</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
  taskDate.value = "";
}

function completeTask(btn) {
  btn.closest("li").classList.toggle("completed");
}

function editTask(btn) {
  let li = btn.closest("li");
  let taskText = li.querySelector("span").innerText;
  taskInput.value = taskText.replace(/📅.*/, "").trim();
  deleteTask(btn);
}

function deleteTask(btn) {
  btn.closest("li").remove();
}

addBtn.addEventListener("click", addTask);
