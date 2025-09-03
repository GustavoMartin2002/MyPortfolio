export interface ServicesModel {
  id: "Website" | "APIs" | "Web-personalizado" | "Software" | "Mobile" | "Automacao" | "Manutencao";
  name: string;
  resume: string;
  image: string;
  description: string;
  technologies: {
    title: string;
    name: string[];
  }[];
  features: {
    title: string;
    description: string;
  }[];
  highlights: {
    title: string;
    description: string;
  }[];
}