import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "747 Garage",
    template: "%s | 747 Garage",
  },
  description: "Mercedes classicas dos anos 80 e 90, curadoria premium e atendimento direto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Pular para o conteudo principal
        </a>
        <SiteHeader />

        {children}
      </body>
    </html>
  );
}
