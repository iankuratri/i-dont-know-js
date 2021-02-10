const toDoContainerEl = document.querySelector("#toDoContainer");
const loaderMessageEl = document.querySelector("#loaderMessage");

async function getToDo() {
  try {
    const respone = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await respone.json();
    renderToDo(todos);
  } catch (error) {
    alert("Error in fetching to do's. See console for more info.");
  }
}

function renderToDo(todos) {
  const allToDoHtml = todos
    .map((todo) => createToDoHtml(todo.title))
    .join("\n");

  toDoContainerEl.innerHTML = allToDoHtml;

  const toDoFoundMsg = `${todos.length} to do's found`;
  loaderMessageEl.innerText = toDoFoundMsg;

  addToDoDeleteEventListner();
}

function createToDoHtml(title) {
  return `<div class="to-do">
              <p>${title}</p>
              <button>
                <strong>x</strong>
              </button>
          </div>`;
}

function addToDoDeleteEventListner() {
  const deleteButtonNodes = document.querySelectorAll(".to-do button");

  deleteButtonNodes.forEach((deleteButtonEl) => {
    deleteButtonEl.addEventListener("click", handleDeleteToDo);
  });
}

function handleDeleteToDo(event) {
  event.stopPropagation();

  const { target, currentTarget, eventPhase } = event;

  /**
   * event.target – the deepest element that originated the event.
   * event.currentTarget (=this) – the current element that handles the event (the one that has the handler on it)
   * event.eventPhase – the current phase (capturing=1, target=2, bubbling=3).
   */

  // element that is clicked
  console.log("target: ", target);

  // element that fired event listner
  console.log("currentTarget: ", currentTarget);

  // target and currentTarget are same
  console.log("target and currentTarget are same", target === currentTarget);

  console.log("eventPhase: ", eventPhase);

  const toDoToDelete = currentTarget.closest(".to-do");
  toDoToDelete.remove();
}

window.addEventListener("load", getToDo);
