export type Part = {
  id: string;
  title: string;
  category: string;
  condition: string;
  price: string;
  description: string;
  notes?: string;
  badges?: string[];
  images: string[];
};

export const parts: Part[] = [
  {
    id: "lanternas-traseiras-w201",
    title: "Jogo de Lanternas Traseiras Mercedes W201",
    category: "Lanternas",
    condition: "Seminovo",
    price: "R$ 1.980",
    description:
      "Conjunto de lanternas traseiras originais com excelente conservação e encaixes íntegros.",
    notes: "Peça ideal para reposição em restauração de 190E.",
    badges: ["Peça original", "Últimas unidades"],
    images: ["/pecas/lanternas-traseiras-w201.png"],
  },
  {
    id: "painel-frontal-w201",
    title: "Painel Frontal Mercedes W201",
    category: "Interior",
    condition: "Original",
    price: "R$ 2.750",
    description:
      "Painel frontal completo para projeto de restauração, com estrutura boa e pontos de fixação preservados.",
    notes: "Modelo com visual clássico e recorte original do conjunto.",
    badges: ["Acabamento de época", "Peça estruturada"],
    images: ["/pecas/painel-frontal-w201.png"],
  },
  {
    id: "jogo-rodas-classicas-mercedes",
    title: "Jogo de Rodas Clássicas Mercedes",
    category: "Rodas",
    condition: "Revisado",
    price: "R$ 3.900",
    description:
      "Rodas clássicas com desenho colmeia e acabamento prata, perfeitas para projeto de época.",
    notes: "Venda em conjunto de 4 unidades.",
    badges: ["Conjunto completo", "Estilo clássico"],
    images: ["/pecas/rodas-classicas-mercedes.png"],
  },
];
