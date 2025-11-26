const input = document.getElementById("input");
const button = document.getElementById("button");
const error = document.getElementById("error");
const inputDiv = document.getElementById("input-div");
const hiddenText = document.getElementById("hidden-text");

button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Enter your email first");
  } else if (!input.value.includes("@")) {
    hiddenText.classList.remove("hidden");
    error.classList.remove("hidden");
    inputDiv.style.borderColor = "red";
  } else {
    hiddenText.classList.add("hidden");
    error.classList.add("hidden");

    alert("Stay Tuned");
  }
});
