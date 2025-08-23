import Badge from "../Badge";

export default function ListCloud() {
  const technologies = [
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