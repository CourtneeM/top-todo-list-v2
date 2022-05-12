import Todo from './Todo.js';
import projectEvents from '../eventController/Project';
import addIcon from '../../../dist/assets/icons/plus-box-outline.png';


function Project(todoList, selectedProject) {
  const todosContainer = document.querySelector('#todos-container');

  const selectedProjectTitle = document.querySelector('#selected-project-title');
  selectedProjectTitle.textContent = selectedProject.title;

  function newTodoContainer() {
    if (document.querySelector('#new-todo-container')) displayProjectContainer.removeChild(document.querySelector('#new-todo-container'));

    const todoAttributes = ['Title', 'Description', 'Due Date', 'Priority', 'Notes', 'Completed'];
    const newTodoContainer = document.createElement('div');
    const addTodoBtn = document.createElement('img');

    newTodoContainer.id = 'new-todo-container';
    addTodoBtn.id = 'add-todo-btn';
    addTodoBtn.src = addIcon;
    projectEvents.addTodo(selectedProject, Todo.add, addTodoBtn);
  
    todoAttributes.forEach(attribute => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      let input;

      if (attribute === 'Priority') {
        input = document.createElement('select');

        [1, 2, 3].forEach(num => {
          const option = document.createElement('option');
          option.value = num;
          option.textContent = num;

          input.appendChild(option);
        });
      } else {
        input = document.createElement('input');
      }

      if (attribute === 'Completed') input.type = 'checkbox';

      p.textContent = attribute;
      input.classList.add('new-todo-value');
      input.setAttribute('id', attribute);
      input.setAttribute('name', attribute);

      [p, input].forEach(el => div.appendChild(el));
      newTodoContainer.appendChild(div);
    });

    newTodoContainer.appendChild(addTodoBtn);

    displayProjectContainer.insertBefore(newTodoContainer, todosContainer);
  }

  const displayProjectContainer = document.querySelector('#display-project-container');

  newTodoContainer();
  Todo.display(todoList, selectedProject);
}

export default Project;