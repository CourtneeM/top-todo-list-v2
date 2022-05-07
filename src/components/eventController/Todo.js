import Todo from '../displayController/Todo';

const todoEvents = (() => {
  function edit(editBtn) {
    editBtn.addEventListener('click', () => {

    });
  }

  function remove(currentProject, deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      const index = [...deleteBtn.parentElement.parentElement.children].indexOf(deleteBtn.parentElement);
      const selectedTodo = deleteBtn.parentElement;

      currentProject.deleteTodo(index);
      Todo.remove(selectedTodo);
      console.log(currentProject);
    });
  }

  return { edit, remove }
})();

export default todoEvents;