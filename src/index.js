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
// Whether to display completed todos only
let displayCompleted = false; 
// Whether to display today's todos only
let displayToday = true;

// Dom elements
const addButton = document.getElementById("add-todo-button");
const themeSwitch = document.getElementById("theme-switch");
const navToggle = document.getElementById("nav-toggle");

todoItemList.push(new todoItem(false, "test todo 1", "test desc", "2023-06-21", "default"));
todoItemList.push(new todoItem(false, "test todo 2", "test desc", "2023-06-27", "default"));
todoItemList.push(new todoItem(false, "test todo 3", "test desc", "2023-06-21", "default"));
todoItemList.push(new todoItem(false, "test todo 4", "test desc", "2023-07-05", "default"));

let todoList = displayTodos(todoItemList, currentProject, displayCompleted, displayToday);
let todoTitleList = document.getElementsByClassName("todo-title");
reloadTodoList();

addButton.addEventListener("click", function() { displayTodoForm(true, 0)});

function displayTodoForm(fromAddButton, insertionPoint, defaultTitle = null, defaultDescription = null, defaultDate = moment().format('YYYY-MM-DD'), isComplete = false) {
  if (!todoFormOpen) {

    const newTodoForm = new todoForm(defaultTitle, defaultDescription, defaultDate, isComplete);

    newTodoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const todoToSubmit = new todoItem(
        newTodoForm.elements["todo-form-completed-button"].checked,
        newTodoForm.elements["todo-form-title"].value !== "" ? newTodoForm.elements["todo-form-title"].value : "new todo :)",
        newTodoForm.elements["todo-form-description"].value,
        newTodoForm.elements["todo-form-date"].value,
        currentProject
      );
      if (fromAddButton) {
        todoItemList.unshift(todoToSubmit);
      }
      else {
        todoItemList.splice(insertionPoint, 1, todoToSubmit);
      }

      reloadTodoList();

    });

    newTodoForm.elements["todo-form-delete-button"].addEventListener("click", () => {
      newTodoForm.remove();
      if (!fromAddButton) {
        todoItemList.splice(insertionPoint, 1);
      }
      reloadTodoList();
      
    });

    if (fromAddButton) {
      todoList.insertBefore(newTodoForm, todoList.firstChild);
    }
    else {
      todoList.insertBefore(newTodoForm, todoTitleList[insertionPoint].parentElement);
      todoTitleList[insertionPoint].parentElement.remove();
    }   

    todoFormOpen = true;
  }
}

themeSwitch.addEventListener("click", () => {
  if ( document.documentElement.className == "light") {
    document.documentElement.className = "dark";
  }
  else {
    document.documentElement.className = "light";
  }
});

navToggle.addEventListener("click", () => {
  document.getElementById("project-title").style.display = "none";
  document.getElementById("todo-list").style.display = "none";
  document.getElementById("add-todo-button").style.display = "none";
  document.getElementById("project-list-sidebar").style.display = "flex";
  document.getElementById("project-list-sidebar").style.width = "100%";
})

function reloadTodoList() {
  console.log(todoItemList);
  todoList.remove();
  todoList = displayTodos(todoItemList, currentProject, displayCompleted, displayToday);
  document.body.appendChild(todoList);
  todoFormOpen = false;

  todoTitleList = document.getElementsByClassName("todo-title");

  for (let i = 0; i < todoTitleList.length; i++) {
    todoTitleList[i].addEventListener("click", function() { displayTodoForm(false, i, todoItemList[i].title, todoItemList[i].description, todoItemList[i].dueDate, todoItemList[i].isCompleted)});
  }
}