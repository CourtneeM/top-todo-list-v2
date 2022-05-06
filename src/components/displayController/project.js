function Project(selectedProject) {
  const selectedProjectTitle = document.querySelector('#selected-project-title');
  selectedProjectTitle.textContent = selectedProject.title;
}

export default Project;