class Todo {
  constructor(title, description, dueDate, priority, notes, complete) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.complete = complete;
  }

  editTodo(newValues) {
    const [newTitle, newDescription, newDueDate, newPriority, newNotes, newComplete] = [...newValues];
    
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
    this.notes = newNotes;
    this.complete = newComplete;
  }
}

export default Todo;