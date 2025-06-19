import Badge from "../Badge";

export default function ListToolsPlataforms() {
  const technologies = [
    {
      link: "https://git-scm.com/",
      image: "/techStack/git.svg",
      name: "Git",
    },
    {
      link: "https://github.com/features/actions",
      image: "/techStack/github-actions.svg",
      name: "GitHub Actions",
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
      link: "https://aws.amazon.com/",
      image: "/techStack/aws.svg",
      name: "AWS",
    },
    {
      link: "https://cloud.google.com/",
      image: "/techStack/gcp.svg",
      name: "GCP",
    },
    {
      link: "https://azure.microsoft.com/",
      image: "/techStack/azure.svg",
      name: "Azure",
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