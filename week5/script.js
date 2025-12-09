
let name = prompt("Enter your name:");
alert("Welcome " + name);
document.write("<h3>Hello, " + name + " 👋</h3>");



let age = prompt("Enter your age:");


if (age >= 18) {
  document.write("<p>You are eligible to vote (if-else).</p>");
} else {
  document.write("<p>You are not eligible to vote (if-else).</p>");
}

let result = (age >= 18) ? "Eligible (ternary)" : "Not Eligible (ternary)";
document.write("<p>" + result + "</p>");


let numbers = [1, 2, 3, 4, 5];

document.write("<p>Numbers: ");
numbers.forEach(function(n) {
  document.write(n + " ");
});
document.write("</p>");

let squares = numbers.map(function(n) {
  return n * n;
});
document.write("<p>Squares (map): " + squares + "</p>");

let evens = numbers.filter(function(n) {
  return n % 2 === 0;
});
document.write("<p>Even Numbers (filter): " + evens + "</p>");

let sum = numbers.reduce(function(total, n) {
  return total + n;
}, 0);
document.write("<p>Sum (reduce): " + sum + "</p>");
