class todoItem {

  constructor(isCompleted, title, description, dueDate, project) {
    // Indicates todo item completion
    this.isCompleted = isCompleted;
    // Title of the todo item
    this.title = title;
    // Description for the todo item
    this.description = description;
    // Due date for the todo item
    this.dueDate = dueDate;
    // Project the todo item belongs to
    this.project = project;
  }

}

export default todoItem;