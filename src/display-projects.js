
// Display all todo items on the DOM
function displayProjects(projectList) {

  const projectListElement = document.createElement("div");
  projectListElement.id = "project-list";

  projectList.forEach(projectItem => {
    const project = document.createElement("button");
    project.classList.add("project");
    project.id = projectItem;
    project.textContent = projectItem;

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("delete-project-button");

    const deleteButtonImage = document.createElement("img");
    deleteButtonImage.src = "assets/icons/trash-can-outline.svg";
    deleteProjectButton.appendChild(deleteButtonImage);

    project.appendChild(deleteProjectButton);

    projectListElement.appendChild(project);
  });

  return projectListElement;
  
}

export default displayProjects;