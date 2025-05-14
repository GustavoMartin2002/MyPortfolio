import Badge from "../Badge"

export default function ListDatabase() {
  const technologies = [
    {
      link: "https://www.mysql.com/",
      image: "/techStack/mysql.svg",
      name: "MySQL",
    },
    {
      link: "https://www.postgresql.org/",
      image: "/techStack/postgresql.svg",
      name: "PostgreSQL",
    },
    {
      link: "https://www.mongodb.com/",
      image: "/techStack/mongodb.svg",
      name: "MongoDB",
    },
    {
      link: "https://firebase.google.com/",
      image: "/techStack/firebase.svg",
      name: "Firebase",
    },
  ]

  return (
    <div
      className="grid grid-cols-4 gap-10
      max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"
    >
      { technologies.map((tech) => (
        <Badge key={tech.name} link={tech.link} image={tech.image} name={tech.name}/>
      )) }
    </div>
  )
}