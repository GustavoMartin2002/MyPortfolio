import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import ProjectController from '../controllers/project.controller'; // Ajuste o caminho se necessário
import { Project } from '../models/project.model'; // Ajuste o caminho se necessário

// Variáveis para o servidor de memória e o controller
let mongoServer;
let projectController;

// Função auxiliar para criar um objeto de requisição simulado
const createRequest = (body = {}, params = {}, query = {}) => ({
  body,
  params,
  query,
});

// Função auxiliar para criar um objeto de resposta simulado
const createReply = () => {
  const reply = {};
  reply.status = jest.fn().mockReturnValue(reply);
  reply.send = jest.fn().mockReturnValue(reply);
  return reply;
};

// Antes de todos os testes, conectar ao banco de dados em memória
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri);
  projectController = new ProjectController();
});

// Antes de cada teste, limpar o banco de dados
beforeEach(async () => {
  await Project.deleteMany({});
});

// Depois de todos os testes, desconectar e parar o servidor de memória
afterAll(async () => {
  await mongoose.disconnect();
});

describe('ProjectController', () => {
  it('deve criar um novo projeto com sucesso', async () => {
    const request = createRequest({
      _id: new mongoose.Types.ObjectId(),
      name: 'Projeto Teste',
      description: 'Descrição do projeto de teste',
      categorie: 'web',
      image: 'http://example.com/image.png',
      technologies: ['React', 'Node.js'],
    });
    const reply = createReply();

    await projectController.createProject(request, reply);

    expect(reply.status).toHaveBeenCalledWith(201);
    expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Projeto Teste',
      description: 'Descrição do projeto de teste',
    }));

    const projectNoBanco = await Project.findOne({ name: 'Projeto Teste' });
    expect(projectNoBanco).toBeDefined();
  });

  it('deve retornar um erro 500 ao falhar na criação do projeto', async () => {
    // Simula uma falha ao salvar (por exemplo, omitindo um campo obrigatório sem o middleware de validação)
    const request = createRequest({
      _id: new mongoose.Types.ObjectId(),
      // name está faltando, o que deveria causar um erro no banco
      description: 'Descrição do projeto de teste',
      categorie: 'web',
      image: 'http://example.com/image.png',
      technologies: ['React', 'Node.js'],
    });
    const reply = createReply();

    await projectController.createProject(request, reply);

    expect(reply.status).toHaveBeenCalledWith(500);
    expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Erro ao Criar Projeto.',
      error: expect.any(String),
    }));
  });

  it('deve retornar todos os projetos', async () => {
    await Project.insertMany([
      { _id: new mongoose.Types.ObjectId(), name: 'Projeto A', description: 'Descrição A', categorie: 'web', image: 'http://a.com', technologies: ['React'] },
      { _id: new mongoose.Types.ObjectId(), name: 'Projeto B', description: 'Descrição B', categorie: 'mobile', image: 'http://b.com', technologies: ['Kotlin'] },
    ]);
    const request = createRequest();
    const reply = createReply();

    await projectController.getAllProjects(request, reply);

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(expect.any(Array));
    expect(reply.send).toHaveBeenCalledWith(expect.arrayContaining([
      expect.objectContaining({ name: 'Projeto A' }),
      expect.objectContaining({ name: 'Projeto B' }),
    ]));
  });

  it('deve retornar projetos com base na pesquisa por nome', async () => {
    await Project.insertMany([
      { _id: new mongoose.Types.ObjectId(), name: 'Projeto Teste 1', description: 'Descrição 1', categorie: 'web', image: 'http://1.com', technologies: ['React'] },
      { _id: new mongoose.Types.ObjectId(), name: 'Outro Projeto', description: 'Descrição 2', categorie: 'mobile', image: 'http://2.com', technologies: ['Kotlin'] },
    ]);
    const request = createRequest({}, {}, { search: 'Teste' });
    const reply = createReply();

    await projectController.getAllProjects(request, reply);

    const result = reply.send.mock.calls[0][0];
    expect(reply.status).toHaveBeenCalledWith(200);
    expect(result).toHaveLength(1);
    expect(result).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'Projeto Teste 1' }),
    ]));
  });

  it('deve retornar projetos com base na pesquisa por tecnologia', async () => {
    await Project.insertMany([
      { _id: new mongoose.Types.ObjectId(), name: 'Projeto React', description: 'Descrição React', categorie: 'web', image: 'http://r.com', technologies: ['React'] },
      { _id: new mongoose.Types.ObjectId(), name: 'Projeto Node', description: 'Descrição Node', categorie: 'software', image: 'http://n.com', technologies: ['Node.js'] },
      { _id: new mongoose.Types.ObjectId(), name: 'Projeto Mobile', description: 'Descrição Mobile', categorie: 'mobile', image: 'http://m.com', technologies: ['Kotlin'] },
    ]);
    const request = createRequest({}, {}, { search: 'node' });
    const reply = createReply();

    await projectController.getAllProjects(request, reply);

    const result = reply.send.mock.calls[0][0];
    expect(reply.status).toHaveBeenCalledWith(200);
    expect(result).toHaveLength(1);
    expect(result).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'Projeto Node' }),
    ]));
  });

  it('deve retornar um projeto pelo ID', async () => {
    const projetoCriado = await Project.create({
      _id: new mongoose.Types.ObjectId(),
      name: 'Projeto Busca ID',
      description: 'Descrição ID',
      categorie: 'web',
      image: 'http://id.com',
      technologies: ['JavaScript'],
    });
    const request = createRequest({}, { id: projetoCriado._id.toString() });
    const reply = createReply();

    await projectController.getProjectById(request, reply);

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Projeto Busca ID',
    }));
  });

  it('deve retornar 404 se o projeto não for encontrado pelo ID', async () => {
    const nonExistentId = new mongoose.Types.ObjectId().toString();
    const request = createRequest({}, { id: nonExistentId });
    const reply = createReply();

    await projectController.getProjectById(request, reply);

    expect(reply.status).toHaveBeenCalledWith(404);
    expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Projeto Não Encontrado.',
    }));
  });

  it('deve atualizar um projeto existente com sucesso', async () => {
    const projetoOriginal = await Project.create({
      _id: new mongoose.Types.ObjectId(),
      name: 'Projeto Original',
      description: 'Descrição Original',
      categorie: 'web',
      image: 'http://original.com',
      technologies: ['HTML'],
    });
    const request = createRequest({ name: 'Projeto Atualizado', technologies: ['React'] }, { id: projetoOriginal._id.toString() });
    const reply = createReply();

    await projectController.updateProject(request, reply);

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Projeto Atualizado',
      technologies: ['React'],
    }));

    const projetoAtualizadoNoBanco = await Project.findById(projetoOriginal._id);
    expect(projetoAtualizadoNoBanco).toHaveProperty('name', 'Projeto Atualizado');
    expect(projetoAtualizadoNoBanco).toHaveProperty('technologies', ['React']);
  });

  it('deve retornar 404 ao tentar atualizar um projeto não encontrado', async () => {
    const nonExistentId = new mongoose.Types.ObjectId().toString();
    const request = createRequest({ name: 'Projeto Atualizado' }, { id: nonExistentId });
    const reply = createReply();

    await projectController.updateProject(request, reply);

    expect(reply.status).toHaveBeenCalledWith(404);
    expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Projeto Não Encontrado.',
    }));
  });

  it('deve remover um projeto existente com sucesso', async () => {
    const projetoParaDeletar = await Project.create({
      _id: new mongoose.Types.ObjectId(),
      name: 'Projeto para Deletar',
      description: 'Descrição Delete',
      categorie: 'mobile',
      image: 'http://delete.com',
      technologies: ['Swift'],
    });
    const request = createRequest({}, { id: projetoParaDeletar._id.toString() });
    const reply = createReply();

    await projectController.removeProject(request, reply);

    expect(reply.status).toHaveBeenCalledWith(204);
    expect(reply.send).toHaveBeenCalledWith(); // .send() é chamado com nenhum argumento para 204

    const projetoDeletadoDoBanco = await Project.findById(projetoParaDeletar._id);
    expect(projetoDeletadoDoBanco).toBeNull();
  });

  it('deve retornar 404 ao tentar remover um projeto não encontrado', async () => {
    const nonExistentId = new mongoose.Types.ObjectId().toString();
    const request = createRequest({}, { id: nonExistentId });
    const reply = createReply();

    await projectController.removeProject(request, reply);

    expect(reply.status).toHaveBeenCalledWith(404);
    expect(reply.send).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Projeto Não Encontrado.',
    }));
  });
});