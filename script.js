"use script";

// Grab the toggle button and elements with class "dark"
const toggleBtn = document.querySelector(".toggle_fill");
const labelText = document.querySelector(".text");
const dark = document.querySelectorAll(".dark");

// Light mode
const lightMode = function () {
  for (let i = 0; i < dark.length; i++) {
    dark[i].classList.remove("dark");
  }
};

// Dark mode
const darkMode = function () {
  for (let i = 0; i < dark.length; i++) {
    dark[i].classList.add("dark");
  }
};

document.onclick = function (event) {
  console.log(event);
  if (event.target.checked === true) {
    lightMode();
    labelText.innerText = "Light Mode";
    toggleBtn.style.backgroundColor = "hsl(230, 22%, 74%)";
  } else {
    darkMode();
    labelText.innerText = "Dark Mode";
  }
};
