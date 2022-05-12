class Todo {
  constructor(title, description, dueDate, priority, notes, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
  }

  editTodo(newValues) {
    const [newTitle, newDescription, newDueDate, newNotes, newCompleted] = [...newValues];
    
    this.title = newTitle;
    this.description = newDescription;
    this.dueDate = newDueDate;
    // this.priority = newPriority;
    this.notes = newNotes;
    this.completed = newCompleted === 'Complete' ? true : false;
  }
}

export default Todo;