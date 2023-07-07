import todoItem from "./todo-item";
import displayTodos from "./display-todos";
import todoForm from "./todo-form";
import moment from "moment";
import displayProjects from "./display-projects";
import projectForm from "./project-form";

// Fields
// List of todo-item objects
let todoItemList = new Array();
// List of projects
let projectItemList = new Array("general", "tennis");
// True if a todo form is currently open
let todoFormOpen = false;
// True if a project form is currently open
let projectFormOpen = false;
// The current open project
let currentProject = "general";
// Whether to display completed todos only
let displayCompleted = false; 
// Whether to display today's todos only
let displayToday = false;

// Dom elements
const addButton = document.getElementById("add-todo-button");
const themeSwitch = document.getElementById("theme-switch");
const navToggle = document.getElementById("nav-toggle");
const projectTitle = document.getElementById("project-title");
const allButton = document.getElementById("all-button");
const todayButton = document.getElementById("today-button");
const completedButton = document.getElementById("completed-todo-button");
const buttonList = document.getElementById("button-list");
const addProjectButton = document.getElementById("add-project-button");

todoItemList.push(new todoItem(false, "test todo 1", "test desc", "2023-06-21", "general"));
todoItemList.push(new todoItem(false, "test todo 2", "test desc", "2023-06-27", "general"));
todoItemList.push(new todoItem(false, "test todo 3", "test desc", "2023-06-21", "general"));
todoItemList.push(new todoItem(false, "test todo 4", "test desc", "2023-07-05", "general"));
todoItemList.push(new todoItem(false, "test todo 5", "test desc", "2023-07-05", "tennis"));

let todoList = displayTodos(todoItemList, currentProject, displayCompleted, displayToday);
let todoTitleList = document.getElementsByClassName("todo-title");
reloadTodoList();

let projectList = displayProjects(projectItemList);
let projectNameList = document.getElementsByClassName("project");
reloadProjectList();

addButton.addEventListener("click", function() { displayTodoForm(true, 0) });
addProjectButton.addEventListener("click", function() { displayProjectForm() });

function displayTodoForm(fromAddButton, insertionPoint, defaultTitle = null, defaultDescription = null, defaultDate = moment().format('YYYY-MM-DD'), isComplete = displayCompleted) {
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

function displayProjectForm() {
  if (!projectFormOpen) {

    const newProjectForm = new projectForm();
    newProjectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      projectItemList.push(newProjectForm.elements["project-form-title"].value !== "" ? newProjectForm.elements["project-form-title"].value : "new project :)");
      reloadProjectList();

      newProjectForm.remove();

    });

    newProjectForm.elements["project-form-delete-button"].addEventListener("click", () => {
      newProjectForm.remove();
      reloadProjectList();
    });

    buttonList.appendChild(newProjectForm);
    projectFormOpen = true;
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

allButton.addEventListener("click", () => {
  projectTitle.textContent = "all";
  displayCompleted = false;
  displayToday = false;
  reloadTodoList();
});

todayButton.addEventListener("click", () => {
  projectTitle.textContent = "today";
  displayCompleted = false;
  displayToday = true;
  reloadTodoList();
});

completedButton.addEventListener("click", () => {
  projectTitle.textContent = "completed";
  displayCompleted = true;
  displayToday = false;
  reloadTodoList();
});

navToggle.addEventListener("click", () => {
  document.getElementById("project-title").style.display = "none";
  document.getElementById("todo-list").style.display = "none";
  document.getElementById("add-todo-button").style.display = "none";
  document.getElementById("project-list-sidebar").style.display = "flex";
  document.getElementById("project-list-sidebar").style.width = "100%";
})

function reloadTodoList() {
  todoList.remove();
  todoList = displayTodos(todoItemList, currentProject, displayCompleted, displayToday);
  document.body.appendChild(todoList);
  todoFormOpen = false;

  todoTitleList = document.getElementsByClassName("todo-title");

  for (let i = 0; i < todoTitleList.length; i++) {
    todoTitleList[i].addEventListener("click", () => { displayTodoForm(false, i, todoItemList[i].title, todoItemList[i].description, todoItemList[i].dueDate, todoItemList[i].isCompleted)});
  }
}

function reloadProjectList() {
  projectFormOpen = false;
  projectList.remove();
  projectList = displayProjects(projectItemList);
  buttonList.appendChild(projectList);

  projectNameList = document.getElementsByClassName("project");

  for (let i = 0; i < projectNameList.length; i++) {
    projectNameList[i].addEventListener("click", () => { 
      currentProject = projectNameList[i].textContent;
      for (let j = 0; j < projectNameList.length; j++) {
        projectNameList[j].classList.remove("selected-project");
      }
      projectNameList[i].classList.add("selected-project");
      reloadTodoList();
    });
  }
}