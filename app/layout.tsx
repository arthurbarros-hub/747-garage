import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "747 Garage",
  description: "Mercedes clássicas dos anos 80 e 90, reserva online e curadoria premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <SiteHeader />

        {children}
      </body>
    </html>
  );
}
