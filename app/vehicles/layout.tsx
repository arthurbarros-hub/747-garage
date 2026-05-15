import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veiculos a venda",
  description: "Catalogo de veiculos Mercedes classicos com curadoria premium da 747 Garage.",
};

export default function VehiclesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
