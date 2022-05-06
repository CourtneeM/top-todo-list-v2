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
    projectEvents.addTodo(selectedProject, addTodo, addTodoBtn);
  
    Object.keys(selectedProject.todoList[0]).forEach(attribute => {
      const p = document.createElement('p');
      const input = document.createElement('input');
      
      p.textContent = attribute;
      input.setAttribute('id', attribute);
      input.setAttribute('name', attribute);

      [p, input].forEach(el => newTodoContainer.appendChild(el));
    });

    newTodoContainer.appendChild(addTodoBtn);

    console.log(todoList.projectList);
    displayProjectContainer.insertBefore(newTodoContainer, todosContainer);
  }

  function addTodo(todo = null) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');

    for (let key in todo) {
      const p = document.createElement('p');
      p.textContent = todo[key];

      todoContainer.appendChild(p);
    }

    todosContainer.appendChild(todoContainer);
  }

  function displayTodos() {
    while (todosContainer.firstChild) todosContainer.removeChild(todosContainer.firstChild);

    selectedProject.todoList.forEach(todo => {
      addTodo(todo);
    });
  }

  const displayProjectContainer = document.querySelector('#display-project-container');

  newTodoContainer();
  displayTodos();
}

export default Project;