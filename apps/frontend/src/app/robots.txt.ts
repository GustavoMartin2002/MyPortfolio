import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Aplica-se a todos os rastreadores
        allow: '/', // Permite o acesso a todas as páginas por padrão
      },
      {
        userAgent: 'Googlebot', // Aplica-se especificamente ao rastreador do Google
        disallow: '/admin/', // Impede o acesso à pasta /admin/ e seus subdiretórios
        crawlDelay: 10, // Sugere um atraso de 10 segundos entre as requisições do Googlebot (use com cautela)
      },
      {
        userAgent: 'Bingbot', // Aplica-se especificamente ao rastreador do Bing
        disallow: '/temp/', // Impede o acesso à pasta /temp/
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`, // Indica a localização do sitemap
  };
}