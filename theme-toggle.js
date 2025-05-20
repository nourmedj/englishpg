// theme-toggle.js
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const body = document.body;

  // Load from localStorage if exists
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", function () {
    const isLight = this.checked;
    body.classList.toggle("light-theme", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});

  const toggleBtn = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });

