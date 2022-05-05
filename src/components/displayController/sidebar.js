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
    const projectIndex = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement);
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
      const confirmBtn = document.createElement('button');
      const cancelBtn = document.createElement('button');
      const removeBtn = document.createElement('button');

      confirmBtn.textContent = 'v/';
      sidebarListener.editProjectListener().confirm(confirmBtn, confirmEdit);

      cancelBtn.textContent = 'x';
      sidebarListener.editProjectListener().cancel(cancelBtn, cancelEdit);

      removeBtn.textContent = 'del';
      sidebarListener.editProjectListener().remove(removeBtn, removeProject);

      [confirmBtn, cancelBtn, removeBtn].forEach(btn => div.appendChild(btn));
      [input, div].forEach(el => projectContainer.appendChild(el));
    }

    function confirmEdit() {
      const newProjectTitle = projectContainer.querySelector('input').value

      while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
      }

      currentProjectP.textContent = newProjectTitle;

      [currentProjectP, editBtnEl].forEach(el => projectContainer.appendChild(el));

      // move out of displayController
      todoList.projectList[projectIndex].title = newProjectTitle;
    }

    function cancelEdit() {
      while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild)
      }
      
      [currentProjectP, editBtnEl].forEach(el => projectContainer.appendChild(el));
    }

    function removeProject() {
      projectContainer.parentElement.removeChild(projectContainer);
      todoList.projectList.splice(projectIndex, 1);
    }

    return { edit, confirmEdit, cancelEdit, removeProject }
  }

  todoList.projectList.forEach(project => addProject(project.title));

  sidebarListener.addProjectListener(todoList, addProject);
};

export default sidebar;