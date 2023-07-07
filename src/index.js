import todoItem from "./modules/todo-item";
import displayTodos from "./modules/display-todos";
import todoForm from "./modules/todo-form";
import moment from "moment";
import displayProjects from "./modules/display-projects";
import projectForm from "./modules/project-form";

// Fields
// List of todo-item objects
let todoItemList = new Array();
if (JSON.parse(localStorage.getItem("todoItemList")) == null) {
  localStorage.setItem("todoItemList", JSON.stringify(todoItemList));
}
// List of projects
let projectItemList = new Array("general");
if (JSON.parse(localStorage.getItem("projectItemList")) == null) {
  localStorage.setItem("projectItemList", JSON.stringify(projectItemList));
}
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
// Whether mobile menu is open or not
let menuOpen = false;

if ( JSON.parse(localStorage.getItem("darkModeOn"))) {
  document.documentElement.className = "dark";
}
else {
  document.documentElement.className = "light";
}


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

let todoList = displayTodos(JSON.parse(localStorage.getItem("todoItemList")), currentProject, displayCompleted, displayToday);
let todoTitleList = document.getElementsByClassName("todo-title");
reloadTodoList();

let projectList = displayProjects(JSON.parse(localStorage.getItem("projectItemList")));
let projectNameList = document.getElementsByClassName("project");
reloadProjectList();
projectNameList[0].classList.add("selected-project");

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
        let tempTodoItemList = JSON.parse(localStorage.getItem("todoItemList"));
        tempTodoItemList.unshift(todoToSubmit);
        localStorage.setItem("todoItemList", JSON.stringify(tempTodoItemList));
      }
      else {
        let tempTodoItemList = JSON.parse(localStorage.getItem("todoItemList"));
        tempTodoItemList.splice(insertionPoint, 1, todoToSubmit);
        localStorage.setItem("todoItemList", JSON.stringify(tempTodoItemList));
      }

      reloadTodoList();

    });

    newTodoForm.elements["todo-form-delete-button"].addEventListener("click", () => {
      newTodoForm.remove();
      if (!fromAddButton) {
        let tempTodoItemList = JSON.parse(localStorage.getItem("todoItemList"));
        tempTodoItemList.splice(insertionPoint, 1);
        localStorage.setItem("todoItemList", JSON.stringify(tempTodoItemList));
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

      let tempProjectItemList = JSON.parse(localStorage.getItem("projectItemList"));
      tempProjectItemList.push(newProjectForm.elements["project-form-title"].value !== "" ? newProjectForm.elements["project-form-title"].value : "new project :)");
      localStorage.setItem("projectItemList", JSON.stringify(tempProjectItemList));

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
  localStorage.setItem("darkModeOn", JSON.stringify(!JSON.parse(localStorage.getItem("darkModeOn"))));
  if ( JSON.parse(localStorage.getItem("darkModeOn"))) {
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
  if (!menuOpen) {
    document.getElementById("project-title").style.display = "none";
    document.getElementById("todo-list").style.display = "none";
    document.getElementById("add-todo-button").style.display = "none";
    document.getElementById("project-list-sidebar").style.display = "flex";
    document.getElementById("project-list-sidebar").style.width = "100%";
  }
  else {
    document.getElementById("project-title").style.display = "flex";
    document.getElementById("todo-list").style.display = "flex";
    document.getElementById("add-todo-button").style.display = "block";
    document.getElementById("project-list-sidebar").style.display = "none";
  }
  menuOpen = !menuOpen;
})

function reloadTodoList() {
  todoList.remove();
  todoList = displayTodos(JSON.parse(localStorage.getItem("todoItemList")), currentProject, displayCompleted, displayToday);
  document.body.appendChild(todoList);
  todoFormOpen = false;

  todoTitleList = document.getElementsByClassName("todo-title");

  for (let i = 0; i < todoTitleList.length; i++) {
    todoTitleList[i].addEventListener("click", () => { displayTodoForm(false, i, JSON.parse(localStorage.getItem("todoItemList"))[i].title, JSON.parse(localStorage.getItem("todoItemList"))[i].description, JSON.parse(localStorage.getItem("todoItemList"))[i].dueDate, JSON.parse(localStorage.getItem("todoItemList"))[i].isCompleted)});
  }
}

function reloadProjectList() {
  projectFormOpen = false;
  projectList.remove();
  projectList = displayProjects(JSON.parse(localStorage.getItem("projectItemList")));
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