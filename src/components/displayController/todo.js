import todoEvents from '../eventController/Todo';
import editIcon from '../../../dist/assets/icons/square-edit-outline.png';
import checkboxIcon from '../../../dist/assets/icons/checkbox-outline.png';
import cancelIcon from '../../../dist/assets/icons/close-box-outline.png';
import trashIcon from '../../../dist/assets/icons/trash-can-outline.png';
import expandIcon from '../../../dist/assets/icons/chevron-down.png';
import collapseIcon from '../../../dist/assets/icons/chevron-up.png';

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
      if (key === 'priority') {
        switch (todo[key]) {
          case '1':
            todoContainer.style.backgroundColor = 'red'; 
            break;
            case '2':
            todoContainer.style.backgroundColor = 'orange'; 
            break;
            case '3':
            todoContainer.style.backgroundColor = 'white'; 
        }
      } else {
        const p = document.createElement('p');
        
        p.classList.add(key);
        p.textContent = todo[key];
        
        todoContainer.appendChild(p);
      }
    }

    const editBtn = document.createElement('img');
    const expandBtn = document.createElement('img');
    const collapseBtn = document.createElement('img');
    
    editBtn.classList.add('edit-todo-btn');
    editBtn.src = editIcon;
    todoEvents.edit(editTodo, editBtn);
    
    expandBtn.classList.add('expand-todo-btn');
    expandBtn.src = expandIcon;
    // todoEvents.edit(expandBtn);
    
    collapseBtn.classList.add('collapse-todo-btn');
    collapseBtn.src = collapseIcon;
    // todoEvents.edit(collapseBtn);
    
    [editBtn, expandBtn, collapseBtn].forEach(btn => todoContainer.appendChild(btn));
    todosContainer.appendChild(todoContainer);
  }

  function editTodo(e) {
    const selectedTodo = e.target.parentElement;
    const currentTodoPs = [...selectedTodo.querySelectorAll('p')];
    const editBtnEl = selectedTodo.querySelector('.edit-todo-btn');
    
    function edit() {
      while (selectedTodo.firstChild) {
        selectedTodo.removeChild(selectedTodo.firstChild);
      }

      const inputDiv = document.createElement('div');
      const btnDiv = document.createElement('div');

      currentTodoPs.forEach(p => {
        const input = document.createElement('input');

        input.classList.add(p.classList[0]);
        input.value = p.textContent;

        inputDiv.appendChild(input);        
      });
      
      const confirmBtn = document.createElement('img');
      const cancelBtn = document.createElement('img');
      const deleteBtn = document.createElement('img');
      
      confirmBtn.src = checkboxIcon;
      todoEvents.confirmEdit(currentProject, confirmEdit, confirmBtn);
      
      cancelBtn.src = cancelIcon;
      todoEvents.cancelEdit(cancelEdit, cancelBtn);
      
      deleteBtn.src = trashIcon;
      todoEvents.remove(currentProject, remove, deleteBtn);
      
      [confirmBtn, cancelBtn, deleteBtn].forEach(btn => btnDiv.appendChild(btn));
      [inputDiv, btnDiv].forEach(div => selectedTodo.appendChild(div));
    }
    
    function confirmEdit(selectedTodo, newValues) {
      while (selectedTodo.firstChild) selectedTodo.removeChild(selectedTodo.firstChild);

      newValues.forEach((value, i) => {
        currentTodoPs[i].textContent = value;
      });

      [...currentTodoPs, editBtnEl].forEach(el => selectedTodo.appendChild(el));
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