import HeroCurriculum from "@/components/curriculum/HeroCurriculum"
import Divider from "@/components/Divider"
import Skills from "@/components/curriculum/Skills"
import About from "@/components/curriculum/About"
import EducationExperience from "@/components/curriculum/EducationExperience"
import Contact from "@/components/curriculum/Contact"

export default async function CurriculumPage() {
  return(
    <>
      <HeroCurriculum/>

      <Divider title={"Educação & Experiência"}/>
      <EducationExperience/>

      <Divider title={"Habilidades & Tecnologias"}/>
      <Skills/>

      <Divider title={"Sobre"}/>
      <About/>

      <Divider title={"Contato"}/>
      <Contact/>
    </>
  )
}