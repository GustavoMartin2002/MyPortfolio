import Badge from "../Badge";

export default function ListToolsDevops() {
  const technologies = [
    {
      link: "https://git-scm.com/",
      image: "/techStack/git.svg",
      name: "Git",
    },
    {
      link: "https://jestjs.io/",
      image: "/techStack/jest.svg",
      name: "Jest",
    },
    {
      link: "https://testing-library.com/",
      image: "/techStack/testing-library.svg",
      name: "Testing Library",
    },
    {
      link: "https://www.postman.com/",
      image: "/techStack/postman.svg",
      name: "Postman",
    },
    {
      link: "https://swagger.io/",
      image: "/techStack/swagger.svg",
      name: "Swagger",
    },
    {
      link: "https://storybook.js.org/",
      image: "/techStack/storybook.svg",
      name: "Storybook",
    },
    {
      link: "https://github.com/features/actions",
      image: "/techStack/github-actions.svg",
      name: "GitHub Actions",
    },
    {
      link: "https://www.docker.com/",
      image: "/techStack/docker.svg",
      name: "Docker",
    },
    {
      link: "https://kubernetes.io/",
      image: "/techStack/kubernetes.svg",
      name: "Kubernetes",
    },
    {
      link: "https://github.com/features/copilot",
      image: "/techStack/github-copilot.svg",
      name: "Github Copilot",
    },
    {
      link: "https://gemini.google.com/",
      image: "/techStack/gemini.svg",
      name: "Gemini",
    },
    {
      link: "https://chatgpt.com/",
      image: "/techStack/openai.svg",
      name: "OpenAI",
    },
  ];

  return (
    <div
      className="grid grid-cols-4 gap-10
      max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"
    >
      { technologies.map((tech) => (
        <Badge key={tech.name} link={tech.link} image={tech.image} name={tech.name}/>
      )) }
    </div>
  );
}