import mongoose from "mongoose";
import { Project } from "../models/project.model.js";

export default class ProjectController {
  // POST - CREATE
  async createProject(request, reply) {
    try {
      const newProject = new Project({
        _id: new mongoose.Types.ObjectId(),
        ...request.body,
      }) // create new project

      const saveProject = await newProject.save(); // save project
      reply.status(201).send(saveProject); // 201 success
    } catch(error) {
      reply.status(500).send({
        message: 'Erro ao Criar Projeto.',
        error: error.message,
      }) // 500 server error
    }
  }

  // GET - READ
  async getAllProjects(request, reply) {
    try {
      const search = request.query.search || ''  // get project or all projects
      const projects = await Project.find({
        $or: [
          { name: { $regex: search, $options: 'i' } }, // search for name
          { technologies: { $in: [new RegExp(search, 'i')] } }, // search for technologies
        ],
      }).lean(); // convert json in javascript simple

      reply.status(200).send(projects); // 200 ok
    } catch (error) {
      reply.status(500).send({
        message: 'Erro ao Buscar Projeto.',
        error: error.message,
      }) // 500 server error
    }
  }

  async getProjectById(request, reply) {
    try {
      const projectId = request.params.id; // get params for id
      const project = await Project.findById(projectId);
      if (!project) {
        return reply.status(404).send({ message: 'Projeto Não Encontrado.' });
      }
      reply.status(200).send(project); // 200 ok
    } catch (error) {
      reply.status(500).send({
        message: "Erro ao Buscar Projeto.",
        error: error.message,
      }); // 500 server error
    }
  }

  // PATCH - UPDATE
  async updateProject(request, reply) {
    try {
      const projectId = request.params.id // get params for id
      const updateProject = await Project.findByIdAndUpdate(
        projectId, 
        request.body,
        {
          new: true,
        },
      )
      
      if (!updateProject) {
        return reply.status(404).send({
          message: "Projeto Não Encontrado.",
        }) // 404 not found
      }

      reply.status(200).send(updateProject) // 200 ok
    } catch (error) {
      reply.status(500).send({
        message: "Erro ao Atualizar Projeto.",
        error: error.message,
      }) // 500 server error
    }
  }
  // DLETE - REMOVE
  async removeProject(request, reply) {
    try {
      const projectId = request.params.id
      const deleteProject = await Project.findByIdAndDelete(projectId);

      if (!deleteProject) {
        reply.status(404).send({
          message: 'Projeto Não Encontrado.'
        })
      }

      reply.status(204).send() // no content and success
    } catch (error) {
      reply.status(500).send({
        message: 'Erro ao Deletar Projeto.',
        error: error.message,
      })
    }
  }
}
