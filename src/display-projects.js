
// Display all todo items on the DOM
function displayProjects(projectList) {

  const projectListElement = document.createElement("div");
  projectListElement.id = "project-list";

  projectList.forEach(projectItem => {
    const project = document.createElement("button");
    project.classList.add("project");
    project.id = projectItem;
    project.textContent = projectItem;

    projectListElement.appendChild(project);
  });

  return projectListElement;
  
}

export default displayProjects;