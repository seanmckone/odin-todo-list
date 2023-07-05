import moment from "moment";

// Display all todo items on the DOM
function displayTodos(todoList, project, displayCompleted, displayToday) {

  const todoListElement = document.createElement("div");
  todoListElement.id = "todo-list";

  todoList.forEach(todoItem => {
    const todo = document.createElement("div");
    if ((displayCompleted && !todoItem.isCompleted) || 
        (!displayCompleted && todoItem.isCompleted)) {
      todo.style.display = "none";
    }

    if (displayToday && todoItem.dueDate !== moment().format('YYYY-MM-DD')) {
      todo.style.display = "none";
    }

    if (todoItem.project !== project) {
      todo.style.display = "none";
    }

    todo.classList.add("todo");

    const completedButton = document.createElement("input");
    completedButton.type = "checkbox";
    completedButton.checked = todoItem.isCompleted;

    completedButton.addEventListener("click", () => {
      todoItem.isCompleted = completedButton.checked;
      completedButton.parentElement.remove();
    });

    completedButton.classList.add("completed-button")

    todo.appendChild(completedButton);

    const todoTitle = document.createElement("h3");
    todoTitle.classList.add("todo-title");
    todoTitle.textContent = todoItem.title;

    todo.appendChild(todoTitle);

    todoListElement.appendChild(todo);
  });

  return todoListElement;
  
}

export default displayTodos;