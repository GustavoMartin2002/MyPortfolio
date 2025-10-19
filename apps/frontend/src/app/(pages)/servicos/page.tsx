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
      <Contact whatsapp="https://wa.me/5571982326878?text=Oi,%20me%20interessei%20sobre%20seus%20serviços"/>
    </>
  );
}
