const shoppingFormEl = document.querySelector("form[name='shopping']");
const listEl = document.querySelector("#list");
// custom event
const itemsUpdatedEvent = new CustomEvent("itemsUpdated");
const itemList = [];

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
            <span>
            ${item.name}
            </span>
        </div>
        <button>x</button>
    </li>`
    )
    .join("");

  listEl.innerHTML = itemListHtml;
}

window.addEventListener("submit", handleSubmit);
listEl.addEventListener("itemsUpdated", displayItems);
