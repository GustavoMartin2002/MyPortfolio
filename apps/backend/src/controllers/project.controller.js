import mongoose from "mongoose";
import { Project } from "../models/project.model.js";

export default class ProjectController {
  // POST - CREATE
  async createProject(request, reply) {
    try {
      const newProject = await Project.create(request.body); // create new project
      reply.status(201).send(newProject); // 201 success
    } catch(error) {
      reply.status(500).send({
        message: 'Erro ao Criar Projeto.',
        error: error.message,
      }); // 500 server error
    }
  }

  // GET - ALL
  async getAllProjects(request, reply) {
    try {
      const search = request.query.search || '';  // get project or all projects
      const offset = parseInt(request.query.offset) || 1; // get page or default 1
      const limit = parseInt(request.query.limit) || 6; // get limit or default 6
      const skip = (offset - 1) * limit; // calculate skip

      const searchQuery = search ? {
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { technologies: { $in: [new RegExp(search, 'i')] } },
        ],
      } : {}; // build search query

      const totalProjects = await Project.countDocuments(searchQuery); // count total projects

      const AllProjects = await Project.find(searchQuery)
      .sort({ date: -1 }) // sort by date desc
      .skip(skip) // skip for pagination
      .limit(limit) // limit for pagination
      .lean(); // lean for performance

      reply.status(200).send({
        data: AllProjects,
        currentPage: offset,
        totalPages: Math.ceil(totalProjects / limit) || 1,
        totalProjects,
      }); // 200 ok
    } catch (error) {
      reply.status(500).send({
        message: 'Erro ao Buscar Projetos.',
        error: error.message,
      }); // 500 server error
    }
  }

  // GET - ID
  async getProjectById(request, reply) {
    try {
      const projectId = request.params.id; // get params for id
      if(!mongoose.Types.ObjectId.isValid(projectId)) {
        return reply.status(400).send({ message: 'O ID do projeto é inválido.' });
      } // validate id

      const project = await Project.findById(projectId); // find project by id
      if (!project) {
        return reply.status(404).send({ message: 'Projeto Não Encontrado.' });
      } // 404 not found

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
      const projectId = request.params.id; // get params for id
      if(!mongoose.Types.ObjectId.isValid(projectId)) { 
        return reply.status(400).send({ message: 'O ID do projeto é inválido.' });
      } // validate id

      const updateProject = await Project.findByIdAndUpdate(
        projectId, 
        request.body,
        {
          new: true,
          runValidators: true,
        },
      ); // update project by id
      if (!updateProject) {
        return reply.status(404).send({ message: "Projeto Não Encontrado." });
      } // 404 not found

      reply.status(200).send(updateProject); // 200 ok
    } catch (error) {
      reply.status(500).send({
        message: "Erro ao Atualizar Projeto.",
        error: error.message,
      }); // 500 server error
    }
  }

  // DELETE - REMOVE
  async removeProject(request, reply) {
    try {
      const projectId = request.params.id; // get params for id
      if(!mongoose.Types.ObjectId.isValid(projectId)) { 
        return reply.status(400).send({ message: 'O ID do projeto é inválido.' });
      } // validate id

      const deletedProject = await Project.findByIdAndDelete(projectId); // delete project by id
      if (!deletedProject) {
        return reply.status(404).send({ message: 'Projeto Não Encontrado.' });
      } // 404 not found

      reply.status(204).send(); // no content and success
    } catch (error) {
      reply.status(500).send({
        message: 'Erro ao Deletar Projeto.',
        error: error.message,
      }); // 500 server error
    }
  }
}
