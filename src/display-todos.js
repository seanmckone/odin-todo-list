import moment from "moment";

// Display all todo items on the DOM
function displayTodos(todoList, project, displayCompleted, displayToday) {

  const todoListElement = document.createElement("div");
  todoListElement.id = "todo-list";


  for (let i = 0; i < todoList.length; i++) {
    const todo = document.createElement("div");
    if ((displayCompleted && !todoList[i].isCompleted) || 
        (!displayCompleted && todoList[i].isCompleted)) {
      todo.style.display = "none";
    }

    if (displayToday && todoList[i].dueDate !== moment().format('YYYY-MM-DD')) {
      todo.style.display = "none";
    }

    if (todoList[i].project !== project) {
      todo.style.display = "none";
    }

    todo.classList.add("todo");

    const completedButton = document.createElement("input");
    completedButton.type = "checkbox";
    completedButton.checked = todoList[i].isCompleted;

    completedButton.addEventListener("click", () => {
      let tempTodoItemList = JSON.parse(localStorage.getItem("todoItemList"));
      tempTodoItemList[i].isCompleted = completedButton.checked;
      localStorage.setItem("todoItemList", JSON.stringify(tempTodoItemList));

      completedButton.parentElement.remove();
    });

    completedButton.classList.add("completed-button")

    todo.appendChild(completedButton);

    const todoTitle = document.createElement("h3");
    todoTitle.classList.add("todo-title");
    todoTitle.textContent = todoList[i].title;

    todo.appendChild(todoTitle);

    todoListElement.appendChild(todo);
  };

  return todoListElement;
  
}

export default displayTodos;