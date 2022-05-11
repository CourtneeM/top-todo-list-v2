import Todo from './Todo';

class Project {
  constructor(title) {
    this.title = title;
    this.todoList = [(new Todo('Title', 'Description', '2/22/2022', '1', 'Notes', false))];
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