const todoEvents = (() => {
  function edit(editTodo, editBtn) {
    editBtn.addEventListener('click', e => {
      editTodo(e).edit();
    });
  }

  function confirmEdit() {

  }

  function cancelEdit(cancelEdit, cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      cancelEdit();
    });
  }

  function remove(currentProject, remove, deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      const selectedTodo = deleteBtn.parentElement.parentElement;
      const index = [...deleteBtn.parentElement.parentElement.parentElement.children].indexOf(deleteBtn.parentElement);
      currentProject.deleteTodo(index);
      remove(selectedTodo);
    });
  }

  return { edit, confirmEdit, cancelEdit, remove }
})();

export default todoEvents;