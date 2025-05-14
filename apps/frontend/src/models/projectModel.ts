export interface ProjectModel {
  _id: string;
  name: string;
  description: string;
  categorie: "web" | "software" | "mobile";
  image: string;
  date: string | Date;
  technologies: string[];
  link: string;
  github: string;
}