// Display all todo items on the DOM
function displayTodos(todoList) {

  const todoListElement = document.createElement("div");
  todoListElement.id = "todo-list";

  todoList.forEach(todoItem => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const completedButton = document.createElement("input");
    completedButton.type = "checkbox";

    completedButton.classList.add("completed-button")
    const completedButtonIcon = document.createElement("img");
    completedButtonIcon.src = "../assets/icons/checkbox-blank-outline.svg";
    completedButton.appendChild(completedButtonIcon);
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