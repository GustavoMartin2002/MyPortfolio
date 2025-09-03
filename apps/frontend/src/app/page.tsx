import Divider from "@/components/Divider";
import HeroHome from "@/components/home/HeroHome";
import HighlightServices from "@/components/home/HighlightServices";
import HighlightProjects from "@/components/home/HighlightProjects";
import Profile from "@/components/home/Profile";

export default function HomePage() {
  return (
    <>
      <HeroHome/>
      <Divider title={"Serviços"}/>
      <HighlightServices/>
      <Divider title={"Projetos"}/>
      <HighlightProjects/>
      <Divider title={"Currículo"}/>
      <Profile/>
    </>
  );
}
