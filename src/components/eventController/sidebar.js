const sidebarListener = (() => {
  const addProjectBtn = document.querySelector('#add-project-btn');

  function addProjectListener(todoList, addProject) {
    addProjectBtn.addEventListener('click', e => {
      e.preventDefault();
      
      const newProjectInput = document.querySelector('#new-project-title');
      
      todoList.createProject(newProjectInput.value);
      addProject(newProjectInput.value);
      
      newProjectInput.value = '';
    });
  }

  function editProjectListener() {
    function edit(editBtn, editProject) {
      editBtn.addEventListener('click', e => editProject(e).edit());
    }

    function confirm(confirmBtn, confirmEdit) {
      confirmBtn.addEventListener('click', () => confirmEdit());
    }

    function cancel(cancelBtn, cancelEdit) {
      cancelBtn.addEventListener('click', () => cancelEdit());
    }

    function remove(removeBtn, removeProject) {
      removeBtn.addEventListener('click', () => removeProject());
    }

    return { edit, confirm, cancel, remove }
  }

  return { addProjectListener, editProjectListener }
})();

export default sidebarListener;