import Sidebar from './Sidebar';
import Project from './Project';

function displayApp(todoList) {
  let projectIndex = 0;

  let observer = new MutationObserver(mutations => {
    projectIndex = [...mutations[1].target.parentElement.children].indexOf(mutations[1].target);
    loadProject(projectIndex);
  });
  observer.observe(document, {
    subtree: true,
    attributes: true,
  });

  function loadProject(projectIndex) {
    Project(projectIndex);
  }

  Sidebar(todoList);
  loadProject(projectIndex);
}

export default displayApp;