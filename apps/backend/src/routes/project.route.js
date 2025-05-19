import ProjectController from "../controllers/project.controller.js";

export async function projectRoutes(app) {
  const projectController = new ProjectController(); // create instance 

  // create project route
  app.post('/project', projectController.createProject);

  // get all projects route
  app.get('/projects', projectController.getAllProjects);

  // get project by id route
  app.get('/project/:id', projectController.getProjectById);

  // update project by id route
  app.patch('/project/:id', projectController.updateProject);

  // delete project by id route
  app.delete('/project/:id', projectController.removeProject);
}