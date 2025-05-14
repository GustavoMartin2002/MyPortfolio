import Divider from "@/components/Divider";
import AllProjects from "@/components/projects/AllProjects";
import HeroProjects from "@/components/projects/HeroProjects";

export default function ProjectsPage() {
  return (
    <>
      <HeroProjects/>      
      <Divider title={"Todos Projetos"}/>
      <AllProjects/>
    </>
  )
}