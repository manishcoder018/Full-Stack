function add(a, b) {
  return a + b;
}

function outerFunction() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

let output = document.getElementById("output");

output.innerHTML += "add(2,3): " + add(2,3) + "<br>";

let counter = outerFunction();
output.innerHTML += counter() + "<br>";
output.innerHTML += counter() + "<br>";

(function() {
  output.innerHTML += "IIFE Executed<br>";
})();

function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value;
  if (text === "") return;

  let li = document.createElement("li");
  li.textContent = text;

  let btn = document.createElement("button");
  btn.textContent = "Delete";

  btn.onclick = function() {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
