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
    year: "1989",
    transmission: "Manual 5 marchas",
    price: "R$ 27.000",
    description:
      "Exemplar prata, íntegro para uso e projeto. Boa base para restauração com visual original.",
    notes: "Anúncio de teste com 3 fotos.",
    images: ["/vehicles/prata-1.png", "/vehicles/prata-2.png", "/vehicles/prata-3.png"],
  },
  {
    id: "w201-branco",
    title: "Mercedes Benz 190E 2.3 8V (Branco)",
    year: "1989",
    transmission: "Manual 5 marchas",
    price: "R$ 28.000",
    description:
      "104.000 km, interior azul, super conservada. Excelente base para coleção, restauração ou projeto.",
    notes: "É... mas acho que terei que virar doadora de peças...",
    images: ["/vehicles/branco1.png", "/vehicles/branco2.png", "/vehicles/branco3.png"],
  },
  {
    id: "w201-preto",
    title: "W201 190E 2.3 8V (Preto)",
    year: "1989",
    transmission: "Automático",
    price: "R$ 25.000",
    description:
      "Documentação ok. Elétrica em ordem exceto AC. Rodando normalmente. Exemplar para restauro original ou projeto personalizado.",
    notes:
      "Olá pessoal... fui vendida... meu novo dono irá aprontar... mandarei notícias!",
    images: ["/vehicles/preto1.png", "/vehicles/preto2.png", "/vehicles/preto-3.png"],
  },
];
