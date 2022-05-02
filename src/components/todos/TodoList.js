import Project from './Project';

const todoList = {
  projectList: [(new Project('Default Project'))],

  createProject: function(title) {
    this.projectList.push(new Project(title));
  },

  deleteProject: function(index) {
    this.projectList.splice(index, 1);
  },
}

export default todoList;