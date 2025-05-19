import Badge from "../Badge";

export default function ListFrontend() {
  const technologies = [
    {
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      image: "/techStack/html5.svg",
      name: "HTML5",
    },
    {
      link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
      image: "/techStack/css3.svg",
      name: "CSS3",
    },
    {
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      image: "/techStack/javascript.svg",
      name: "JavaScript",
    },
    {
      link: "https://tailwindcss.com/",
      image: "/techStack/tailwindcss.svg",
      name: "TailwindCSS",
    },
    {
      link: "https://react.dev/",
      image: "/techStack/react.svg",
      name: "React",
    },
    {
      link: "https://nextjs.org/",
      image: "/techStack/nextjs.svg",
      name: "Next.js",
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