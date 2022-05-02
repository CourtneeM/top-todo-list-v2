import Todo from './Todo';

class Project {
  constructor(title) {
    this.title = title;
    this.todoList = [(new Todo('1', '1', '1', '1', '1', 'false'))];
  }

  editProjectTitle(newTitle) {
    this.title = newTitle;
  }

  createTodo(title, description, dueDate, priority, notes, completed) {
    this.todoList.push(new Todo(title, description, dueDate, priority, notes, completed));
  }

  deleteTodo(index) {
    this.todoList.splice(index, 1);
  }
}

export default Project;