import Spinner from "./js/spinner.js";

const spinner = new Spinner({
  hidden: true,
  selector: ".spinner",
});

const inputForm = document.querySelector(".form");
const list = document.querySelectorAll(".spinners");
const stopBtn = document.querySelector(".spinner__stop");

inputForm.addEventListener("submit", onFormSubmit);
stopBtn.addEventListener("click", onStopSpin);

function bounceMarkup() {
  return `<span class="bounce__circle"></span>
      <span class="bounce__circle"></span>
      <span class="bounce__circle"></span>`;
}

function createBounceMarkup() {
  const markup = `<span class="bounce__circle"></span>
      <span class="bounce__circle"></span>
      <span class="bounce__circle"></span>`;
  return spinner.insertAjacentHTML("beforeend", markup);
}

function onFormSubmit(event) {
  event.preventDefault();

  if (inputForm.value === "Bounce") {
    createBounceMarkup();
    spinner.show();
  }
}

function onStopSpin() {
  spinner.hide();
}
