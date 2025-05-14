import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: 'Gustavo Martin',
  description: 'Desenvolvedor Full Stack',
  keywords: ['Desenvolvedor Full Stack', 'Desenvolvedor Front-End', 'Desenvolvedor Back-End'],
  openGraph: {
    title: 'Gustavo Martin',
    description: 'Desenvolvedor Full Stack',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: 'Gustavo Martin',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
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
