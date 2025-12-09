let thumbnails = document.getElementById("thumbnails");
let mainImage = document.getElementById("mainImage");

thumbnails.addEventListener("click", function(e) {
  if (e.target.tagName === "IMG") {
    mainImage.src = e.target.src;
  }
});

let btn = document.getElementById("loadBtn");
let result = document.getElementById("result");

btn.addEventListener("click", function() {
  result.textContent = "Loading...";
  fetchData().then(function(data) {
    result.textContent = data;
  });
});

function fetchData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Data received from server");
    }, 2000);
  });
}
