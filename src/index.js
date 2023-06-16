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

const todoList = displayTodos(todoItemList)
body.appendChild(todoList);

const addButton = document.getElementById("add-todo-button");

const todoForm = document.createElement("form");
todoForm.action = "/add-todo";
todoForm.method = "post";
todoForm.id = "todo-form";
todoForm.autocomplete = "off";

const todoFormLeftSection = document.createElement("div");
todoFormLeftSection.classList.add("todo-form-left-section");

const todoFormCompletedButton = document.createElement("div");
todoFormCompletedButton.type = "button";
todoFormCompletedButton.id = "todo-form-completed-button";

const completedButtonImage = document.createElement("img");
completedButtonImage.src = "../assets/icons/checkbox-blank-outline.svg";

todoFormCompletedButton.appendChild(completedButtonImage);
todoFormLeftSection.appendChild(todoFormCompletedButton);
todoForm.appendChild(todoFormLeftSection);

const todoFormMiddleSection = document.createElement("div");
todoFormMiddleSection.classList.add("todo-form-middle-section");

const todoFormTitle = document.createElement("input");
todoFormTitle.type = "text";
todoFormTitle.id = "todo-form-title";
todoFormTitle.placeholder = "new todo";
todoFormMiddleSection.appendChild(todoFormTitle);

const todoFormDescription = document.createElement("textarea");
todoFormDescription.id = "todo-form-description";
todoFormDescription.placeholder = "description";
todoFormDescription.rows = "4";
todoFormMiddleSection.appendChild(todoFormDescription);
todoForm.appendChild(todoFormMiddleSection);

const todoFormRightSection = document.createElement("div");
todoFormRightSection.classList.add("todo-form-right-section");

const todoFormDate = document.createElement("input");
todoFormDate.type = "date";
todoFormDate.id = "todo-form-date";
todoFormRightSection.appendChild(todoFormDate);

const todoFormDeleteButton = document.createElement("div");
todoFormDeleteButton.type = "button";
todoFormDeleteButton.id = "todo-form-delete-button";

todoFormDeleteButton.addEventListener("click", function () {
  todoForm.remove();
});

const deleteButtonImage = document.createElement("img");
deleteButtonImage.src = "../assets/icons/trash-can-outline.svg";

todoFormDeleteButton.appendChild(deleteButtonImage);
todoFormRightSection.appendChild(todoFormDeleteButton);
todoForm.appendChild(todoFormRightSection);

todoList.insertBefore(todoForm, todoList.firstChild);