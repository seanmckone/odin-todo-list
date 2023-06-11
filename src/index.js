const todoList = document.getElementById("todo-list");

const addButton = document.getElementById("add-todo-button");

addButton.addEventListener("click", function () {
  todoList.insertAdjacentHTML("afterbegin",
    `
    <form class="todo">
      <div class="todo-left-section">
        <input type="text" class="todo-title" placeholder="new todo">
        <textarea class="todo-description" placeholder="description" rows="4"></textarea>
      </div>
      <div class="todo-right-section">
        <input type="date">
        <button type="button" class="todo-delete-button">
          <img src="../assets/icons/trash-can-outline.svg">
        </button>
      </div>
    </form>
    `
  )
});