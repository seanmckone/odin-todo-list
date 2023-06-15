import todoItem from "./todo-item";
import displayTodos from "./display-todos";

let todoItemList = new Array();
todoItemList.push(new todoItem(false, "test todo 1", "test desc", null, null));
todoItemList.push(new todoItem(false, "test todo 2", "test desc", null, null));
todoItemList.push(new todoItem(false, "test todo 3", "test desc", null, null));
todoItemList.push(new todoItem(false, "test todo 4", "test desc", null, null));
todoItemList.push(new todoItem(false, "test todo 5", "test desc", null, null));
todoItemList.push(new todoItem(false, "test todo 6", "test desc", null, null));

const body = document.body;

// body.appendChild(displayTodos(todoItemList));
// const todoList = document.getElementById("todo-list");

const addButton = document.getElementById("add-todo-button");

addButton.addEventListener("click", function () {
  todoList.insertAdjacentHTML("afterbegin",
    `
    <form class="todo-form">
      <div class="todo-form-left-section">
        <button class="completed-button"><img src="../assets/icons/checkbox-blank-outline.svg"></button>
      </div>
      <div class="todo-form-middle-section">
        <input type="text" class="todo-form-title" placeholder="new todo">
        <textarea class="todo-form-description" placeholder="description" rows="4"></textarea>
      </div>
      <div class="todo-form-right-section">
        <input type="date">
        <button type="button" class="todo-form-delete-button">
          <img src="../assets/icons/trash-can-outline.svg">
        </button>
      </div>
    </form>
    `
  )
});
