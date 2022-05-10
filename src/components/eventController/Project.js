const projectEvents = (() => {
  function addTodo(selectedProject, addTodo, addTodoBtn) {
    addTodoBtn.addEventListener('click', () => {
      const newTodo = {};
      
      [...document.querySelectorAll('#new-todo-container > div > input')].forEach((el, i) => {
        newTodo[el.id] = el.value;
        el.value = '';
      });
      
      console.log(selectedProject, newTodo);
      addTodo( newTodo );
      selectedProject.createTodo(Object.values(newTodo));
    });
  }

  return { addTodo }
})();

export default projectEvents;