const projectEvents = (() => {
  function addTodo(selectedProject, addTodo, addTodoBtn) {
    addTodoBtn.addEventListener('click', () => {
      const newTodoValues = [...document.querySelectorAll('#new-todo-container > input')].map(el => {
        const value = el.value;
        el.value = '';

        return value;
      });

      addTodo( {...newTodoValues} );
      selectedProject.createTodo(...newTodoValues);
    });
  }

  return { addTodo }
})();

export default projectEvents;