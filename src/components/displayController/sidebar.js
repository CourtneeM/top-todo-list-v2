import sidebarListener from '../eventController/sidebar';

const sidebar = todoList => {
  const projectListContainer = document.querySelector('#project-list');

  function addProject(title) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const editBtn = document.createElement('button');

    div.classList.add('project-container');
    editBtn.classList.add('edit-project-btn');
    
    p.textContent = title;
    editBtn.textContent = 'Edit';

    sidebarListener.editProjectListener().edit(editBtn, editProject);

    [p, editBtn].forEach(el => div.appendChild(el));
    projectListContainer.appendChild(div);
  }

  function editProject(e) {
      const projectContainer = e.target.parentElement;
      const currentProjectP = projectContainer.querySelector('p');
      const editBtnEl = projectContainer.querySelector('.edit-project-btn');

    function edit() {
      while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild);
      }

      const input = document.createElement('input');
      input.value = currentProjectP.textContent;

      const div = document.createElement('div');
      const checkBtn = document.createElement('button');
      const cancelBtn = document.createElement('button');
      const removeBtn = document.createElement('button');

      checkBtn.textContent = 'v/';
      sidebarListener.editProjectListener().confirm(projectContainer);

      cancelBtn.textContent = 'x';
      sidebarListener.editProjectListener().cancel(cancelBtn, cancelEdit);

      removeBtn.textContent = 'del';
      sidebarListener.editProjectListener().remove(e);

      [checkBtn, cancelBtn, removeBtn].forEach(btn => div.appendChild(btn));
      [input, div].forEach(el => projectContainer.appendChild(el));
    }

    function confirmEdit() {

    }

    function cancelEdit() {
      while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
      }
      
      [currentProjectP, editBtnEl].forEach(el => projectContainer.appendChild(el));
    }

    function removeProject() {

    }

    return { edit, confirmEdit, cancelEdit, removeProject }
  }

  todoList.projectList.forEach(project => addProject(project.title));

  sidebarListener.addProjectListener(todoList, addProject);
};

export default sidebar;