let list = document.getElementById("taskList");

function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value === "") return;

  let li = document.createElement("li");

  let check = document.createElement("input");
  check.type = "checkbox";
  check.onchange = function () {
    li.style.textDecoration = this.checked ? "line-through" : "none";
  };

  let text = document.createElement("span");
  text.textContent = input.value;

  let up = document.createElement("button");
  up.textContent = "↑";
  up.onclick = function () {
    if (li.previousElementSibling)
      list.insertBefore(li, li.previousElementSibling);
  };

  let down = document.createElement("button");
  down.textContent = "↓";
  down.onclick = function () {
    if (li.nextElementSibling)
      list.insertBefore(li.nextElementSibling, li);
  };

  let del = document.createElement("button");
  del.textContent = "Delete";
  del.onclick = function () {
    li.remove();
  };

  li.append(check, text, up, down, del);
  list.appendChild(li);
  input.value = "";
}

let board = document.getElementById("board");

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.style.background =
      (row + col) % 2 === 0 ? "white" : "black";
    board.appendChild(cell);
  }
}
