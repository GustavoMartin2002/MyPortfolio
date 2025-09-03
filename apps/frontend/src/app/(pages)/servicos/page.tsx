import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import AllServices from "@/components/servicos/AllServices";
import HeroServices from "@/components/servicos/HeroServices";

export default function ServicesPage() {
  return (
    <>
      <HeroServices/>
      <Divider title="Meus Serviços"/>
      <AllServices/>
      <Contact/>
    </>
  );
}
