let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", function () {
  let taskText = input.value;

  if (taskText === "") {
    return;
  }

  let li = document.createElement("li");

  let deleteBtn = document.createElement("button");

  deleteBtn.innerText = "Delete";

  li.innerText = taskText + "";

  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  list.appendChild(li);

  input.value = "";
});
