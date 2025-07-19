// Select the form and output elements
const form = document.querySelector(".contact-form");

const outputName = document.getElementById("output-name");
const outputBirthdate = document.getElementById("output-birthdate");
const outputEmail = document.getElementById("output-email");
const outputMessage = document.getElementById("output-message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page refresh

  // Get input values
  const name = form.querySelector('input[type="text"]').value;
  const birthdate = form.querySelector('input[type="date"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector("textarea").value;

  // Display values in output
  outputName.textContent = "Name: " + name;
  outputBirthdate.textContent = "Birthdate: " + birthdate;
  outputEmail.textContent = "Email: " + email;
  outputMessage.textContent = "Message: " + message;

  // Optionally, clear the form after showing the output
  // form.reset();
});

form.addEventListener("reset", function () {
  // Clear the output when the form is reset
  outputName.textContent = "Name:";
  outputBirthdate.textContent = "Birthdate:";
  outputEmail.textContent = "Email:";
  outputMessage.textContent = "Message:";
});

document.addEventListener("DOMContentLoaded", function () {
  // Existing navbar hamburger code...

  // Prompt user for their name on page load
  let userName = prompt("Welcome! Please enter your name:");

  // If user enters a name, update the span
  if (userName && userName.trim() !== "") {
    document.getElementById("name").textContent = userName.trim();
  }
});
