let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", function () {
  let taskText = input.value;

  let li = document.createElement("li");

  li.innerText = taskText;

  list.appendChild(li);

  input.value = "";
});
