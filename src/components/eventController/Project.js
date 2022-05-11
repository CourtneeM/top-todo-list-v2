const projectEvents = (() => {
  function addTodo(selectedProject, addTodo, addTodoBtn) {
    addTodoBtn.addEventListener('click', () => {
      const newTodo = {};
      const newTodoValueEls = [...document.querySelectorAll('#new-todo-container > div > .new-todo-value')];
      
      if (newTodoValueEls.some(el => { if (el.id !== 'Completed') el.value === '' })) return;
      
      newTodoValueEls.forEach(el => {
        const attribute = el.id.split(' ').length > 1 ? el.id.split(' ')[0].toLowerCase() + el.id.split(' ')[1] : el.id.toLowerCase();
        if (attribute === 'completed') {
          newTodo[attribute] = el.checked ? true : false;
        } else {
          newTodo[attribute] = el.value;
        }

        if (attribute !== 'priority') el.value = '';
        if (attribute === 'completed') el.checked = false;
        console.log(el);
      });
      console.log(Object.values(newTodo));

      addTodo( newTodo );
      selectedProject.createTodo(Object.values(newTodo));
    });
  }

  return { addTodo }
})();

export default projectEvents;