export type Service = {
  id: string;
  title: string;
  category: string;
  duration: string;
  startingPrice: string;
  description: string;
  notes?: string;
  highlights?: string[];
  images: string[];
};

export const services: Service[] = [
  {
    id: "instalacao-body-kit-mercedes-w201",
    title: "Instalação de body kit W201",
    category: "Lataria",
    duration: "1 a 3 dias úteis",
    startingPrice: "A partir de R$ 2.450",
    description:
      "Instalação de body kit Mercedes W201 com ajuste de encaixe, alinhamento e acabamento final para visual esportivo de época.",
    notes: "Kit sob avaliação prévia para garantir compatibilidade e alinhamento.",
    highlights: ["Instalação", "Alinhamento", "Acabamento"],
    images: [
      "/pecas/body-kit-w201-instalacao-detalhe-lateral.jpeg",
      "/pecas/para-choque-body-kit.jpeg",
      "/pecas/body-kit-w201-kit-completo.jpeg",
      "/pecas/body-kit-w201-carro-completo.jpeg",
      "/pecas/body-kit-w201-instalacao-frente.jpeg",
      "/pecas/body-kit-w201-instalacao-lateral.jpeg",
    ],
  },
  {
    id: "instalacao-pecas",
    title: "Instalação de Peças",
    category: "Mecânica e Elétrica",
    duration: "1 a 4 dias úteis",
    startingPrice: "A partir de R$ 350",
    description:
      "Instalação de peças de reposição ou upgrade com avaliação prévia de compatibilidade, execução limpa e checklist de funcionamento após montagem.",
    notes: "Atende peças internas, externas, componentes elétricos e itens de acabamento.",
    highlights: ["Checklist pós-instalação", "Compatibilidade validada", "Mão de obra especializada"],
    images: [
      "/pecas/motor-m102-mercedes.jpeg",
      "/pecas/painel-instrumentos-w201.jpeg",
      "/sobre/2.jpeg",
    ],
  },
  {
    id: "restauracao-acabamentos",
    title: "Restauração de Acabamentos",
    category: "Detalhamento e Interior",
    duration: "2 a 7 dias úteis",
    startingPrice: "A partir de R$ 980",
    description:
      "Recuperação de acabamentos internos e externos, com foco em preservar a identidade original e elevar a apresentação do veículo.",
    notes: "Excelente para projetos de revenda, coleção ou preparação para eventos.",
    highlights: ["Visual original valorizado", "Acabamento de época", "Projeto sob avaliação"],
    images: [
      "/pecas/forro-porta-w201-esquerdo.jpeg",
      "/pecas/forro-porta-w201-traseiro-esquerdo.jpeg",
      "/historia/06-etapas-construcao-2021.jpeg",
    ],
  },
  {
    id: "diagnostico-projeto",
    title: "Diagnóstico e Planejamento de Projeto",
    category: "Consultoria Técnica",
    duration: "Atendimento sob agenda",
    startingPrice: "Sob consulta",
    description:
      "Avaliação técnica para montar um plano de execução: peças necessárias, ordem de serviços e estratégia de investimento por etapa.",
    notes: "Recomendado para quem está iniciando restauração ou upgrade completo.",
    highlights: ["Plano por etapas", "Direcionamento de peças", "Decisão com mais segurança"],
    images: [
      "/historia/sketch-plan-2026-04-11.png",
      "/historia/03-medicoes-cobertura-2020.jpeg",
      "/historia/04-alinhamento-estacas-2020.jpeg",
    ],
  },
];