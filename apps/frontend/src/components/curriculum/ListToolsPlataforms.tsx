import Badge from "../Badge";

export default function ListToolsPlataforms() {
  const technologies = [
    {
      link: "https://git-scm.com/",
      image: "/techStack/git.svg",
      name: "Git",
    },
    {
      link: "https://www.docker.com/",
      image: "/techStack/docker.svg",
      name: "Docker",
    },
    {
      link: "https://aws.amazon.com/",
      image: "/techStack/aws.svg",
      name: "AWS",
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