import Sidebar from './Sidebar';
import Project from './Project';

function displayApp(todoList) {
  let projectIndex = 0;

  let observer = new MutationObserver(mutations => {
    if (mutations.some(record => record.type == 'attributes')) {
      const selectedProject = mutations.filter(record => record.target.id === 'selected-project')[0].target;      
      projectIndex = [...selectedProject.parentElement.children].indexOf(selectedProject);
    }

    loadProject(projectIndex);
  });
  
  observer.observe(document.querySelector('#sidebar'), {
    subtree: true,
    attributes: true,
    attributeFilter: ['id'],
    childList: true,
  });

  function loadProject(projectIndex) {
    Project(todoList.projectList[projectIndex]);
  }

  Sidebar(todoList);
}

export default displayApp;