import { ServicesModel } from "@/models/serviceModel";

export const services: ServicesModel[] = [
  {
    id: "Website",
    name: "Websites/Landing Pages🌍",
    resume: "Sites e páginas de conversão modernos, responsivos e otimizados, feitos para transformar visitantes em clientes.",
    image: "website(landing-page).webp",
    description: "Crio uma presença digital que realmente funciona. Ideal para empresas e profissionais que buscam um site institucional, portfólio, blog ou landing page, este serviço foca em design atraente e uma experiência de navegação perfeita. Meu trabalho é garantir que sua marca cause uma excelente primeira impressão, com layouts que se adaptam a qualquer tela e um desempenho que mantém o visitante engajado.",
    technologies: [
      { title: "Frontend:", name: ["HTML5", "CSS3", "TailwindCSS", "TypeScript", "React.js", "Next.js", "Angular"] },
      { title: "Versionamento:", name: ["Git", "GitHub"] },
    ],
    features: [
      {
        title: "Design Responsivo e Perfeito:",
        description:"O site se adapta a qualquer dispositivo, de desktops a smartphones, garantindo uma navegação fluida e sem falhas.",
      },
      {
        title: "Performance Otimizada:",
        description: "Páginas com carregamento ultrarrápido, feitas para reter visitantes e ranquear melhor em mecanismos de busca como o Google.",
      },
      {
        title: "Formulários de Conversão:",
        description: "Formulários fáceis de usar para capturar informações de contato, pedidos de orçamento ou inscrições.",
      },
      {
        title: "Integração com Redes Sociais:",
        description: "Conecte o site com suas redes sociais para expandir sua comunidade e fortalecer sua marca.",
      },
      {
        title: "Otimização para SEO:",
        description: "O código do site é estruturado para ser facilmente lido por buscadores, ajudando sua marca a ser encontrada online.",
      },
    ],
    highlights: [
      {
        title: "Design Sob Medida:",
        description: "Cada projeto é único, com layouts e identidade visual que refletem a sua marca.",
      },
      {
        title: "Foco em Resultados:",
        description: "O design e a estrutura do site são pensados para converter visitantes em clientes, entregando valor real para o seu negócio.",
      },
      {
        title: "Entrega Ágil:",
        description: "Metodologias de desenvolvimento eficientes permitem a entrega de projetos de qualidade em prazos competitivos.",
      },
    ],
  },
  {
    id: "Web-personalizado",
    name: "Aplicações Web🌐",
    resume: "Sistemas e plataformas web customizadas, com foco em performance e segurança, para escalar o seu negócio e otimizar suas operações.",
    image: "website(platform).webp",
    description: "Este serviço abrange o ciclo completo de desenvolvimento, transformando sua ideia em uma solução digital completa e funcional. Seja um sistema de gestão, uma plataforma de e-commerce, ou uma ferramenta interna, eu construo o software sob medida para atender às suas necessidades. O foco é em uma arquitetura modular e escalável, que cresce junto com o seu negócio e garante que a aplicação seja fácil de manter e expandir no futuro.",
    technologies: [
      { title: "Frontend:", name: ["HTML5", "CSS3", "TailwindCSS", "TypeScript", "React.js", "Next.js", "Angular"] },
      { title: "Backend:", name: ["Node.js", "Express.js", "Fastify", "NestJS", "TypeScript", "C#", "Python"] },
      { title: "Bancos de Dados:", name: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"] },
      { title: "Ferramentas:", name: ["Postman", "Swagger", "Storybook"] },
      { title: "DevOps:", name: ["Docker", "CI/CD", "GitHub Actions"] },
      { title: "Versionamento:", name: ["Git", "GitHub"] },
      { title: "Infraestrutura:", name: ["AWS", "GCP", "Azure"] },
    ],
    features: [
      {
        title: "Frontend Intuitivo:",
        description:"Desenvolvo interfaces de usuário dinâmicas e fluidas, garantindo uma experiência de navegação excelente para os seus clientes.",
      },
      {
        title: "Backend Robusto:",
        description:"Crio a lógica do negócio e a gestão de dados de forma segura e eficiente, garantindo que o seu sistema seja confiável e performático.",
      },
      {
        title: "Controle de Acesso:",
        description:"Implemento sistemas de autenticação e autorização para garantir que apenas os usuários corretos tenham acesso às informações.",
      },
      {
        title: "Integração com Serviços:",
        description:"Conecto o seu sistema a outras ferramentas via APIs, como gateways de pagamento, serviços de e-mail e APIs de redes sociais.",
      },
      {
        title: "Testes de Integração:",
        description: "Desenvolvo testes automatizados para garantir que diferentes partes da sua aplicação se comuniquem corretamente, prevenindo falhas e assegurando a confiabilidade do sistema.",
      },
    ],
    highlights: [
      {
        title: "Arquitetura de Microserviços:",
        description: "Crio a arquitetura do seu sistema em módulos independentes, o que facilita a expansão e a manutenção.",
      },
      {
        title: "Desenvolvimento Ágil:",
        description: "Sigo uma metodologia flexível, entregando valor de forma contínua e permitindo que você acompanhe o progresso e faça ajustes ao longo do projeto.",
      },
      {
        title: "CI/CD Automatizado:",
        description: "Utilizo GitHub Actions para automatizar a entrega de código, garantindo atualizações rápidas e sem erros.",
      },
    ],
  },
  {
    id: "APIs",
    name: "APIs Personalizadas🔗",
    resume: "Construo APIs seguras, escaláveis e de alta performance, que funcionam como a base sólida para qualquer aplicação web, mobile ou desktop.",
    image: "apis.webp",
    description: "O foco deste serviço é desenvolver a espinha dorsal da sua aplicação, a API (Application Programming Interface). Com uma API bem construída, sua empresa ganha a flexibilidade de conectar diferentes sistemas e serviços, garantindo a troca de dados de forma padronizada e segura. Isso permite que você expanda sua plataforma no futuro, sem a necessidade de reescrever o código do zero, economizando tempo e recursos.",
    technologies: [
      { title: "Backend:", name: ["Node.js", "Express.js", "Fastify", "NestJS", "TypeScript", "C#", "Python"] },
      { title: "Segurança:", name: ["JWT", "Criptografia", "Cors", "Helmet"] },
      { title: "Banco de Dados:", name: ["TypeORM", "MySQL", "PostgreSQL", "MongoDB"] },
      { title: "Ferramentas:", name: ["Postman", "Swagger"] },
      { title: "DevOps:", name: ["Docker", "CI/CD", "GitHub Actions"] },
      { title: "Versionamento:", name: ["Git", "GitHub"] },
    ],
    features: [
      {
        title: "API RESTful:",
        description: "Desenvolvo endpoints (rotas) intuitivos e bem definidos, que permitem a criação, leitura, atualização e exclusão de dados com facilidade e segurança.",
      },
      {
        title: "Autenticação e Autorização:",
        description: "Implemento sistemas de segurança com JWT para garantir que apenas usuários autorizados tenham acesso aos dados da sua aplicação.",
      },
      {
        title: "Documentação Interativa:",
        description: "Uso o Swagger para criar uma documentação completa e fácil de usar, o que agiliza a integração da sua API com outras aplicações ou serviços.",
      },
      {
        title: "Testes Automatizados:",
        description: "Realizo testes de integração, assegurando que sua API funcione de forma confiável e robusta em todas as situações.",
      },
    ],
    highlights: [
      {
        title: "Qualidade e Segurança:",
        description: "Minha prioridade é construir APIs com código limpo, testado e protegido contra ataques, o que garante a confiabilidade do seu sistema.",
      },
      {
        title: "Documentação Completa:",
        description: "Forneço uma documentação detalhada que facilita a vida de outros desenvolvedores, agilizando futuras integrações.",
      },
      {
        title: "Arquitetura Escalável:",
        description: "Sua API é construída com uma arquitetura modular, pronta para crescer junto com o seu negócio e suportar um alto volume de tráfego.",
      },
    ],
  },
  {
    id: "Software",
    name: "Software para Desktop🖥️",
    resume: "Aplicações desktop robustas e multiplataforma (Windows, macOS e Linux) que otimizam as operações internas do seu negócio.",
    image: "software.webp",
    description: "Este serviço é ideal para empresas que precisam de um software personalizado para uso interno, como sistemas de gestão de estoque, ferramentas de produtividade ou aplicações que exigem acesso direto ao hardware do computador. Utilizando o Electron, eu combino a agilidade do desenvolvimento web com a solidez de um software tradicional. O resultado é uma aplicação que roda de forma nativa e eficiente em qualquer sistema operacional, com o poder e a segurança que seu negócio precisa.",
    technologies: [
      { title: "Frontend:", name: ["Electron", "HTML5", "CSS3", "TailwindCSS", "TypeScript", "React.js", "Next.js", "Angular"] },
      { title: "Backend:", name: ["Node.js", "Express.js", "Fastify", "NestJS", "TypeScript", "Python"] },
      { title: "Banco de Dados:", name: ["SQLite", "MySQL", "PostgreSQL", "MongoDB"] },
      { title: "DevOps:", name: ["Docker", "CI/CD", "GitHub Actions"] },
      { title: "Versionamento:", name: ["Git", "GitHub"] },
    ],
    features: [
      {
        title: "Interface Intuitiva:",
        description: "Desenvolvo interfaces gráficas limpas e fáceis de usar, garantindo que sua equipe possa usar o software sem complicação.",
      },
      {
        title: "Acesso Local:",
        description: "Crio funcionalidades que acessam e manipulam arquivos, pastas e hardware local, como câmeras e leitores de código de barras.",
      },
      {
        title: "Integração Online:",
        description: "Seu software pode se conectar a APIs e serviços online para sincronizar dados com outras plataformas, como a nuvem ou sistemas internos da empresa.",
      },
      {
        title: "Instaladores Multiplataforma:",
        description: "Entrego o software empacotado e pronto para ser instalado de forma simples e segura em computadores Windows, macOS e Linux.",
      },
    ],
    highlights: [
      {
        title: "Multiplataforma:",
        description: "Economize tempo e recursos com uma única base de código que funciona em Windows, macOS e Linux.",
      },
      {
        title: "Agilidade no Desenvolvimento:",
        description: "Desenvolvo softwares com a velocidade de um projeto web, sem abrir mão da robustez e da segurança.",
      },
      {
        title: "Performance Otimizada:",
        description: "O software é criado para rodar de forma leve e rápida, garantindo uma experiência de usuário fluida.",
      },
    ],
  },
  {
    id: "Mobile",
    name: "Aplicativos Mobile📱",
    resume: "Criação de aplicativos nativos para iOS e Android com uma única base de código.",
    image: "mobile.webp",
    description: "O foco é no desenvolvimento de aplicativos multiplataforma que oferecem uma experiência de usuário fluida e intuitiva. Este serviço é ideal para empresas que desejam expandir seu alcance para o mercado mobile, seja com um app complementar a um site ou como o principal produto. O processo de desenvolvimento inclui prototipagem, design de interface, implementação de funcionalidades e publicação nas lojas de aplicativos.",
    technologies: [
      { title: "Frontend:", name: ["React Native", "HTML5", "CSS3", "TailwindCSS", "TypeScript"] },
      { title: "Backend:", name: ["Node.js", "Express.js", "Fastify", "NestJS", "TypeScript", "C#", "Python"] },
      { title: "Banco de Dados:", name: ["SQLite", "Firebase", "MongoDB", "MySQL", "PostgreSQL"] },
      { title: "DevOps:", name: ["Docker", "CI/CD", "GitHub Actions"] },
      { title: "Versionamento:", name: ["Git", "GitHub"] },
    ],
    features: [
      {
        title: "Interface Nativa:",
        description: "Desenvolvo interfaces com a aparência e a performance de aplicativos nativos, entregando uma experiência de uso familiar e de alta qualidade.",
      },
      {
        title: "Notificações Push:",
        description: "Mantenha seus usuários engajados com notificações push, enviando mensagens e alertas importantes diretamente para o celular.",
      },
      {
        title: "Integração com Hardware:",
        description: "Seu aplicativo poderá usar recursos do dispositivo, como câmera, GPS, e sensores, para funcionalidades personalizadas.",
      },
      {
        title: "Performance Otimizada:",
        description: "O código é cuidadosamente otimizado para garantir que o aplicativo funcione de forma rápida e eficiente em uma ampla variedade de dispositivos.",
      },
    ],
    highlights: [
      {
        title: "Multiplataforma:",
        description: "Com uma única base de código, você economiza tempo e recursos, pois não é necessário desenvolver o aplicativo separadamente para cada plataforma.",
      },
      {
        title: "Componentes Reutilizáveis:",
        description: "Crio componentes visuais com o Storybook, garantindo consistência e agilidade na criação da interface do aplicativo.",
      },
      {
        title: "Suporte Completo:",
        description: "Ofereço suporte total durante todo o processo, desde a publicação do aplicativo nas lojas (App Store e Google Play) até o apoio após o lançamento.",
      },
    ],
  },
  {
    id: "Automacao",
    name: "Automação de Processos🤖",
    resume: "Otimizo o seu negócio com automação inteligente, IA e agentes autônomos.",
    image: "automation.webp",
    description: "Este serviço é para empresas que desejam se destacar no mercado, automatizando processos e usando a inteligência artificial para tomar decisões mais assertivas. Com o poder do Python e de APIs avançadas, eu crio soluções que vão além da automação simples. O foco é na eficiência operacional, permitindo que a sua equipe se dedique a tarefas mais estratégicas enquanto a tecnologia cuida do trabalho repetitivo e complexo.",
    technologies: [
      { title: "Linguagens:", name: ["Python", "TypeScript"] },
      { title: "APIs e Serviços:", name: ["OpenAI", "Gemini", "AWS", "GCP", "Azure"] },
      { title: "DevOps:", name: ["Docker", "CI/CD", "GitHub Actions"] },
      { title: "Versionamento:", name: ["Git", "GitHub"] }
    ],
    features: [
      {
        title: "Chatbots Inteligentes:",
        description: "Crio bots de atendimento ao cliente que não apenas respondem a perguntas, mas também resolvem problemas de forma autônoma e personalizada."
      },
      {
        title: "Análise de Dados com IA:",
        description: "Desenvolvo sistemas que processam grandes volumes de dados para extrair insights valiosos, gerando relatórios precisos que apoiam a sua tomada de decisão.",
      },
      {
        title: "Automação de Tarefas:",
        description: "Implemento scripts para automatizar atividades rotineiras, como raspagem de dados de websites, envio de e-mails, ou a geração de documentos, liberando tempo e recursos da sua equipe.",
      },
      {
        title: "Agentes de IA:",
        description: "Crio agentes de inteligência artificial capazes de realizar tarefas complexas e multifásicas de forma autônoma, otimizando o seu fluxo de trabalho de ponta a ponta.",
      },
    ],
    highlights: [
      {
        title: "Eficiência e Inovação:",
        description: "Reduza custos operacionais e posicione sua marca como líder em inovação.",
      },
      {
        title: "Soluções Sob Medida:",
        description: "Otimizo a solução para as necessidades específicas do seu negócio, garantindo que o investimento tenha o máximo retorno.",
      },
      {
        title: "Qualidade e Segurança:",
        description: "Minhas soluções são construídas com foco em código limpo, testado e seguro, garantindo a proteção dos seus dados e a confiabilidade do sistema.",
      },
    ],
  },
  {
    id: "Manutencao",
    name: "Manutenção e Suporte🛠️",
    resume: "Garanta a estabilidade, segurança e performance do seu software com manutenção contínua e proativa.",
    image: "maintenance.webp",
    description: "Este serviço foi criado para garantir que seu software continue funcionando sem falhas após o lançamento. Mais do que apenas corrigir problemas, eu me dedico a uma manutenção proativa, identificando e resolvendo potenciais falhas antes que elas afetem seus usuários. Isso garante que sua aplicação esteja sempre atualizada, segura e com a melhor performance possível, permitindo que você se concentre totalmente no crescimento do seu negócio.",
    technologies: [
      { title: "Versionamento:", name: ["Git", "GitHub"] },
      { title: "DevOps:", name: ["Docker", "CI/CD", "GitHub Actions"] },
      { title: "Servidores:", name: ["AWS", "GCP", "Azure"] },
    ],
    features: [
      {
        title: "Monitoramento Contínuo:",
        description: "Acompanho o desempenho e a disponibilidade do seu sistema em tempo real, agindo rapidamente em caso de falhas.",
      },
      {
        title: "Correção de Bugs:",
        description: "Identifico e resolvo falhas de forma rápida e eficiente, minimizando o impacto no seu negócio.",
      },
      {
        title: "Atualizações de Segurança:",
        description: "Aplico patches de segurança e sigo as melhores práticas para proteger a aplicação de vulnerabilidades e ataques.",
      },
      {
        title: "Otimização de Performance:",
        description: "Realizo melhorias contínuas no código e na infraestrutura para garantir que seu software carregue e funcione de forma rápida e fluida.",
      },
    ],
    highlights: [
      {
        title: "Confiança:",
        description: "Sua equipe pode focar no que realmente importa, sabendo que a parte técnica está em mãos de um especialista.",
      },
      {
        title: "Segurança Proativa:",
        description: "Em vez de reagir a problemas, eu os previno, mantendo seu sistema seguro contra ameaças.",
      },
      {
        title: "Relatórios Detalhados:",
        description: "Receba relatórios periódicos com as atividades de manutenção e as melhorias aplicadas, tendo total visibilidade sobre o serviço prestado.",
      },
    ],
  },
];
