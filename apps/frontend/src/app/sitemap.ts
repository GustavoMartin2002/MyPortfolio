import { services } from '@/data/services';
import { ProjectModel } from '@/models/projectModel';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`);
  const projects: ProjectModel[] = await response.json();

  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/projeto/${project._id}`,
    lastModified: project.date || new Date(),
  }));

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
