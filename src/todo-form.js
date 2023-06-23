
function todoForm (defaultTitle, defaultDescription, defaultDate) {

  const todoForm = document.createElement("form");
  todoForm.action = "/add-todo";
  todoForm.method = "post";
  todoForm.id = "todo-form";
  todoForm.autocomplete = "off";

  const todoFormLeftSection = document.createElement("div");
  todoFormLeftSection.classList.add("todo-form-left-section");

  const todoFormCompletedButton = document.createElement("input");
  todoFormCompletedButton.type = "checkbox";
  todoFormCompletedButton.id = "todo-form-completed-button";

  todoFormLeftSection.appendChild(todoFormCompletedButton);
  todoForm.appendChild(todoFormLeftSection);

  const todoFormMiddleSection = document.createElement("div");
  todoFormMiddleSection.classList.add("todo-form-middle-section");

  const todoFormTitle = document.createElement("input");
  todoFormTitle.type = "text";
  todoFormTitle.id = "todo-form-title";
  todoFormTitle.placeholder = "new todo";
  todoFormTitle.value = defaultTitle;
  todoFormMiddleSection.appendChild(todoFormTitle);

  const todoFormDescription = document.createElement("textarea");
  todoFormDescription.id = "todo-form-description";
  todoFormDescription.placeholder = "description";
  todoFormDescription.rows = "4";
  todoFormDescription.value = defaultDescription;
  todoFormMiddleSection.appendChild(todoFormDescription);
  todoForm.appendChild(todoFormMiddleSection);

  const todoFormRightSection = document.createElement("div");
  todoFormRightSection.classList.add("todo-form-right-section");

  const todoFormDate = document.createElement("input");
  todoFormDate.type = "date";
  todoFormDate.id = "todo-form-date";
  todoFormDate.value = defaultDate;
  todoFormRightSection.appendChild(todoFormDate);

  const todoFormBottomRight = document.createElement("div");
  todoFormBottomRight.classList.add("todo-form-bottom-right");

  const todoFormSubmitButton = document.createElement("button");
  todoFormSubmitButton.type = "submit";
  todoFormSubmitButton.id = "todo-form-submit-button";

  const submitButtonImage = document.createElement("img");
  submitButtonImage.src = "../assets/icons/check.svg";

  todoFormSubmitButton.appendChild(submitButtonImage);
  todoFormBottomRight.appendChild(todoFormSubmitButton);

  const todoFormDeleteButton = document.createElement("button");
  todoFormDeleteButton.type = "button";
  todoFormDeleteButton.id = "todo-form-delete-button";

  const deleteButtonImage = document.createElement("img");
  deleteButtonImage.src = "../assets/icons/trash-can-outline.svg";

  todoFormDeleteButton.appendChild(deleteButtonImage);
  todoFormBottomRight.appendChild(todoFormDeleteButton);
  todoFormRightSection.appendChild(todoFormBottomRight);
  todoForm.appendChild(todoFormRightSection);

  return todoForm;

}

export default todoForm;