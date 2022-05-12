import Todo from './Todo';

class Project {
  constructor(title) {
    this.title = title;
    this.todoList = [];
  }

  editProjectTitle(newTitle) {
    this.title = newTitle;
  }

  createTodo(values) {
    this.todoList.push(new Todo(...values));
  }

  deleteTodo(index) {
    this.todoList.splice(index, 1);
  }
}

export default Project;