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
  {
      id: "par-portas-mercedes-w201",
    title: "Par de Portas Mercedes W201",
    category: "Lataria",
    condition: "Seminovo",
    price: "R$ 2.480",
    description:
      "Par de portas com estrutura íntegra, ótimo alinhamento e visual original para restauração de Mercedes 190E.",
    notes: "Venda do par completo, com excelente base para funilaria e pintura final.",
    badges: ["Conjunto de 2 peças", "Bom estado estrutural"],
    images: ["/pecas/portas-normal.png"],
  },
  {
    id: "saida-ar-painel-w201",
    title: "Saida de Ar do Painel Mercedes W201",
    category: "Interior",
    condition: "Original",
    price: "R$ 420",
    description:
      "Difusor lateral de ventilacao do painel com acabamento preto original e mecanismo interno presente.",
    notes: "Ideal para reposicao de acabamento interno em projeto de restauracao.",
    badges: ["Peca original", "Acabamento interno"],
    images: ["/pecas/saida-ar-painel-w201.jpeg"],
  },
  {
    id: "coletor-escape-w201",
    title: "Coletor de Escape Mercedes W201",
    category: "Motor",
    condition: "Usado",
    price: "R$ 1.250",
    description:
      "Coletor de escape em ferro fundido para Mercedes W201, com estrutura robusta para recuperacao e uso em projeto de epoca.",
    notes: "Recomendado avaliar limpeza tecnica e plano das faces antes da instalacao.",
    badges: ["Peca de motor", "Estrutura original"],
    images: ["/pecas/coletor-escape-w201.jpeg"],
  },
  {
    id: "grade-dianteira-mercedes-w201",
    title: "Grade Dianteira Mercedes W201",
    category: "Frente",
    condition: "Original",
    price: "R$ 1.480",
    description:
      "Grade dianteira classica Mercedes com estrela central e moldura completa, excelente para restauracao com visual de epoca.",
    notes: "Peca com visual autentico para valorizar acabamento frontal do veiculo.",
    badges: ["Visual classico", "Peca de frente"],
    images: ["/pecas/grade-dianteira-mercedes-w201.jpeg"],
  },
  {
    id: "paralama-dianteiro-w201",
    title: "Paralama Dianteiro Mercedes W201",
    category: "Lataria",
    condition: "Usado",
    price: "R$ 980",
    description:
      "Paralama dianteiro original Mercedes W201 com estrutura integra, ideal para reposicao e projeto de restauracao.",
    notes: "Recomendado ajustar acabamento final de funilaria e pintura.",
    badges: ["Peca de lataria", "Original de epoca"],
    images: ["/pecas/paralama-dianteiro-w201.jpeg"],
  },
  {
    id: "forro-porta-w201-comando-vidro",
    title: "Forro de Porta W201 com Comando de Vidro",
    category: "Interior",
    condition: "Usado",
    price: "R$ 650",
    description:
      "Forro de porta Mercedes W201 com puxador e comando de vidro, peca original para reposicao de acabamento interno.",
    notes: "Possui desgaste de uso no acabamento superior, conforme foto.",
    badges: ["Interior original", "Comando de vidro"],
    images: ["/pecas/forro-porta-w201-comando-vidro.jpeg"],
  },
  {
    id: "modulo-bosch-mercedes-w201",
    title: "Modulo Bosch Mercedes W201",
    category: "Eletrica",
    condition: "Original",
    price: "R$ 1.350",
    description:
      "Modulo Bosch Mercedes com codigo 0 280 800 124 e referencia 003 545 49 32, ideal para reposicao eletrica.",
    notes: "Recomendado confirmar compatibilidade pelo codigo antes da compra.",
    badges: ["Bosch", "Codigo identificado"],
    images: ["/pecas/forro-porta-w201-direito.jpeg"],
  },
  {
    id: "forro-porta-w201-direito",
    title: "Forro de Porta Direito Mercedes W201",
    category: "Interior",
    condition: "Usado",
    price: "R$ 620",
    description:
      "Forro de porta lado direito Mercedes W201 com puxador integrado, bom para restauracao de acabamento interno.",
    notes: "Item vendido na configuracao exibida na foto.",
    badges: ["Lado direito", "Acabamento interno"],
    images: ["/pecas/modulo-bosch-mercedes-w201.jpeg"],
  },
  {
    id: "forro-porta-w201-esquerdo",
    title: "Forro de Porta Esquerdo Mercedes W201",
    category: "Interior",
    condition: "Usado",
    price: "R$ 620",
    description:
      "Forro de porta lado esquerdo Mercedes W201 com acabamento classico e puxador original.",
    notes: "Boa base para higienizacao e revitalizacao de interior.",
    badges: ["Lado esquerdo", "Acabamento interno"],
    images: ["/pecas/forro-porta-w201-esquerdo.jpeg"],
  },
  {
    id: "forro-porta-w201-traseiro-direito",
    title: "Forro de Porta Traseiro Mercedes W201 - Direito",
    category: "Interior",
    condition: "Original",
    price: "R$ 580",
    description:
      "Forro de porta traseiro lado direito Mercedes W201 com acabamento original e estrutura integra.",
    notes: "Peca para restauracao de interior traseiro com acabamento de epoca.",
    badges: ["Traseiro", "Original"],
    images: ["/pecas/forro-porta-w201-traseiro-direito.jpeg"],
  },
  {
    id: "forro-porta-w201-traseiro-esquerdo",
    title: "Forro de Porta Traseiro Mercedes W201 - Esquerdo",
    category: "Interior",
    condition: "Original",
    price: "R$ 580",
    description:
      "Forro de porta traseiro lado esquerdo Mercedes W201 com puxador original e acabamento de epoca.",
    notes: "Item completo para restauracao de acabamento interior traseiro.",
    badges: ["Traseiro", "Original"],
    images: ["/pecas/forro-porta-w201-traseiro-esquerdo.jpeg"],
  },
  {
    id: "painel-instrumentos-w201",
    title: "Painel de Instrumentos (Cluster) Mercedes W201",
    category: "Interior",
    condition: "Seminovo",
    price: "R$ 1.650",
    description:
      "Cluster completo do Mercedes W201 com velocimetro, tacometro e indicadores funcionando. Condicao de saida da garagem com patina original.",
    notes: "Acompanha conjunto de ferramentas de trabalho. Pronto para instalacao ou restauracao.",
    badges: ["Cluster funcionando", "Ferramentas incluidas"],
    images: ["/pecas/painel-instrumentos-w201.jpeg"],
  },
  {
    id: "motor-m102-mercedes",
    title: "Motor M102 Mercedes W201",
    category: "Motor",
    condition: "Funcionando",
    price: "R$ 4.500",
    description:
      "Motor M102 Mercedes original com components relacionados e acessorios instalados. Motor com funcionamento testado e em condicoes operacionais.",
    notes: "Motor de saida de veiculo restaurado, com todos os sistemas funcionando. Ideal para troca ou projeto.",
    badges: ["Funcionando", "Completo"],
    images: [
      "/pecas/motor-m102-w201-cofre-em-montagem.jpeg",
      "/pecas/motor-m102-mercedes.jpeg",
    ],
  },
  {
    id: "farol-dianteiro-bosch-w201",
    title: "Farol Dianteiro Bosch Mercedes W201",
    category: "Frente",
    condition: "Original",
    price: "R$ 850",
    description:
      "Farol dianteiro Bosch original Mercedes W201 com lente e mecanismo de foco integro, excelente para restauracao de iluminacao frontal.",
    notes: "Peca autentica Bosch com marcacao de epoca e boa conservacao.",
    badges: ["Bosch original", "Frente"],
    images: ["/pecas/farol-dianteiro-bosch-w201.jpeg"],
  },
  {
    id: "rele-bosch-esquerdo-w201",
    title: "Rele Bosch Mercedes W201 - Esquerdo",
    category: "Eletrica",
    condition: "Original",
    price: "R$ 380",
    description:
      "Rele Bosch original Mercedes W201 lado esquerdo, modelo L com codigo e referencias identificadas na etiqueta amarela.",
    notes: "Peca de componente eletrico com marcacao Bosch autentica e referencia Mercedes.",
    badges: ["Bosch", "Eletrica"],
    images: ["/pecas/rele-bosch-esquerdo-w201.jpeg"],
  },
  {
    id: "rele-bosch-direito-w201",
    title: "Rele Bosch Mercedes W201 - Direito",
    category: "Eletrica",
    condition: "Original",
    price: "R$ 380",
    description:
      "Rele Bosch original Mercedes W201 lado direito, modelo R com codigo e referencias identificadas na etiqueta amarela.",
    notes: "Componente eletrico Bosch com marcacao e referencia Mercedes integra.",
    badges: ["Bosch", "Eletrica"],
    images: ["/pecas/rele-bosch-direito-w201.jpeg"],
  },
  {
    id: "lanterna-traseira-bosch-w201",
    title: "Lanterna Traseira Bosch Mercedes W201",
    category: "Lanternas",
    condition: "Original",
    price: "R$ 920",
    description:
      "Lanterna traseira Bosch original Mercedes W201 com lentes e acabamento integro, excelente para restauracao de iluminacao.",
    notes: "Peca com marcacao Bosch autentica e lentes em condicao de uso.",
    badges: ["Bosch original", "Traseira"],
    images: ["/pecas/lanterna-traseira-bosch-w201.jpeg"],
  },
  {
    id: "farol-dianteiro-w201-completo",
    title: "Farol Dianteiro Completo Mercedes W201",
    category: "Frente",
    condition: "Seminovo",
    price: "R$ 1.100",
    description:
      "Farol dianteiro completo Mercedes W201 com estrutura, lente e componentes internos, pronto para instalacao.",
    notes: "Conjunto funcional com excelente estado de conservacao.",
    badges: ["Completo", "Pronto para usar"],
    images: ["/pecas/farol-dianteiro-w201-completo.jpeg"],
  },
  {
    id: "lanterna-recuo-w201",
    title: "Lanterna de Recuo Mercedes W201",
    category: "Lanternas",
    condition: "Original",
    price: "R$ 420",
    description:
      "Lanterna de recuo/backup Mercedes W201 original branca com estrutura integra e lente completa.",
    notes: "Peca pequena para iluminacao traseira, pronta para restauracao ou uso.",
    badges: ["Recuo/Backup", "Original"],
    images: ["/pecas/lanterna-recuo-w201.jpeg"],
  },
  {
    id: "farol-dianteiro-bosch-w201-retangular",
    title: "Farol Dianteiro Bosch Retangular W201",
    category: "Frente",
    condition: "Original",
    price: "R$ 980",
    description:
      "Farol dianteiro retangular Bosch para Mercedes W201 com lente e estrutura em bom estado, ideal para reposicao de epoca.",
    notes: "Peca unitária conforme imagem, com assinatura Bosch visivel na lente.",
    badges: ["Bosch", "Frente"],
    images: ["/pecas/farol-dianteiro-bosch-w201-retangular.jpeg"],
  },
  {
    id: "acabamento-body-kit-lateral-w201",
    title: "Acabamento Lateral Body Kit W201",
    category: "Lataria",
    condition: "Usado",
    price: "R$ 780",
    description:
      "Conjunto de acabamentos laterais do body kit para Mercedes W201 com base pronta para instalacao e ajuste de pintura.",
    notes: "Venda do conjunto mostrado na foto.",
    badges: ["Body kit", "Conjunto"],
    images: ["/pecas/acabamento-body-kit-lateral-w201.jpeg"],
  },
  {
    id: "par-retrovisor-w201",
    title: "Par de Retrovisores Mercedes W201",
    category: "Exterior",
    condition: "Usado",
    price: "R$ 1.180",
    description:
      "Par de retrovisores externos Mercedes W201 com carcaças originais e bom estado geral para reposicao no projeto.",
    notes: "Venda em par completo, conforme foto do anuncio.",
    badges: ["Par completo", "Original"],
    images: ["/pecas/par-retrovisor-w201.jpeg"],
  },
  {
    id: "par-lanterna-traseira-w201",
    title: "Par de Lanternas Traseiras W201",
    category: "Lanternas",
    condition: "Seminovo",
    price: "R$ 1.620",
    description:
      "Par de lanternas traseiras para Mercedes W201 com lentes bicolores e bom encaixe para reposicao e restauracao.",
    notes: "Conjunto vendido em par, no estado mostrado na imagem.",
    badges: ["Par de lanternas", "Traseira"],
    images: ["/pecas/par-lanterna-traseira-w201.jpeg"],
  },
  {
    id: "botao-vidro-eletrico-w201",
    title: "Botao de Vidro Eletrico Mercedes W201",
    category: "Interior",
    condition: "Original",
    price: "R$ 290",
    description:
      "Botao de comando de vidro eletrico Mercedes W201 com simbolos preservados e base de encaixe integra.",
    notes: "Ideal para reposicao de acabamento interno com padrao original.",
    badges: ["Comando eletrico", "Interior"],
    images: ["/pecas/botao-vidro-eletrico-w201.jpeg"],
  },
  {
    id: "para-choque-body-kit",
    title: "Body Kit Mercedes W201",
    category: "Lataria",
    condition: "Usado",
    price: "R$ 2.450",
    description:
      "Body kit Mercedes W201 com para-choque e componentes de acabamento, ideal para projeto visual esportivo com identidade de epoca.",
    notes: "Conjunto com fotos do kit completo e do carro com o body kit montado.",
    badges: ["Body kit", "Kit completo"],
    images: [
      "/pecas/body-kit-w201-instalacao-detalhe-lateral.jpeg",
      "/pecas/para-choque-body-kit.jpeg",
      "/pecas/body-kit-w201-kit-completo.jpeg",
      "/pecas/body-kit-w201-carro-completo.jpeg",
      "/pecas/body-kit-w201-instalacao-frente.jpeg",
      "/pecas/body-kit-w201-instalacao-lateral.jpeg",
    ],
  },
];
