class Todo {
  constructor(title, description, dueDate, priority, notes, complete) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.complete = complete;
  }

  editTodo(attribute, value) {
    this[attribute] = value;
  }
}

export default Todo;