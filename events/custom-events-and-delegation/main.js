const shoppingFormEl = document.querySelector("form[name='shopping']");
const listEl = document.querySelector("#list");
// custom event
const itemsUpdatedEvent = new CustomEvent("itemsUpdated");
let itemList = [];

function handleSubmit(event) {
  event.preventDefault();

  const { value: name } = event.currentTarget.item;
  const item = {
    name,
    id: Date.now(),
    completed: false,
  };

  itemList.push(item);

  // clearing the form
  event.target.reset();

  listEl.dispatchEvent(itemsUpdatedEvent);
}

function displayItems() {
  const itemListHtml = itemList
    .map(
      (item) =>
        `<li>
        <div>
            <input 
            type="checkbox" 
            name="checkbox" 
            id="${item.id}" 
            ${item.completed && "checked"}
            />
            <span class="itemName">
            ${item.name}
            </span>
        </div>
        <button aria-label="Remove Item" id="${item.id}">
          &#10005
        </button>
    </li>`
    )
    .join("");

  listEl.innerHTML = itemListHtml;
}

function mirrorToLocalStorage() {
  localStorage.setItem("items", JSON.stringify(itemList));
}

function restoreFromLocalStorage() {
  const savedItemList = JSON.parse(localStorage.getItem("items"));

  if (!(savedItemList && savedItemList.length)) return;

  itemList = savedItemList;

  listEl.dispatchEvent(itemsUpdatedEvent);
}

function deleteItem(id) {
  itemList = itemList.filter((item) => item.id !== id);

  listEl.dispatchEvent(itemsUpdatedEvent);
}

function markAsComplete(id) {
  const item = itemList.find((item) => item.id === id);
  item.completed = !item.completed;

  listEl.dispatchEvent(itemsUpdatedEvent);
}

shoppingFormEl.addEventListener("submit", handleSubmit);
listEl.addEventListener("itemsUpdated", displayItems);
listEl.addEventListener("itemsUpdated", mirrorToLocalStorage);

// Event Delegation:
// We listen to click on the list <ul> but then delegate
// the click over to the button if that is what was clicked
listEl.addEventListener("click", function (event) {
  const id = parseInt(event.target.id);

  if (event.target.matches("button")) {
    deleteItem(id);
  }

  if (event.target.matches("input[type='checkbox']")) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
