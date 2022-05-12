const todoEvents = (() => {
  function edit(editTodo, editBtn) {
    editBtn.addEventListener('click', e => {
      editTodo(e).edit();
    });
  }

  function confirmEdit(currentProject, confirmEdit, confirmEditBtn) {
    confirmEditBtn.addEventListener('click', () => {
      const selectedTodo = confirmEditBtn.parentElement.parentElement;
      const newValues = [...selectedTodo.querySelectorAll('input')].map(input => {
        if (input.type === 'checkbox') {
          return input.checked ? 'Complete' : 'Incomplete';
        } else {
          return input.value;
        }
      });
      const index = [...confirmEditBtn.parentElement.parentElement.parentElement.children].indexOf(confirmEditBtn.parentElement.parentElement);
      
      currentProject.todoList[index].editTodo(newValues);
      confirmEdit(selectedTodo, newValues);
    });
  }

  function cancelEdit(cancelEdit, cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      cancelEdit();
    });
  }

  function remove(currentProject, remove, deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      const selectedTodo = deleteBtn.parentElement.parentElement;
      const index = [...deleteBtn.parentElement.parentElement.parentElement.children].indexOf(deleteBtn.parentElement.parentElement);
      
      currentProject.deleteTodo(index);
      remove(selectedTodo);
    });
  }

  function expand(expandTodo, expandCollapseBtn) {
    expandCollapseBtn.addEventListener('click', () => {
      const selectedTodo = expandCollapseBtn.parentElement;
      
      expandTodo(selectedTodo);
    });
  }
  
  function collapse(collapseTodo, expandCollapseBtn) {
    expandCollapseBtn.addEventListener('click', () => {
      const selectedTodo = expandCollapseBtn.parentElement;
      
      collapseTodo(selectedTodo);
    });
  }

  return { edit, confirmEdit, cancelEdit, remove, expand, collapse }
})();

export default todoEvents;