let count = 0;
const countEl = document.querySelector("#count");
const decrementButtonEl = document.querySelector("#decrementButton");
const incrementButtonEl = document.querySelector("#incrementButton");

function renderCounter() {
  countEl.innerText = count;
}

function handleIncrement() {
  if (count > 9) {
    incrementButtonEl.removeEventListener("click", handleIncrement);
    return;
  }

  count++;
  renderCounter();
}

function handleDecrement() {
  if (count < -9) {
    decrementButtonEl.removeEventListener("click", handleDecrement);
    return;
  }

  count--;
  renderCounter();
}

// Event listners
window.addEventListener("load", renderCounter);
decrementButtonEl.addEventListener("click", handleDecrement);
incrementButtonEl.addEventListener("click", handleIncrement);
