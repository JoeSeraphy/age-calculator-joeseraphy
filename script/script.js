const form = document.querySelector("#form");
const inputDay = document.querySelector("#inputDay");
const inputMonth = document.querySelector("#inputMonth");
const inputYear = document.querySelector("#inputYear");
const labelError = document.querySelectorAll(".error");
const messageError = document.querySelectorAll(".inputErrorMessage");
const dmy = document.querySelectorAll("#date");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  if (checkDateAge()) {
    if (inputDay.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (inputMonth.value > month) {
      month = month + 12;
      year = year - 1;
    }
    const d = day - inputDay.value;
    const m = month - inputMonth.value;
    const y = year - inputYear.value;

    dmy[0].textContent = y;
    dmy[1].textContent = m;
    dmy[2].textContent = d;
  }
});

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function checkInputs() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((input) => {
    if (!input.value) {
      input.style.border = "1px solid var(--light-red)";
      messageError.forEach((error) => {
        error.textContent = "this field is required";
      });
      labelError.forEach((error) => {
        error.classList.add("active");
      });
      validator = false;
    } else {
      input.style.border = "1px solid var(--purple)";
      messageError.forEach((error) => {
        error.textContent = "";
      });
      validator = true;
    }
    return validator;
  });
}
function checkDateAge() {
  let validator = true;

  if (inputDay.value > 31) {
    inputDay.style.border = "1px solid var(--light-red)";
    messageError[0].textContent = "Most be a valid day";
    labelError[0].classList.add("active");
    validator = false;
  }
  if (inputMonth.value > 12) {
    inputMonth.style.border = "1px solid var(--light-red)";
    messageError[1].textContent = "Most be a valid month";
    labelError[1].classList.add("active");
    validator = false;
  }
  if (inputYear.value > year) {
    inputYear.style.border = "1px solid var(--light-red)";
    messageError[2].textContent = "Most be in the past";
    labelError[2].classList.add("active");
    validator = false;
  }
  return validator;
}
