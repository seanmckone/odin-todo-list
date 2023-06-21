import todoItem from "./todo-item";
import displayTodos from "./display-todos";
import todoForm from "./todo-form";

let todoItemList = new Array();
// todoItemList.push(new todoItem(false, "test todo 1", "test desc", null, null));
// todoItemList.push(new todoItem(false, "test todo 2", "test desc", null, null));
// todoItemList.push(new todoItem(false, "test todo 3", "test desc", null, null));
// todoItemList.push(new todoItem(false, "test todo 4", "test desc", null, null));
// todoItemList.push(new todoItem(false, "test todo 5", "test desc", null, null));
// todoItemList.push(new todoItem(false, "test todo 6", "test desc", null, null));

const body = document.body;

let todoList = displayTodos(todoItemList);
body.appendChild(todoList);

const addButton = document.getElementById("add-todo-button");
addButton.addEventListener("click", function () {
  const newTodoForm = new todoForm();
  newTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoToSubmit = new todoItem(
      false,
      newTodoForm.elements["todo-form-title"].value,
      newTodoForm.elements["todo-form-description"].value,
      newTodoForm.elements["todo-form-date"].value,
      null
    );
    todoItemList.unshift(todoToSubmit);
    todoList.remove();
    todoList = displayTodos(todoItemList);
    body.appendChild(todoList);
  });

  todoList.insertBefore(newTodoForm, todoList.firstChild);
});
