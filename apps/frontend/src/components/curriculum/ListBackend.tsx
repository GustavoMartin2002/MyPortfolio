import Badge from "../Badge";

export default function ListBackend() {
  const technologies = [
    {
      link: "https://www.typescriptlang.org/",
      image: "/techStack/typescript.svg",
      name: "TypeScript",
    },
    {
      link: "https://learn.microsoft.com/pt-br/dotnet/csharp/",
      image: "/techStack/csharp.svg",
      name: "C-Sharp",
    },
    {
      link: "https://www.python.org/",
      image: "/techStack/python.svg",
      name: "Python",
    },
    {
      link: "https://nodejs.org/",
      image: "/techStack/nodejs.svg",
      name: "Node.js",
    },
    {
      link: "https://expressjs.com/",
      image: "/techStack/express.svg",
      name: "Express.js",
    },
    {
      link: "https://fastify.dev/",
      image: "/techStack/fastify.svg",
      name: "Fastify",
    },
    {
      link: "https://nestjs.com/",
      image: "/techStack/nestjs.svg",
      name: "NestJS",
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