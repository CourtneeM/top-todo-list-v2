const sidebarListener = (() => {
  const addProjectBtn = document.querySelector('#add-project-btn');

  function addProjectListener(todoList, addProject) {
    addProjectBtn.addEventListener('click', e => {
      e.preventDefault();
      
      const newProjectInput = document.querySelector('#new-project-title');

      if (!newProjectInput.value) return;
    
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

  function selectProject(projectContainer) {
    const projectP = projectContainer.children[0];

    projectP.addEventListener('click', () => {
      if (projectContainer.parentElement.querySelector('#selected-project')) {
        projectContainer.parentElement.querySelector('#selected-project').removeAttribute('id');
      }

      projectContainer.id = 'selected-project';
    });
  }

  return { addProjectListener, editProjectListener, selectProject }
})();

export default sidebarListener;