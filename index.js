import Spinner from "./js/spinner.js";

const spinner = new Spinner({
  hidden: true,
  selector: ".spinner",
});

const inputForm = document.querySelector(".form");
const list = document.querySelectorAll(".spinners");
const spinButton = document.querySelector(".spinner__start");
const stopBtn = document.querySelector(".spinner__stop");
const sample = document.querySelector(".spinner");

inputForm.addEventListener("submit", onFormSubmit);
stopBtn.addEventListener("click", onStopSpin);

function createBounceMarkup() {
  const markup = `<span class="bounce__circle"></span>
      <span class="bounce__circle"></span>
      <span class="bounce__circle"></span>`;
  sample.insertAdjacentHTML("beforeend", markup);
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(event.target.elements.spinner.value);

  if (event.target.elements.spinner.value === "bounce") {
    createBounceMarkup();
    spinner.show();
    spinButton.disabled = true;
  }
}

function onStopSpin() {
  spinner.hide();
  sample.innerHTML = "";
  spinButton.disabled = false;
}
