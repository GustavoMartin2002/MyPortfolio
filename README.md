# MyPortfolio - Gustavo Martin🖥️

![CI Status](https://github.com/GustavoMartin2002/MyPortfolio/actions/workflows/ci.yml/badge.svg)
![Architecture](https://img.shields.io/badge/Architecture%20-MVC-brightgreen)

Bem-vindo ao repositório do meu portfólio pessoal. Mais do que um simples site estático, esta é uma aplicação **Web Full Stack** completa, desenvolvida para apresentar meus projetos, experiências e jornada na tecnologia de forma dinâmica e eficiente.

**[Acesse o Portfólio](https://gustavo-martin.vercel.app)**

### Por que Full Stack ?
Meu portfólio anterior era estático, o que significava que cada novo projeto ou atualização de currículo exigia modificações diretas no código-fonte. Isso consumia tempo e não era escalável. Com esta nova arquitetura full stack, agora posso gerenciar e exibir minhas informações de maneira muito mais fácil, simplesmente inserindo os dados na plataforma. Isso garante que meu portfólio esteja sempre atualizado e refletindo minhas conquistas mais recentes.

### Arquitetura da Solução🏛️
O projeto é construído sobre uma arquitetura de microsserviços desacoplada, com comunicação via API REST, garantindo escalabilidade.

- **Frontend:** Uma aplicação Next.js, responsável pela interface do usuário e renderização (SSR/SSG), hospedada na **Vercel**.
- **Backend:** Uma API RESTful robusta construída com Node.js e Fastify, responsável pela lógica de negócios e comunicação com o banco de dados, hospedada no **Render**.
- **Banco de Dados:** Uma base de dados NoSQL com MongoDB, gerenciada através do **MongoDB Atlas**.

### Tech Stack🛠️
#### Frontend:
- **Framework:** Next.js.
- **Linguagem:** TypeScript.
- **Estilização:** TailwindCSS com DaisyUI.
- **Animações:** Framer Motion.
- **Feedback Visual:** Next.js TopLoader.
- **Testes:** Jest com Testing Library.
- **Containerização:** Docker.

#### Backend:
- **Runtime:** Node.js.
- **Linguagem:** JavaScript.
- **Framework:** Fastify.
- **ORM/ODM:** Mongoose.
- **Testes:** Jest.
- **Qualidade de Código:** ESLint.
- **Containerização:** Docker.

#### Database:
- **Database:** MongoDB.
- **Cloud Hosting:** MongoDB Atlas.

#### Cloud & DevOps:
- **Hospedagem (Frontend):** Vercel.
- **Hospedagem (Backend):** Render.
- **CI/CD:** Pipeline de integração e deploy contínuo configurado (GitHub Actions).
- **Infraestrutura como Código:** Docker & Docker Compose.

#### Ferramentas:
- **Versionamento:** Git.
- **Testes de API:** Postman.

### DevOps & Infraestrutura🔧
A aplicação foi projetada com uma cultura DevOps em mente, garantindo automação e eficiência.

- **CI/CD:** A pipeline de integração e entrega contínua automatiza os testes e realiza o deploy para os ambientes de produção na Vercel e Render a cada novo commit na branch principal.
- **Docker:** Tanto o frontend quanto o backend são containerizados com Docker, garantindo desempenho entre os ambientes de desenvolvimento e produção.
- **Docker Compose:** Facilita a inicialização de todo o ambiente de desenvolvimento local (frontend, backend) com um único comando.

### Observação Importante⚠️
**É importante notar que, por estar hospedado em um serviço gratuito, o backend pode levar alguns segundos para "acordar" na primeira requisição após um período de inatividade (aproximadamente 20-30 segundos). Considere isso em sua primeira visita!**
#### https://gustavo-martin.vercel.app
