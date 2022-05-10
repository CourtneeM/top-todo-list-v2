import sidebarListener from '../eventController/sidebar';
import editIcon from '../../../dist/assets/icons/square-edit-outline.png';
import checkboxIcon from '../../../dist/assets/icons/checkbox-outline.png';
import cancelIcon from '../../../dist/assets/icons/close-box-outline.png';
import trashIcon from '../../../dist/assets/icons/trash-can-outline.png';

const sidebar = todoList => {
  const projectListContainer = document.querySelector('#project-list');

  function addProject(title) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const editBtn = document.createElement('img');

    div.classList.add('project-container');
    editBtn.classList.add('edit-project-btn');
    
    if (todoList.projectList.length === 1) div.id = 'selected-project';
    p.textContent = title;
    editBtn.src = editIcon;

    sidebarListener.editProjectListener().edit(editBtn, editProject);
    
    [p, editBtn].forEach(el => div.appendChild(el));
    sidebarListener.selectProject(div);
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
      const confirmBtn = document.createElement('img');
      const cancelBtn = document.createElement('img');
      const removeBtn = document.createElement('img');

      confirmBtn.src = checkboxIcon;
      sidebarListener.editProjectListener().confirm(confirmBtn, confirmEdit);

      cancelBtn.src = cancelIcon;
      sidebarListener.editProjectListener().cancel(cancelBtn, cancelEdit);

      removeBtn.src = trashIcon;
      sidebarListener.editProjectListener().remove(removeBtn, removeProject);

      [confirmBtn, cancelBtn, removeBtn].forEach(btn => div.appendChild(btn));
      [input, div].forEach(el => projectContainer.appendChild(el));
    }

    function confirmEdit() {
      const newProjectTitle = projectContainer.querySelector('input').value

      if (!newProjectTitle) return;

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

      if ([...projectListContainer.children].length >= 1) projectListContainer.firstChild.id = 'selected-project';
    }

    return { edit, confirmEdit, cancelEdit, removeProject }
  }

  todoList.projectList.forEach((project) => addProject(project.title));

  sidebarListener.addProjectListener(todoList, addProject);
};

export default sidebar;