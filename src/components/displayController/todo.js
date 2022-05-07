import todoEvents from '../eventController/Todo';

const Todo = (() => {
  let currentProject;
  const todosContainer = document.querySelector('#todos-container');

  function display(selectedProject) {
    currentProject = selectedProject;
    while (todosContainer.firstChild) todosContainer.removeChild(todosContainer.firstChild);

    selectedProject.todoList.forEach(todo => {
      add(todo);
    });
  }

  function add(todo = null) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');

    for (let key in todo) {
      const p = document.createElement('p');
      p.textContent = todo[key];

      todoContainer.appendChild(p);
    }

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    todoEvents.edit(editBtn);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Del';
    todoEvents.remove(currentProject, deleteBtn);

    [editBtn, deleteBtn].forEach(btn => todoContainer.appendChild(btn));

    todosContainer.appendChild(todoContainer);
  }

  function edit() {

  }

  function confirmEdit() {

  }

  function remove(selectedTodo) {
    todosContainer.removeChild(selectedTodo);
  }

  return { display, add, edit, remove }
})();

export default Todo;