const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "🌙";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});