import Divider from "@/components/Divider";
import HeroHome from "@/components/home/HeroHome";
import Hightlights from "@/components/home/Hightlights";
import Profile from "@/components/home/Profile";

export default function HomePage() {
  return (
    <>
      <HeroHome/>
      <Divider title={"Projetos"}/>
      <Hightlights/>
      <Divider title={"Currículo"}/>
      <Profile/>
    </>
  );
}
