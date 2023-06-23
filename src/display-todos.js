// Display all todo items on the DOM
function displayTodos(todoList, project) {

  const todoListElement = document.createElement("div");
  todoListElement.id = "todo-list";

  todoList.forEach(todoItem => {
    if (todoItem.project === project) {
      const todo = document.createElement("div");
      todo.classList.add("todo");

      const completedButton = document.createElement("input");
      completedButton.type = "checkbox";
      completedButton.checked = todoItem.isCompleted;

      completedButton.addEventListener("click", () => {
        todoItem.isCompleted = completedButton.checked;
      });

      completedButton.classList.add("completed-button")

      todo.appendChild(completedButton);

      const todoTitle = document.createElement("h3");
      todoTitle.classList.add("todo-title");
      todoTitle.textContent = todoItem.title;

      todo.appendChild(todoTitle);

      todoListElement.appendChild(todo);
    }
  });

  return todoListElement;
  
}

export default displayTodos;