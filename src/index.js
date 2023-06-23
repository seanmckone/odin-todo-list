import todoItem from "./todo-item";
import displayTodos from "./display-todos";
import todoForm from "./todo-form";
import moment from "moment";

// Fields
// List of todo-item objects
let todoItemList = new Array();
// True if a todo form is currently open
let todoFormOpen = false;
// The current open project
let currentProject = "default";

// Dom elements
const addButton = document.getElementById("add-todo-button");

todoItemList.push(new todoItem(false, "test todo 1", "test desc", "2023-06-21", "default"));
todoItemList.push(new todoItem(false, "test todo 2", "test desc", "2023-06-21", "default"));
todoItemList.push(new todoItem(false, "test todo 3", "test desc", "2023-06-21", "default"));
todoItemList.push(new todoItem(false, "test todo 4", "test desc", "2023-06-21", "default"));

let todoList = displayTodos(todoItemList, currentProject);
let todoTitleList = document.getElementsByClassName("todo-title");
reloadTodoList();

addButton.addEventListener("click", function() { displayTodoForm(0)});

function displayTodoForm(insertionPoint, defaultTitle = null, defaultDescription = null, defaultDate = moment().format('YYYY-MM-DD')) {
  if (!todoFormOpen) {

    const newTodoForm = new todoForm(defaultTitle, defaultDescription, defaultDate);

    newTodoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const todoToSubmit = new todoItem(
        newTodoForm.elements["todo-form-completed-button"].checked,
        newTodoForm.elements["todo-form-title"].value,
        newTodoForm.elements["todo-form-description"].value,
        newTodoForm.elements["todo-form-date"].value,
        currentProject
      );
      todoItemList.splice(insertionPoint, 1, todoToSubmit);
      reloadTodoList();

    });

    newTodoForm.elements["todo-form-delete-button"].addEventListener("click", () => {
      newTodoForm.remove();
      todoItemList.splice(insertionPoint, 1);
      reloadTodoList();
      
    });

    todoList.insertBefore(newTodoForm, todoTitleList[insertionPoint].parentElement);

    todoTitleList[insertionPoint].parentElement.remove();

    todoFormOpen = true;
  }
}

function reloadTodoList() {
  todoList.remove();
  todoList = displayTodos(todoItemList, currentProject);
  document.body.appendChild(todoList);
  todoFormOpen = false;

  todoTitleList = document.getElementsByClassName("todo-title");

  for (let i = 0; i < todoTitleList.length; i++) {
    todoTitleList[i].addEventListener("click", function() { displayTodoForm(i, todoItemList[i].title, todoItemList[i].description, todoItemList[i].date)});
  }
}