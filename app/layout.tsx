import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Davilla Consultoria | Engenharia de Software e Sistemas sob Medida",
  description: "Transformamos a operação do seu negócio com sistemas personalizados, automações inteligentes e consultoria tecnológica de alto nível. Especialistas em ReservasClub e PWAs.",
  keywords: ["Consultoria de Software", "Desenvolvimento de Sistemas", "Automação de Processos", "SaaS", "ReservasClub", "Davilla Consultoria", "Sistemas para Empresas"],
  authors: [{ name: "Thulio D'avilla" }],
  creator: "Thulio D'avilla",
  publisher: "Davilla Consultoria",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://davillaconsultoria.com.br", // Substitua pelo seu domínio quando tiver
    title: "Davilla Consultoria | Sistemas feitos para escalar",
    description: "Recupere seu tempo e escale seu lucro com engenharia de software sob medida.",
    siteName: "Davilla Consultoria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Davilla Consultoria",
    description: "Sistemas e Automações para empresas que buscam escala.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}