import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pecas a venda",
  description: "Pecas Mercedes selecionadas com apresentacao premium e informacoes claras.",
};

export default function PartsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
