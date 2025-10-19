import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import ProjectController from '../controllers/project.controller';
import { Project } from '../models/project.model';

// init variables, server and controller
  let mongoServer;
  let projectController;

describe('ProjectController', () => {
  // function to create a mock request object
  const createRequest = (body = {}, params = {}, query = {}) => ({
    body,
    params,
    query,
  });

  // function to create a mock reply object
  const createReply = () => {
    const reply = {};
    reply.status = jest.fn().mockReturnValue(reply);
    reply.send = jest.fn().mockReturnValue(reply);
    return reply;
  };

  // Before all tests, connect to the in-memory database
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
    projectController = new ProjectController();
  });

  // Before each test, clear the database
  beforeEach(async () => {
    await Project.deleteMany({});
    await jest.restoreAllMocks();
  });

  // After all tests, disconnect and stop the in-memory database
  afterAll(async () => {
    await mongoose.disconnect();
    if (mongoServer) await mongoServer.stop();
  });

  describe('createProject', () => {
    it('criar um novo projeto com sucesso', async () => {
      // Setup
      const request = createRequest({
        name: 'Teste de Projeto',
        description: 'Descrição do projeto de teste',
        categorie: 'web',
        image: 'https://example.com/image.png',
        date: new Date("2025-10-15T00:00:00Z"),
        technologies: ['React', 'Node.js'],
        github: 'https://github.com/teste',
        link: 'https://example.com',
      });
      const reply = createReply();

      // Action
      await projectController.createProject(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(201);
      expect(reply.send).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Teste de Projeto',
        })
      );
    });

    it('retornar um erro 500 ao falhar na criação do projeto', async () => {
      // Setup
      const errorMessage = 'Erro de banco de dados.';
      const request = createRequest({
        name: 'Teste de Projeto',
        description: 'Descrição do projeto de teste',
        categorie: 'web',
        image: 'https://example.com/image.png',
        date: new Date("2025-10-15T00:00:00Z"),
        technologies: ['React', 'Node.js'],
        github: 'https://github.com/teste',
        link: 'https://example.com',
      }); 
      const reply = createReply();

      // Action
      await jest.spyOn(Project, 'create').mockImplementation(() => {
        throw new Error(errorMessage);
      });
      await projectController.createProject(request, reply);
      
      // Assertions
      expect(reply.status).toHaveBeenCalledWith(500);
      expect(reply.send).toHaveBeenCalledWith({
        message: 'Erro ao Criar Projeto.',
        error: errorMessage,
      });
    });
  });

  describe('getAllProjects', () => {
    it('retornar todos os projetos', async () => {
      // Setup
      await Project.insertMany([
        { name: 'Projeto A', description: 'Descrição A', categorie: 'web', image: 'https://a.com/image.png', date: new Date("2025-10-15T00:00:00Z"), technologies: ['React'], github: 'https://github.com/a', link: 'https://a.com' },
        { name: 'Projeto B', description: 'Descrição B', categorie: 'mobile', image: 'https://b.com/image.png', date: new Date("2025-10-16T00:00:00Z"), technologies: ['Kotlin'], github: 'https://github.com/b', link: 'https://b.com' },
      ]);
      const request = createRequest();
      const reply = createReply();

      // Action
      await projectController.getAllProjects(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(200);
      expect(reply.send).toHaveBeenCalledWith({
        currentPage: 1,
        totalPages: 1,
        totalProjects: 2,
        data: expect.arrayContaining([
          expect.objectContaining({ name: 'Projeto A' }),
          expect.objectContaining({ name: 'Projeto B' }),
        ]),
      });
    });

    it('projetos com a estrutura de paginação correta', async () => {
      // Setup
      await Project.insertMany([
        { name: 'Projeto A', description: 'Descrição A', categorie: 'web', image: 'https://a.com/image.png', date: new Date("2025-10-15T00:00:00Z"), technologies: ['React'], github: 'https://github.com/a', link: 'https://a.com' },
        { name: 'Projeto B', description: 'Descrição B', categorie: 'mobile', image: 'https://b.com/image.png', date: new Date("2025-10-16T00:00:00Z"), technologies: ['React'], github: 'https://github.com/b', link: 'https://b.com' },
        { name: 'Projeto C', description: 'Descrição C', categorie: 'software', image: 'https://c.com/image.png', date: new Date("2025-10-17T00:00:00Z"), technologies: ['React'], github: 'https://github.com/c', link: 'https://c.com' },
      ]);
      const request = createRequest({}, {}, { offset: '1', limit: '2' });
      const reply = createReply();

      // Action
      await projectController.getAllProjects(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(200);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        currentPage: 1,
        totalPages: 2,
        totalProjects: 3,
      }));
    });

    it('retornar projetos filtrados pela tecnologia', async () => {
      // Setup
      await Project.insertMany([
        { name: 'Projeto A', description: 'Descrição A', categorie: 'web', image: 'https://a.com/image.png', date: new Date("2025-10-15T00:00:00Z"), technologies: ['React'], github: 'https://github.com/a', link: 'https://a.com' },
        { name: 'Projeto B', description: 'Descrição B', categorie: 'mobile', image: 'https://b.com/image.png', date: new Date("2025-10-16T00:00:00Z"), technologies: ['Kotlin'], github: 'https://github.com/b', link: 'https://b.com' },
        { name: 'Projeto C', description: 'Descrição C', categorie: 'software', image: 'https://c.com/image.png', date: new Date("2025-10-17T00:00:00Z"), technologies: ['react'], github: 'https://github.com/c', link: 'https://c.com' },
      ]);
      const request = createRequest({}, {}, { search: 'react' });
      const reply = createReply();

      // Action
      await projectController.getAllProjects(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(200);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        totalProjects: 2,
        data: expect.arrayContaining([
          expect.objectContaining({ technologies: ['React'] }),
        ]),
      }));
    });

    it('deve retornar 200 com array vazio se nenhum projeto for encontrado', async () => {
      // Setup
      const request = createRequest({}, {}, {});
      const reply = createReply();

      // Action
      await projectController.getAllProjects(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(200);
      expect(reply.send).toHaveBeenCalledWith({
        data: [],
        currentPage: 1,
        totalPages: 1,
        totalProjects: 0
      });
    });
  
    it('retornar um erro 500 se o banco de dados falhar', async () => {
      // Setup
      const errorMessage = 'Erro de banco de dados.';
      const request = createRequest({});
      const reply = createReply();

      // Action
      await jest.spyOn(Project, 'find').mockImplementation(() => {
        throw new Error(errorMessage);
      });
      await projectController.getAllProjects(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(500);
      expect(reply.send).toHaveBeenCalledWith({
        message: 'Erro ao Buscar Projetos.',
        error: errorMessage,
      });
    });
  });

  describe('getProjectById', () => {
    it('retornar um projeto pelo ID', async () => {
      // Setup
      const project = await Project.create({
        name: 'Teste de Projeto',
        description: 'Descrição do projeto de teste',
        categorie: 'web',
        image: 'https://example.com/image.png',
        date: new Date("2025-10-15T00:00:00Z"),
        technologies: ['React', 'Node.js'],
        github: 'https://github.com/teste',
        link: 'https://example.com',
      });
      const request = createRequest({}, { id: project._id.toString() });
      const reply = createReply();

      // Action
      await projectController.getProjectById(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(200);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        ...project.toObject(),
      }));
    });

    it('retornar 400 para um ID inválido', async () => {
      // Setup
      const invalidID = '1';
      const request = createRequest({}, { id: invalidID });
      const reply = createReply();

      // Action
      await projectController.getProjectById(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(400);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        message: 'O ID do projeto é inválido.',
      }));
    });

    it('retornar 404 se o projeto não for encontrado pelo ID', async () => {
      // Setup
      const anyID = new mongoose.Types.ObjectId().toString();
      const request = createRequest({}, { id: anyID });
      const reply = createReply();

      // Action
      await projectController.getProjectById(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(404);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        message: 'Projeto Não Encontrado.',
      }));
    });

    it('retornar 500 se houver um erro no banco de dados', async () => {
      // Setup
      const anyID = new mongoose.Types.ObjectId().toString();
      const errorMessage = 'Erro de banco de dados.';
      const request = createRequest({}, { id: anyID });
      const reply = createReply();

      // Action
      await jest.spyOn(Project, 'findById').mockImplementation(() => {
        throw new Error(errorMessage);
      });
      await projectController.getProjectById(request, reply);
      
      // Assertions
      expect(reply.status).toHaveBeenCalledWith(500);
      expect(reply.send).toHaveBeenCalledWith({
        message: 'Erro ao Buscar Projeto.',
        error: errorMessage,
      });
    });
  });

  describe('updateProject', () => {
    it('atualizar um projeto existente com sucesso', async () => {
      // Setup
      const project = await Project.create({
        name: 'Teste de Projeto',
        description: 'Descrição do projeto de teste',
        categorie: 'web',
        image: 'https://example.com/image.png',
        date: new Date("2025-10-15T00:00:00Z"),
        technologies: ['React', 'Node.js'],
        github: 'https://github.com/teste',
        link: 'https://example.com',
      });
      const request = createRequest({ name: 'Projeto Atualizado', technologies: ['C#'] }, { id: project._id.toString() });
      const reply = createReply();

      // Action
      await projectController.updateProject(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(200);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        name: 'Projeto Atualizado',
        technologies: ['C#'],
      }));
    });

    it('retornar 400 para um ID inválido', async () => {
      // Setup
      const invalidID = '1';
      const request = createRequest({ name: 'Projeto Atualizado' }, { id: invalidID });
      const reply = createReply();

      // Action
      await projectController.updateProject(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(400);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        message: 'O ID do projeto é inválido.',
      }));
    });

    it('retornar 404 ao tentar atualizar um projeto não encontrado', async () => {
      // Setup
      const nonExistentId = new mongoose.Types.ObjectId().toString();
      const request = createRequest({ name: 'Projeto Atualizado' }, { id: nonExistentId });
      const reply = createReply();

      // Action
      await projectController.updateProject(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(404);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        message: 'Projeto Não Encontrado.',
      }));
    });

    it('retornar 500 se houver um erro no banco de dados ao atualizar', async () => {
      // Setup
      const anyID = new mongoose.Types.ObjectId().toString();
      const errorMessage = 'Erro de banco de dados.';
      const request = createRequest({ name: 'Projeto Atualizado' }, { id: anyID });
      const reply = createReply();

      // Action
      await jest.spyOn(Project, 'findByIdAndUpdate').mockImplementation(() => {
        throw new Error(errorMessage);
      });
      await projectController.updateProject(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(500);
      expect(reply.send).toHaveBeenCalledWith({
        message: 'Erro ao Atualizar Projeto.',
        error: errorMessage,
      });
    });
  });

  describe('removeProject', () => {
    // Setup
    it('remover um projeto existente com sucesso', async () => {
      const project = await Project.create({
        name: 'Teste de Projeto',
        description: 'Descrição do projeto de teste',
        categorie: 'web',
        image: 'https://example.com/image.png',
        date: new Date("2025-10-15T00:00:00Z"),
        technologies: ['React', 'Node.js'],
        github: 'https://github.com/teste',
        link: 'https://example.com',
      });
      const request = createRequest({}, { id: project._id.toString() });
      const reply = createReply();

      // Action
      await projectController.removeProject(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(204);
      expect(reply.send).toHaveBeenCalledWith(); // .send() é chamado com nenhum argumento para 204

      const deletedProject = await Project.findById(project._id);
      expect(deletedProject).toBeNull();
    });

    it('retornar 400 para um ID inválido', async () => {
      // Setup
      const invalidID = '1';
      const request = createRequest({}, { id: invalidID });
      const reply = createReply();

      // Action
      await projectController.removeProject(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(400);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        message: 'O ID do projeto é inválido.',
      }));
    });

    it('retornar 404 ao tentar remover um projeto não encontrado', async () => {
      // Setup
      const nonExistentId = new mongoose.Types.ObjectId().toString();
      const request = createRequest({}, { id: nonExistentId });
      const reply = createReply();

      // Action
      await projectController.removeProject(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(404);
      expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
        message: 'Projeto Não Encontrado.',
      }));
    });

    it('retornar 500 se houver um erro no banco de dados ao remover', async () => {
      // Setup
      const anyID = new mongoose.Types.ObjectId().toString();
      const errorMessage = 'Erro de banco de dados.';
      const request = createRequest({}, { id: anyID });
      const reply = createReply();

      // Action
      await jest.spyOn(Project, 'findByIdAndDelete').mockImplementation(() => {
        throw new Error(errorMessage);
      });
      await projectController.removeProject(request, reply);

      // Assertions
      expect(reply.status).toHaveBeenCalledWith(500);
      expect(reply.send).toHaveBeenCalledWith({
        message: 'Erro ao Deletar Projeto.',
        error: errorMessage,
      });
    });
  });
});