
function projectForm() {

  const projectForm = document.createElement("form");
  projectForm.action = "/add-project";
  projectForm.method = "post";
  projectForm.id = "project-form";
  projectForm.autocomplete = "off";

  const projectFormLeftSection = document.createElement("div");
  projectFormLeftSection.id = "project-form-left-section";
  
  const projectFormTitle = document.createElement("input");
  projectFormTitle.id = "project-form-title";
  projectFormTitle.type = "text";
  projectFormTitle.placeholder = "new project";
  projectFormLeftSection.appendChild(projectFormTitle);
  projectForm.appendChild(projectFormLeftSection);

  const projectFormRightSection = document.createElement("div");
  projectFormRightSection.id = "project-form-right-section";

  const projectFormSubmitButton = document.createElement("button");
  projectFormSubmitButton.type = "submit";
  projectFormSubmitButton.id = "project-form-submit-button";
  const submitButtonImage = document.createElement("img");
  submitButtonImage.src = "../assets/icons/check.svg";
  projectFormSubmitButton.appendChild(submitButtonImage);
  projectFormRightSection.appendChild(projectFormSubmitButton);

  const projectFormDeleteButton = document.createElement("button");
  projectFormDeleteButton.type = "button";
  projectFormDeleteButton.id = "project-form-delete-button";

  const deleteButtonImage = document.createElement("img");
  deleteButtonImage.src = "../assets/icons/trash-can-outline.svg";
  projectFormDeleteButton.appendChild(deleteButtonImage);
  projectFormRightSection.appendChild(projectFormDeleteButton);

  projectForm.appendChild(projectFormRightSection);

  return projectForm;

}

export default projectForm;