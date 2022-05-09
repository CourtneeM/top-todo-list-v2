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
    editBtn.classList.add('edit-project-btn');
    editBtn.textContent = 'Edit';
    todoEvents.edit(editTodo, editBtn);
    
    todoContainer.appendChild(editBtn);
    todosContainer.appendChild(todoContainer);
  }

  function editTodo(e) {
    const selectedTodo = e.target.parentElement;
    const currentTodoPs = [...selectedTodo.querySelectorAll('p')];
    const editBtnEl = selectedTodo.querySelector('.edit-project-btn');
    
    function edit() {
      while (selectedTodo.firstChild) {
        selectedTodo.removeChild(selectedTodo.firstChild);
      }
      
      const input = document.createElement('input');
      // input.value = currentProjectP.textContent;
      
      const div = document.createElement('div');
      const confirmBtn = document.createElement('button');
      const cancelBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      
      confirmBtn.textContent = 'v/';
      todoEvents.confirmEdit(confirmEdit, confirmBtn);
      
      cancelBtn.textContent = 'x';
      todoEvents.cancelEdit(cancelEdit, cancelBtn);
      
      deleteBtn.textContent = 'Del';
      todoEvents.remove(currentProject, remove, deleteBtn);
      
      [confirmBtn, cancelBtn, deleteBtn].forEach(btn => div.appendChild(btn));
      [input, div].forEach(el => selectedTodo.appendChild(el));
    }
    
    function confirmEdit() {
      
    }

    function cancelEdit() {
      while (selectedTodo.firstChild) selectedTodo.removeChild(selectedTodo.firstChild);
      
      [...currentTodoPs, editBtnEl].forEach(el => selectedTodo.appendChild(el));
    }
    
    function remove(selectedTodo) {
      todosContainer.removeChild(selectedTodo);
    }

    return { edit, remove }
  }
  
  return { display, add, editTodo }
})();

export default Todo;