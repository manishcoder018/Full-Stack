function getUniversities() {
  let country = document.getElementById("country").value;
  let result = document.getElementById("result");
  result.innerHTML = "Loading...";

  fetch("https://universities.hipolabs.com/search?country=" + country)
    .then(res => res.json())
    .then(data => {
      result.innerHTML = "";
      data.forEach(u => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML =
          "<h4>" + u.name + "</h4>" +
          "<p>State: " + (u["state-province"] || "N/A") + "</p>" +
          "<a href='" + u.web_pages[0] + "' target='_blank'>" +
          u.web_pages[0] + "</a>";
        result.appendChild(div);
      });
    });
}
