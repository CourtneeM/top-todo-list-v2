import Todo from './Todo.js';
import projectEvents from '../eventController/Project';
import todoList from '../todos/TodoList';

function Project(selectedProject) {
  const todosContainer = document.querySelector('#todos-container');

  const selectedProjectTitle = document.querySelector('#selected-project-title');
  selectedProjectTitle.textContent = selectedProject.title;

  function newTodoContainer() {
    if (document.querySelector('#new-todo-container')) displayProjectContainer.removeChild(document.querySelector('#new-todo-container'));

    const newTodoContainer = document.createElement('div');
    const addTodoBtn = document.createElement('button');
    newTodoContainer.id = 'new-todo-container';
    addTodoBtn.id = 'add-todo-btn';
  
    addTodoBtn.textContent = 'Add Todo';
    projectEvents.addTodo(selectedProject, Todo.add, addTodoBtn);
  
    Object.keys(selectedProject.todoList[0]).forEach(attribute => {
      const p = document.createElement('p');
      const input = document.createElement('input');
      
      p.textContent = attribute;
      input.setAttribute('id', attribute);
      input.setAttribute('name', attribute);

      [p, input].forEach(el => newTodoContainer.appendChild(el));
    });

    newTodoContainer.appendChild(addTodoBtn);

    displayProjectContainer.insertBefore(newTodoContainer, todosContainer);
  }

  const displayProjectContainer = document.querySelector('#display-project-container');

  newTodoContainer();
  Todo.display(selectedProject);
}

export default Project;