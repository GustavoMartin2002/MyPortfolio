import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: 'Gustavo Martin | Desenvolvedor Full Stack & Soluções Digitais',
  description:'Gustavo Martin é um desenvolvedor Full Stack especializado em criar websites, APIs, softwares desktop, apps mobile e automações. Ofereço soluções digitais completas e suporte técnico para empresas e projetos.',
  keywords: [
    'Desenvolvedor Full Stack',
    'Desenvolvedor Front-End',
    'Desenvolvedor Back-End',
    'Gustavo Martin',
    'Websites',
    'Landing Pages',
    'APIs',
    'Software para Desktop',
    'Apps Mobile',
    'Automação',
    'Manutenção de Sistemas',
    'Suporte Técnico',
    // Front-end
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'TailwindCSS', 'React.js', 'Next.js', 'Angular', 'Electron',
    // Back-end
    'C-Sharp', 'C#', 'Python', 'Node.js', 'Express.js', 'Fastify', 'Nest.js',
    // Databases
    'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase',
    // Tools and DevOps
    'Git', 'Jest', 'Testing Library', 'Postman', 'Swagger', 'Storybook', 'GitHub Actions', 'Docker', 'Kubernetes','Github Copilot', 'Gemini', 'OpenAI',
    // Cloud
    'AWS', 'GCP', 'Azure',
  ],
  openGraph: {
    title: 'Gustavo Martin | Desenvolvedor Full Stack',
    description:
      'Desenvolvedor Full Stack especializado em websites, APIs, softwares desktop e apps mobile. Ofereço soluções digitais e suporte técnico.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: 'Portfólio de Gustavo Martin',
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.webp`,
        width: 1200,
        height: 630,
        alt: 'Gustavo Martin - Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Martin | Desenvolvedor Full Stack',
    description:'Desenvolvedor Full Stack especializado em websites, APIs, softwares desktop e apps mobile. Ofereço soluções digitais e suporte técnico.',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/logo.webp`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <header>
          <NextTopLoader
            color="#0088ff"
            height={7}
          />
          <Navbar/>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
