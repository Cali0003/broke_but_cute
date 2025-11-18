/**** Dark mode********/

const html = document.querySelector("html");
const btn = document.querySelector("#theme-btn");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);
