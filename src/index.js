import todoList from './components/todos/TodoList';
import sidebar from './components/displayController/sidebar';
import './style/style.scss'

const projectListContainer = document.querySelector('#project-list');

// display
function addProject(title) {
  const p = document.createElement('p');
  
  p.textContent = title;
  projectListContainer.appendChild(p);
}

todoList.projectList.forEach(project => {
  const p = document.createElement('p');
  p.textContent = project.title;

  projectListContainer.appendChild(p);
});

const addProjectBtn = document.querySelector('#add-project-btn');
addProjectBtn.addEventListener('click', e => {
  e.preventDefault();

  const newProjectInput = document.querySelector('#new-project-title');
  
  todoList.createProject(newProjectInput.value);
  addProject(newProjectInput.value);
  
  newProjectInput.value = '';

  console.log(todoList.projectList);
});