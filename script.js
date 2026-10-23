// The History of Linux — script.js
"use strict";

// 1. Dark / light theme toggle (remembered in localStorage)
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("linux-history-theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀️";
}
themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("linux-history-theme", isLight ? "light" : "dark");
});

// 2. Timeline era filter
const filterButtons = document.querySelectorAll(".filter-btn");
const events = document.querySelectorAll(".event");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    const era = button.dataset.filter;
    events.forEach((event) => {
      const show = era === "all" || event.dataset.era === era;
      event.classList.toggle("hidden", !show);
    });
  });
});

// 3. Expand / collapse timeline events
document.querySelectorAll(".event-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.closest(".event").classList.toggle("collapsed");
  });
});

console.log("🐧 Linux History site loaded — kernel fans welcome!");
