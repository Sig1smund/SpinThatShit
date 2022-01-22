export default class Spinner {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.spinner = document.querySelector(selector);
    return refs;
  }

  hide() {
    this.refs.spinner.classList.add("spinner--is-hidden");
  }

  show() {
    this.refs.spinner.classList.remove("spinner--is-hidden");
  }
}
