import { services } from '@/data/services';
import { ProjectModel } from '@/models/projectModel';
import type { MetadataRoute } from 'next';

interface ApiResponse {
  data: ProjectModel[];
  currentPage: number;
  totalPages: number;
  totalProjects: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let projectUrls: MetadataRoute.Sitemap = [];

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`;
    const response = await fetch(apiUrl, { cache: 'no-store' });

    if(response.ok) {
      const projects:ApiResponse = await response.json();

      if (Array.isArray(projects.data)) {
        projectUrls = projects.data.map((project) => ({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/projeto/${project._id}`,
          lastModified: project.date ?? new Date(),
        }));
      } else {
        console.warn('API retornou dados inválidos (propriedade "data" ausente ou não é array).');
      }
    } else {
      console.error(`Falha ao buscar projetos para o sitemap. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Exceção capturada durante o fetch do sitemap:', error);
  }

  const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/servico/${service.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/servicos`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projetos`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/curriculo`,
      lastModified: new Date(),
    },
    ...serviceUrls,
    ...projectUrls,
  ];
}
