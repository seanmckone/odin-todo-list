import todoItem from "./todo-item";
import displayTodos from "./display-todos";
import todoForm from "./todo-form";

let todoItemList = new Array();
todoItemList.push(new todoItem(false, "test todo 1", "test desc", "2023-06-21", "default"));

let todoFormOpen = false;
let currentProject = "default";

let todoList = displayTodos(todoItemList);
document.body.appendChild(todoList);

const addButton = document.getElementById("add-todo-button");
addButton.addEventListener("click", function () {
  if (!todoFormOpen) {
    const newTodoForm = new todoForm();

    newTodoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const todoToSubmit = new todoItem(
        newTodoForm.elements["todo-form-completed-button"].checked,
        newTodoForm.elements["todo-form-title"].value,
        newTodoForm.elements["todo-form-description"].value,
        newTodoForm.elements["todo-form-date"].value,
        currentProject
      );
      todoItemList.unshift(todoToSubmit);
      todoList.remove();
      todoList = displayTodos(todoItemList);
      body.appendChild(todoList);
      todoFormOpen = false;
    });

    todoList.insertBefore(newTodoForm, todoList.firstChild);
    todoFormOpen = true;

    document.getElementById("todo-form-delete-button").addEventListener("click", function() {
      newTodoForm.remove();
      todoFormOpen = false;
    });
  }
});

// const todoTitleList = document.getElementsByClassName("todo");

// for (let i = 0; i < todoTitleList.length; i++) {
//   todoTitleList[i].addEventListener("click", function() {
  
//     if (!todoFormOpen) {
//       const newTodoForm = new todoForm();
  
//       newTodoForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const todoToSubmit = new todoItem(
//           false,
//           newTodoForm.elements["todo-form-title"].value,
//           newTodoForm.elements["todo-form-description"].value,
//           newTodoForm.elements["todo-form-date"].value,
//           null
//         );
//         todoItemList.splice(i, 1, todoToSubmit);
//         todoList.remove();
//         todoList = displayTodos(todoItemList);
//         body.appendChild(todoList);
//         todoFormOpen = false;
//       });

//       newTodoForm.elements["todo-form-title"].value = todoItemList[i].title;
//       newTodoForm.elements["todo-form-description"].value = todoItemList[i].description;
//       newTodoForm.elements["todo-form-date"].value = todoItemList[i].date;
  
//       todoList.insertBefore(newTodoForm, todoTitleList[i]);
//       todoFormOpen = true;
  
//       document.getElementById("todo-form-delete-button").addEventListener("click", function() {
//         newTodoForm.remove();
//         todoFormOpen = false;
//       });
//       todoTitleList[i].remove();
//     }
//   });
// }