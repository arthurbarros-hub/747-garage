export type Vehicle = {
  id: string;
  title: string;
  year: string;
  transmission: string;
  price: string;
  description: string;
  notes?: string;
  images: string[];
};

export const vehicles: Vehicle[] = [
  {
    id: "w201-prata",
    title: "Mercedes Benz 190E 2.3 8V (Prata)",
    year: "1990",
    transmission: "Manual 5 marchas",
    price: "R$ 29.900",
    description:
      "Anúncio de teste: exemplar prata com boa apresentação geral, visual clássico e proposta para validação da vitrine de veículos.",
    notes: "Dados simulados para testes (preço, ano e condições não correspondem a avaliação real).",
    images: ["/vehicles/prata-1.png", "/vehicles/prata-2.png", "/vehicles/prata-3.png"],
  },
  {
    id: "w201-branco",
    title: "Mercedes Benz 190E 2.3 8V (Branco)",
    year: "1991",
    transmission: "Manual 5 marchas",
    price: "R$ 30.900",
    description:
      "Anúncio de teste: exemplar branco com interior bem preservado e ótima composição visual para testes de card e página de detalhes.",
    notes: "Dados simulados para testes (preço, ano e condições não correspondem a avaliação real).",
    images: ["/vehicles/branco1.png", "/vehicles/branco2.png", "/vehicles/branco3.png"],
  },
  {
    id: "w201-preto",
    title: "Mercedes Benz 190E 2.3 8V (Preto)",
    year: "1990",
    transmission: "Automático 4 marchas",
    price: "R$ 28.900",
    description:
      "Anúncio de teste: exemplar preto com proposta esportiva e visual limpo, usado para simulação de listagem e navegação no catálogo.",
    notes: "Dados simulados para testes (preço, ano e condições não correspondem a avaliação real).",
    images: ["/vehicles/preto1.png", "/vehicles/preto2.png", "/vehicles/preto-3.png"],
  },
  {
    id: "w201-vinho",
    title: "Mercedes Benz 190E 2.3 8V (Vinho)",
    year: "1992",
    transmission: "Automático 4 marchas",
    price: "R$ 31.900",
    description:
      "Anúncio de teste: exemplar vinho com galeria completa de exterior, interior e cofre do motor para validar o carrossel e o anúncio detalhado.",
    notes: "Dados simulados para testes (preço, ano e condições não correspondem a avaliação real).",
    images: [
      "/vehicles/w201-vinho-externa-frente-lateral.jpeg",
      "/vehicles/vinho-traseira.png",
      "/vehicles/w201-vinho-interior-bancos-dianteiros.jpeg",
      "/vehicles/w201-vinho-interior-painel-volante.jpeg",
      "/vehicles/w201-vinho-interior-porta-dianteira.jpeg",
      "/vehicles/w201-vinho-interior-porta-traseira.jpeg",
      "/vehicles/w201-vinho-motor-cofre-geral.jpeg",
      "/vehicles/w201-vinho-motor-cofre-radiador.jpeg",
      "/vehicles/w201-vinho-motor-cofre-lateral-direita.jpeg",
      "/vehicles/w201-vinho-motor-detalhe-reservatorio.jpeg",
    ],
  },
];
