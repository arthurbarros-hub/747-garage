import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicos premium",
  description: "Servicos tecnicos especializados para elevar acabamento e padrao Mercedes.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
