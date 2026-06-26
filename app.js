const WHATSAPP_NUMBER = "5569992031044";

const categories = [
  { id: "todos", label: "Tudo" },
  { id: "acai", label: "Açaí" },
  { id: "tacas", label: "Taças" },
  { id: "mix", label: "Mix" },
  { id: "kids", label: "Kids" },
  { id: "casquinhas", label: "Cascões" },
  { id: "milkshakes", label: "Milk Shakes" },
  { id: "copos", label: "Copos e potes" },
];

const flavors = [
  "Disponível do dia",
  "Chocolate",
  "Morango",
  "Leite Ninho",
  "Céu Azul",
  "Cappuccino",
  "Açaí",
  "Pistache",
  "Flocos",
  "Creme",
];

const addons = [
  { id: "nutella", label: "Nutella", price: 6 },
  { id: "leite-po", label: "Leite em Pó", price: 3 },
  { id: "ovomaltine", label: "Ovomaltine", price: 3 },
  { id: "chantilly", label: "Chantilly", price: 4 },
  { id: "morango", label: "Morango", price: 5 },
  { id: "banana", label: "Banana", price: 3 },
  { id: "leite-condensado", label: "Leite Condensado", price: 3 },
  { id: "calda-quente", label: "Calda Quente", price: 4 },
  { id: "doce-leite", label: "Doce de Leite", price: 4 },
  { id: "granulado", label: "Granulado", price: 2 },
  { id: "castanha", label: "Castanha de Caju", price: 4 },
];

const products = [
  {
    id: "acai-monte",
    category: "acai",
    name: "Açaí do seu jeito",
    image: "assets/products/acai-tradicional.png",
    highlight: true,
    description: "Escolha a base, o tamanho e até 5 acompanhamentos.",
    ingredients: ["Açaí", "Até 5 acompanhamentos", "Embalagem para delivery"],
    sizes: [
      { label: "Médio 400ml", price: 23 },
      { label: "Grande 500ml", price: 28 },
    ],
    builder: true,
  },
  {
    id: "acai-tradicional",
    category: "acai",
    name: "Açaí Tradicional",
    image: "assets/products/acai-tradicional.png",
    highlight: true,
    description: "Açaí, banana, Neston, granola, morango e leite condensado.",
    ingredients: ["Açaí", "Banana", "Neston", "Granola", "Morango", "Leite Condensado"],
    sizes: [
      { label: "Médio 400ml", price: 23 },
      { label: "Grande 500ml", price: 28 },
    ],
  },
  {
    id: "acai-light",
    category: "acai",
    name: "Açaí Light",
    image: "assets/products/acai-light.png",
    description: "Açaí, banana, mamão, maçã, mel e aveia.",
    ingredients: ["Açaí", "Banana", "Mamão", "Maçã", "Mel", "Aveia"],
    sizes: [
      { label: "Médio 400ml", price: 23 },
      { label: "Grande 500ml", price: 28 },
    ],
  },
  {
    id: "acai-kids",
    category: "kids",
    name: "Açaí Kids",
    image: "assets/products/acai-kids.png",
    description: "Açaí com cobertura de chocolate, disquete, wafer, miniball e chantilly.",
    ingredients: ["Açaí", "Cobertura de Chocolate", "Disquete", "Wafer", "Miniball", "Chantilly"],
    sizes: [
      { label: "400ml", price: 23 },
      { label: "500ml", price: 28 },
    ],
  },
  {
    id: "acai-patrao",
    category: "acai",
    name: "Açaí Patrão",
    image: "assets/products/acai-patrao.png",
    highlight: true,
    description: "Açaí, leite em pó, banana, maçã, farinha láctea e leite condensado.",
    ingredients: ["Açaí", "Leite em Pó", "Banana", "Maçã", "Farinha Láctea", "Leite Condensado"],
    sizes: [
      { label: "Médio 400ml", price: 23 },
      { label: "Grande 500ml", price: 28 },
    ],
  },
  {
    id: "acai-floresta",
    category: "acai",
    name: "Açaí Floresta Negra",
    image: "assets/products/acai-floresta.png",
    description: "Açaí, cereja, chantilly, morango, raspas de chocolate e granulado.",
    ingredients: ["Açaí", "Cereja", "Chantilly", "Morango", "Raspas de Chocolate", "Granulado"],
    sizes: [
      { label: "Médio 400ml", price: 23 },
      { label: "Grande 500ml", price: 28 },
    ],
  },
  {
    id: "acai-chocolegal",
    category: "acai",
    name: "Açaí Chocolegal",
    image: "assets/products/acai-chocolegal.png",
    description: "Açaí, leite em pó, Ovomaltine, Chocoball, leite condensado e chantilly.",
    ingredients: ["Açaí", "Leite em Pó", "Ovomaltine", "Chocoball", "Leite Condensado", "Chantilly"],
    sizes: [
      { label: "Médio 400ml", price: 23 },
      { label: "Grande 500ml", price: 28 },
    ],
  },
  {
    id: "acai-mix-combine",
    category: "acai",
    name: "Açaí Mix Combine",
    image: "assets/products/acai-mix-copo.png",
    description: "Monte com caldas e acompanhamentos conforme o tamanho.",
    ingredients: ["Açaí", "Caldas", "Acompanhamentos"],
    sizes: [
      { label: "300ml: 1 calda + 1 acompanhamento", price: 20 },
      { label: "400ml: 2 caldas + 2 acompanhamentos", price: 23 },
      { label: "500ml: 3 caldas + 3 acompanhamentos", price: 28 },
    ],
    builder: true,
  },
  {
    id: "vitamina-vintao",
    category: "acai",
    name: "Vitamina Vintão",
    image: "assets/products/vitamina-acai.png",
    description: "Açaí batido com leite, leite em pó, paçoca e xarope de guaraná.",
    ingredients: ["Açaí", "Leite", "Leite em Pó", "Paçoca", "Xarope de Guaraná"],
    sizes: [{ label: "400ml", price: 20 }],
  },
  {
    id: "vitamina-quarentao",
    category: "acai",
    name: "Vitamina Quarentão",
    image: "assets/products/vitamina-acai.png",
    description: "Açaí batido com leite, leite em pó, paçoca, pó e xarope de guaraná.",
    ingredients: ["Açaí", "Leite", "Leite em Pó", "Paçoca", "Pó", "Xarope de Guaraná"],
    sizes: [{ label: "400ml", price: 21 }],
  },
  {
    id: "vitamina-sessentao",
    category: "acai",
    name: "Vitamina Sessentão",
    image: "assets/products/vitamina-acai.png",
    description: "Com catuába, mirantã, nó de cachorro, vergatez e ovo de codorna.",
    ingredients: ["Açaí", "Leite", "Leite em Pó", "Paçoca", "Catuába", "Mirantã", "Nó de Cachorro", "Ovo de Codorna"],
    sizes: [{ label: "400ml", price: 22 }],
  },
  {
    id: "garrafinha-01",
    category: "acai",
    name: "Garrafinha Pede Bis #01",
    image: "assets/products/garrafinha-pede-bis.png",
    description: "Açaí, creme de amendoim e paçoca.",
    ingredients: ["Açaí", "Creme de Amendoim", "Paçoca"],
    sizes: [{ label: "250ml", price: 16 }],
  },
  {
    id: "garrafinha-02",
    category: "acai",
    name: "Garrafinha Pede Bis #02",
    image: "assets/products/garrafinha-pede-bis.png",
    description: "Açaí, Nutella e Ovomaltine.",
    ingredients: ["Açaí", "Nutella", "Ovomaltine"],
    sizes: [{ label: "250ml", price: 16 }],
  },
  {
    id: "garrafinha-03",
    category: "acai",
    name: "Garrafinha Pede Bis #03",
    image: "assets/products/garrafinha-pede-bis.png",
    description: "Açaí, creme de ninho e leite em pó.",
    ingredients: ["Açaí", "Creme de Ninho", "Leite em Pó"],
    sizes: [{ label: "250ml", price: 16 }],
  },
  {
    id: "taca-ferrero",
    category: "tacas",
    name: "Taça Ferrero Rocher",
    image: "assets/products/taca-ferrero.png",
    highlight: true,
    description: "Sorvete, Nutella, amendoim, creme de avelã, Ferrero e chantilly.",
    ingredients: ["Escolha o Sorvete", "Nutella", "Amendoim", "Creme de Avelã", "Bombom Ferrero Rocher", "Chantilly"],
    sizes: [{ label: "460ml", price: 36 }],
  },
  {
    id: "taca-kinder",
    category: "tacas",
    name: "Taça Kinder",
    image: "assets/products/taca-kinder.png",
    description: "Sorvete, creme de ninho, creme de chocolate, Nutella, Kinder e chantilly.",
    ingredients: ["Escolha o Sorvete", "Creme de Ninho", "Creme de Chocolate", "Nutella", "Chocolate Kinder", "Chantilly"],
    sizes: [{ label: "460ml", price: 33 }],
  },
  {
    id: "taca-supremo-coffee",
    category: "tacas",
    name: "Supremo Coffee",
    image: "assets/products/taca-supremo-coffee.png",
    description: "Sorvete de cappuccino com cobertura de chocolate, bombons e raspas.",
    ingredients: ["Cobertura de Chocolate", "Sorvete de Cappuccino", "Bombons", "Raspas de Chocolate", "Chantilly"],
    sizes: [{ label: "460ml", price: 31 }],
  },
  {
    id: "taca-enamorados",
    category: "tacas",
    name: "Taça Enamorados",
    image: "assets/products/taca-enamorados.png",
    description: "Sorvete, cobertura de chocolate, bombons, wafer, cereja, calda quente e chantilly.",
    ingredients: ["Escolha o Sorvete", "Cobertura de Chocolate", "Bombons", "Wafer", "Cereja", "Calda Quente", "Chantilly"],
    sizes: [{ label: "460ml", price: 25 }],
  },
  {
    id: "taca-rafaello",
    category: "tacas",
    name: "Taça Rafaello",
    image: "assets/products/taca-rafaello.png",
    description: "Sorvete, brigadeiro branco, coco, Rafaello, creme de amêndoas e chantilly.",
    ingredients: ["Escolha o Sorvete", "Brigadeiro Branco", "Coco", "Bombom Rafaello", "Creme de Amêndoas", "Chantilly"],
    sizes: [{ label: "460ml", price: 36 }],
  },
  {
    id: "taca-pudim",
    category: "tacas",
    name: "Taça Pudim",
    image: "assets/products/taca-pudim.png",
    highlight: true,
    description: "Sorvete, calda de caramelo, cookie Laka e pudim.",
    ingredients: ["Escolha o Sorvete", "Calda de Caramelo", "Cookie Laka", "Pudim"],
    sizes: [{ label: "460ml", price: 36 }],
  },
  {
    id: "taca-nuleite",
    category: "tacas",
    name: "Nuleite",
    image: "assets/products/taca-nuleite.png",
    description: "Sorvete, cobertura de chocolate, Nutella, leite em pó e chantilly.",
    ingredients: ["Escolha o Sorvete", "Cobertura de Chocolate", "Nutella", "Leite em Pó", "Chantilly"],
    sizes: [{ label: "360ml", price: 20 }],
  },
  {
    id: "taca-sensacao",
    category: "tacas",
    name: "Sensação",
    image: "assets/products/taca-sensacao.png",
    description: "Sorvete, cobertura de morango, leite condensado, morangos e chantilly.",
    ingredients: ["Escolha o Sorvete", "Cobertura de Morango", "Leite Condensado", "Morangos", "Chantilly"],
    sizes: [{ label: "360ml", price: 20 }],
  },
  {
    id: "taca-banoffe",
    category: "tacas",
    name: "Banoffe",
    image: "assets/products/taca-banoffe.png",
    description: "Sorvete, banana, canela, doce de leite, creme de leite e chantilly.",
    ingredients: ["Escolha o Sorvete", "Banana", "Canela", "Doce de Leite", "Creme de Leite", "Chantilly"],
    sizes: [{ label: "360ml", price: 20 }],
  },
  {
    id: "taca-big-sandey",
    category: "tacas",
    name: "Big Sandey",
    image: "assets/products/taca-big-sandey.png",
    description: "Sorvete, chocolate, castanha, Ovomaltine, calda quente, cereja e chantilly.",
    ingredients: ["Escolha o Sorvete", "Cobertura de Chocolate", "Castanha de Caju", "Ovomaltine", "Calda Quente", "Cereja", "Chantilly"],
    sizes: [{ label: "360ml", price: 20 }],
  },
  {
    id: "taca-ostentacao",
    category: "tacas",
    name: "Ostentação",
    image: "assets/products/taca-ostentacao.png",
    description: "Sorvete, recheio de ninho, geleia de abacaxi, creme de chocolate e chantilly.",
    ingredients: ["Escolha o Sorvete", "Recheio de Ninho", "Geleia de Abacaxi", "Creme de Chocolate", "Chantilly"],
    sizes: [{ label: "360ml", price: 20 }],
  },
  {
    id: "taca-casadinho-acai",
    category: "tacas",
    name: "Casadinho de Açaí",
    image: "assets/products/taca-casadinho-acai.png",
    description: "Sorvete de açaí, recheio de ninho e chantilly.",
    ingredients: ["Sorvete de Açaí", "Recheio de Ninho", "Chantilly"],
    sizes: [{ label: "360ml", price: 20 }],
  },
  {
    id: "taca-salada-frutas",
    category: "tacas",
    name: "Salada de Frutas",
    image: "assets/products/taca-salada-frutas.png",
    description: "Sorvete com banana, mamão, morango, maçã, laranja, cereja, Neston e leite condensado.",
    ingredients: ["Escolha o Sorvete", "Banana", "Mamão", "Morango", "Maçã", "Laranja", "Cereja", "Neston", "Leite Condensado", "Chantilly"],
    sizes: [{ label: "360ml", price: 20 }],
  },
  {
    id: "taca-monte",
    category: "tacas",
    name: "Taça do seu jeito",
    image: "assets/products/taca-nuleite.png",
    description: "Monte sua taça com até 5 acompanhamentos.",
    ingredients: ["Escolha o Sorvete", "Até 5 acompanhamentos"],
    sizes: [
      { label: "Média 360ml", price: 20 },
      { label: "Grande 460ml", price: 25 },
    ],
    builder: true,
  },
  {
    id: "mix-brownie-sorvete",
    category: "mix",
    name: "Brownie com Sorvete",
    image: "assets/products/mix-brownie-sorvete.png",
    highlight: true,
    description: "Brownie de chocolate com recheio de ninho, creme de chocolate, morango e calda quente.",
    ingredients: ["Escolha o Sorvete", "Brownie de Chocolate", "Recheio de Ninho", "Creme de Chocolate", "Morango", "Calda Quente"],
    sizes: [{ label: "Porção", price: 29 }],
  },
  {
    id: "mix-canecake-kinder",
    category: "mix",
    name: "Canecake Kinder",
    image: "assets/products/mix-canecake-kinder.png",
    highlight: true,
    description: "Bolo de chocolate, recheio de ninho, chocolate Kinder, Nutella e chantilly.",
    ingredients: ["Escolha o Sorvete", "Creme de Chocolate", "Bolo de Chocolate", "Recheio de Ninho", "Chocolate Kinder", "Nutella", "Chantilly"],
    sizes: [{ label: "360ml", price: 40 }],
  },
  {
    id: "mix-copo-felicidade",
    category: "mix",
    name: "Copo da Felicidade",
    image: "assets/products/mix-copo-felicidade.png",
    description: "Sorvete, recheio de ninho, brigadeiro, Ovomaltine e chantilly.",
    ingredients: ["Escolha o Sorvete", "Recheio de Ninho", "Brigadeiro", "Ovomaltine", "Chantilly"],
    sizes: [{ label: "250ml", price: 20 }],
  },
  {
    id: "mix-banana-split",
    category: "mix",
    name: "Banana Split",
    image: "assets/products/mix-banana-split.png",
    description: "Até 3 sabores de sorvete, cobertura, banana, cereja, castanha e chantilly.",
    ingredients: ["Até 3 Sabores de Sorvete", "Cobertura", "Banana", "Cereja", "Castanha de Caju", "Chantilly"],
    sizes: [{ label: "Porção", price: 19 }],
  },
  {
    id: "mix-moranguito",
    category: "mix",
    name: "Mix Moranguito",
    image: "assets/products/mix-moranguito.png",
    description: "Sorvete, geleia de morango, creme de ninho e chantilly.",
    ingredients: ["Escolha o Sorvete", "Geleia de Morango", "Creme de Ninho", "Chantilly"],
    sizes: [{ label: "237ml", price: 19 }],
  },
  {
    id: "mix-ovomaltine-nutella",
    category: "mix",
    name: "Mix Ovomaltine + Nutella",
    image: "assets/products/mix-ovomaltine-nutella.png",
    description: "Sorvete, Ovomaltine, Nutella e chantilly.",
    ingredients: ["Escolha o Sorvete", "Ovomaltine", "Nutella", "Chantilly"],
    sizes: [{ label: "237ml", price: 19 }],
  },
  {
    id: "mix-acaitella",
    category: "mix",
    name: "Mix Açaítella",
    image: "assets/products/mix-acaitella-card.png",
    description: "Sorvete de açaí, leite em pó, Nutella e chantilly.",
    ingredients: ["Sorvete de Açaí", "Leite em Pó", "Nutella", "Chantilly"],
    sizes: [{ label: "237ml", price: 19 }],
  },
  {
    id: "mix-doce-limao",
    category: "mix",
    name: "Doce de Limão",
    image: "assets/products/mix-doce-limao.png",
    description: "Polpa de limão, creme de ninho e chantilly.",
    ingredients: ["Escolha o Sorvete", "Polpa de Limão", "Creme de Ninho", "Chantilly"],
    sizes: [{ label: "300ml", price: 19 }],
  },
  {
    id: "mix-banana-caramelada",
    category: "mix",
    name: "Banana Caramelada",
    image: "assets/products/mix-banana-caramelada.png",
    description: "Calda de banana caramelizada, crocantes de bolacha e chantilly.",
    ingredients: ["Escolha o Sorvete", "Calda de Banana Caramelizada", "Crocantes de Bolacha", "Chantilly"],
    sizes: [{ label: "300ml", price: 19 }],
  },
  {
    id: "mix-toffemelo",
    category: "mix",
    name: "Toffemelo",
    image: "assets/products/mix-toffemelo.png",
    description: "Calda de caramelo fudge, amendoim, pé de moleque e chantilly.",
    ingredients: ["Escolha o Sorvete", "Calda de Caramelo Fudge", "Amendoim", "Pé de Moleque", "Chantilly"],
    sizes: [{ label: "300ml", price: 19 }],
  },
  {
    id: "kids-bis",
    category: "kids",
    name: "Kids Bis",
    image: "assets/products/kids-bis.png",
    highlight: true,
    description: "Sorvete, casquinha, micro ball, Cereliz, disquete, coberturas e chantilly.",
    ingredients: ["Escolha o Sorvete", "Casquinha de Sorvete", "Micro Ball", "Cereliz", "Disquete", "Coberturas", "Chantilly"],
    sizes: [{ label: "Porção", price: 16 }],
  },
  {
    id: "kids-magic-shake",
    category: "kids",
    name: "Milk Shake Magic Kids",
    image: "assets/products/kids-magic-shake.png",
    highlight: true,
    description: "Sorvete de morango, céu azul, coberturas e micro disquetes.",
    ingredients: ["Sorvete de Morango", "Sorvete de Céu Azul", "Coberturas", "Micro Disquetes"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "kids-fantasia",
    category: "kids",
    name: "Cascão Fantasia Kids",
    image: "assets/products/kids-fantasia.png",
    description: "Sorvete, calda trufada de chocolate e micro disquetes.",
    ingredients: ["Escolha o Sorvete", "Calda Trufada de Chocolate", "Micro Disquetes"],
    sizes: [{ label: "Porção", price: 16 }],
  },
  {
    id: "kids-croc",
    category: "kids",
    name: "Casquinha Trufada Croc Kids",
    image: "assets/products/kids-croc.png",
    description: "Sorvete, calda trufada e microbool.",
    ingredients: ["Escolha o Sorvete", "Calda Trufada", "Microbool"],
    sizes: [{ label: "Porção", price: 10 }],
  },
  {
    id: "kids-sandey",
    category: "kids",
    name: "Sandey Kids",
    image: "assets/products/kids-sandey.png",
    description: "Sorvete, disquete, miniball, wafer e cobertura.",
    ingredients: ["Escolha o Sorvete", "Disquete", "Miniball", "Wafer", "Cobertura"],
    sizes: [{ label: "250ml", price: 16 }],
  },
  {
    id: "kids-choco",
    category: "kids",
    name: "Choco Kids",
    image: "assets/products/kids-choco.png",
    description: "Sorvete, calda quente, Ovomaltine, granulado, wafer e cobertura de chocolate.",
    ingredients: ["Escolha o Sorvete", "Calda Quente", "Ovomaltine", "Granulado", "Wafer", "Cobertura de Chocolate"],
    sizes: [{ label: "250ml", price: 16 }],
  },
  {
    id: "kids-ninho",
    category: "kids",
    name: "Ninho Kids",
    image: "assets/products/kids-ninho.png",
    description: "Sorvete, creme de ninho, Cereliz, flocos, wafer e chantilly.",
    ingredients: ["Escolha o Sorvete", "Creme de Ninho", "Cereliz", "Flocos", "Wafer", "Chantilly"],
    sizes: [{ label: "250ml", price: 16 }],
  },
  {
    id: "casquinha-tradicional",
    category: "casquinhas",
    name: "Casquinha Tradicional",
    image: "assets/products/casquinha-tradicional.png",
    description: "Sorvete e cobertura disponíveis do dia.",
    ingredients: ["Escolha o Sorvete", "Cobertura"],
    sizes: [{ label: "Unidade", price: 8 }],
  },
  {
    id: "casquinha-calda-quente",
    category: "casquinhas",
    name: "Casquinha Calda Quente",
    image: "assets/products/casquinha-calda-quente.png",
    description: "Sorvete com calda quente.",
    ingredients: ["Escolha o Sorvete", "Calda Quente"],
    sizes: [{ label: "Unidade", price: 9 }],
  },
  {
    id: "casquinha-trufada",
    category: "casquinhas",
    name: "Casquinha Trufada",
    image: "assets/products/casquinha-trufada.png",
    description: "Sorvete com calda trufada e granulado.",
    ingredients: ["Escolha o Sorvete", "Calda Trufada", "Granulado"],
    sizes: [{ label: "Unidade", price: 10 }],
  },
  {
    id: "cascao-tradicional",
    category: "casquinhas",
    name: "Cascão Tradicional",
    image: "assets/products/cascao-tradicional.png",
    description: "Sorvete, cobertura, flocos de arroz e wafer.",
    ingredients: ["Escolha o Sorvete", "Cobertura", "Flocos de Arroz", "Wafer"],
    sizes: [{ label: "Unidade", price: 11 }],
  },
  {
    id: "cascao-sonho-valsa",
    category: "casquinhas",
    name: "Cascão Sonho de Valsa",
    image: "assets/products/cascao-sonho-valsa.png",
    description: "Sorvete, calda de chocolate, fudge, Sonho de Valsa e wafer.",
    ingredients: ["Escolha o Sorvete", "Calda de Chocolate", "Fudge", "Sonho de Valsa", "Wafer"],
    sizes: [{ label: "Unidade", price: 16 }],
  },
  {
    id: "cascao-calda-quente",
    category: "casquinhas",
    name: "Cascão Calda Quente",
    image: "assets/products/cascao-calda-quente.png",
    description: "Sorvete, calda quente e chantilly.",
    ingredients: ["Escolha o Sorvete", "Calda Quente", "Chantilly"],
    sizes: [{ label: "Unidade", price: 14 }],
  },
  {
    id: "cascao-recheado",
    category: "casquinhas",
    name: "Cascão Recheado",
    image: "assets/products/cascao-recheado.png",
    description: "Sorvete, doce de leite e chantilly.",
    ingredients: ["Escolha o Sorvete", "Doce de Leite", "Chantilly"],
    sizes: [{ label: "Unidade", price: 16 }],
  },
  {
    id: "cascao-trufado",
    category: "casquinhas",
    name: "Cascão Trufado",
    image: "assets/products/cascao-trufado.png",
    description: "Sorvete, calda trufada e granulado.",
    ingredients: ["Escolha o Sorvete", "Calda Trufada", "Granulado"],
    sizes: [{ label: "Unidade", price: 14 }],
  },
  {
    id: "cascao-2-amores",
    category: "casquinhas",
    name: "Cascão 2 Amores",
    image: "assets/products/cascao-2-amores.png",
    description: "Sorvete, brigadeiro, recheio de ninho, calda trufada e granulado.",
    ingredients: ["Escolha o Sorvete", "Brigadeiro", "Recheio de Ninho", "Calda Trufada", "Granulado"],
    sizes: [{ label: "Unidade", price: 16 }],
  },
  {
    id: "cascao-ovomaltine",
    category: "casquinhas",
    name: "Cascão Ovomaltine",
    image: "assets/products/cascao-ovomaltine.png",
    description: "Sorvete, calda de chocolate, Ovomaltine, wafer e calda quente.",
    ingredients: ["Escolha o Sorvete", "Calda de Chocolate", "Ovomaltine", "Wafer", "Calda Quente"],
    sizes: [{ label: "Unidade", price: 14 }],
  },
  {
    id: "cascao-surpresinha",
    category: "casquinhas",
    name: "Cascão Surpresinha",
    image: "assets/products/cascao-surpresinha.png",
    description: "Sorvete, calda trufada, Ovomaltine, creme de ninho e Kinder.",
    ingredients: ["Escolha o Sorvete", "Calda Trufada", "Ovomaltine", "Creme de Ninho", "Chocolate Kinder"],
    sizes: [{ label: "Unidade", price: 25 }],
  },
  {
    id: "cascao-cajuzinho",
    category: "casquinhas",
    name: "Cascão Cajuzinho",
    image: "assets/products/cascao-cajuzinho.png",
    description: "Sorvete, castanha de caju, calda quente e calda trufada.",
    ingredients: ["Escolha o Sorvete", "Castanha de Caju", "Calda Quente", "Calda Trufada"],
    sizes: [{ label: "Unidade", price: 16 }],
  },
  {
    id: "cascao-animadinho",
    category: "casquinhas",
    name: "Cascão Animadinho",
    image: "assets/products/cascao-animadinho.png",
    description: "Sorvete, brigadeiro de paçoca e amendoim.",
    ingredients: ["Escolha o Sorvete", "Brigadeiro de Paçoca", "Amendoim"],
    sizes: [{ label: "Unidade", price: 16 }],
  },
  {
    id: "cascao-maltella",
    category: "casquinhas",
    name: "Cascão Maltella",
    image: "assets/products/cascao-maltella.png",
    description: "Sorvete, Nutella e Ovomaltine.",
    ingredients: ["Escolha o Sorvete", "Nutella", "Ovomaltine"],
    sizes: [{ label: "Unidade", price: 14 }],
  },
  {
    id: "milkshake-tradicional",
    category: "milkshakes",
    name: "Milk Shake Tradicional",
    image: "assets/products/milkshake-tradicional.png",
    description: "Sorvete, cobertura, flocos de arroz, granulado e Ovomaltine.",
    ingredients: ["Escolha o Sorvete", "Cobertura", "Flocos de Arroz", "Granulado", "Ovomaltine"],
    sizes: [
      { label: "300ml", price: 14 },
      { label: "400ml", price: 16 },
      { label: "500ml", price: 18 },
    ],
  },
  {
    id: "milkshake-acai-especial",
    category: "milkshakes",
    name: "Milk Shake Especial de Açaí",
    image: "assets/products/milkshake-acai.png",
    description: "Açaí ou açaí e leitinho, cobertura, Ovomaltine ou leite em pó.",
    ingredients: ["Açaí", "Leitinho", "Cobertura", "Ovomaltine", "Leite em Pó"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-pistache",
    category: "milkshakes",
    name: "Milk Shake Pistache",
    image: "assets/products/milkshake-pistache.png",
    description: "Sorvete de pistache com pistaches crocantes.",
    ingredients: ["Sorvete de Pistache", "Pistaches Crocantes"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-banana",
    category: "milkshakes",
    name: "Milk Shake Banana",
    image: "assets/products/milkshake-banana.png",
    description: "Sorvete de banana com calda de banana caramelizada.",
    ingredients: ["Sorvete de Banana", "Calda de Banana Caramelizada"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-maracuja",
    category: "milkshakes",
    name: "Milk Shake Maracujá",
    image: "assets/products/milkshake-maracuja.png",
    description: "Sorvete de maracujá com polpa de maracujá.",
    ingredients: ["Sorvete de Maracujá", "Polpa de Maracujá"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-menta",
    category: "milkshakes",
    name: "Milk Shake Menta",
    image: "assets/products/milkshake-menta.png",
    description: "Sorvete de menta com Ovomaltine.",
    ingredients: ["Sorvete de Menta", "Ovomaltine"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-capuccino",
    category: "milkshakes",
    name: "Milk Shake Capuccino",
    image: "assets/products/milkshake-capuccino.png",
    description: "Sorvete de capuccino, cobertura e Ovomaltine.",
    ingredients: ["Sorvete de Capuccino", "Cobertura", "Ovomaltine"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-flokito",
    category: "milkshakes",
    name: "Milk Shake Flokito",
    image: "assets/products/milkshake-flokito.png",
    description: "Sorvete, cobertura, raspas de chocolate e flocos de arroz.",
    ingredients: ["Escolha o Sorvete", "Cobertura", "Raspas de Chocolate", "Flocos de Arroz"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-leite-ninho",
    category: "milkshakes",
    name: "Milk Shake Leite Ninho",
    image: "assets/products/milkshake-leite-ninho.png",
    description: "Sorvete neutro com leite em pó Ninho.",
    ingredients: ["Sorvete Neutro", "Leite em Pó Ninho"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-pacoca",
    category: "milkshakes",
    name: "Milk Shake Paçoca",
    image: "assets/products/milkshake-pacoca.png",
    description: "Sorvete neutro com paçoca.",
    ingredients: ["Sorvete Neutro", "Paçoca"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-dorio",
    category: "milkshakes",
    name: "Milk Shake Dório",
    image: "assets/products/milkshake-dorio.png",
    description: "Sorvete neutro, crocantes de biscoito e doce de leite.",
    ingredients: ["Sorvete Neutro", "Crocantes de Biscoito", "Doce de Leite"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-ovomaltine",
    category: "milkshakes",
    name: "Milk Shake Ovomaltine",
    image: "assets/products/milkshake-ovomaltine.png",
    description: "Sorvete neutro, cobertura e Ovomaltine.",
    ingredients: ["Sorvete Neutro", "Cobertura", "Ovomaltine"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milkshake-chocotine",
    category: "milkshakes",
    name: "Milk Shake Chocotine",
    image: "assets/products/milkshake-chocotine.png",
    description: "Sorvete de chocolate, cobertura e Ovomaltine.",
    ingredients: ["Sorvete de Chocolate", "Cobertura", "Ovomaltine"],
    sizes: [
      { label: "300ml", price: 17 },
      { label: "400ml", price: 19 },
      { label: "500ml", price: 21 },
    ],
  },
  {
    id: "milk-popping",
    category: "milkshakes",
    name: "Milk Popping",
    image: "assets/products/milk-popping.png",
    description: "Milk shake com bolinhas popping à escolha.",
    ingredients: ["Escolha o Sorvete", "Escolha a Popping"],
    sizes: [
      { label: "300ml", price: 19 },
      { label: "400ml", price: 21 },
      { label: "500ml", price: 23 },
    ],
  },
  {
    id: "milkshake-brownitella",
    category: "milkshakes",
    name: "Milk Shake Brownitella",
    image: "assets/products/milkshake-brownitella.png",
    highlight: true,
    description: "Sorvete neutro, brownie de chocolate, Nutella e chantilly.",
    ingredients: ["Sorvete Neutro", "Brownie de Chocolate", "Nutella", "Chantilly"],
    sizes: [{ label: "360ml", price: 27 }],
  },
  {
    id: "milkshake-nutininho",
    category: "milkshakes",
    name: "Milk Shake Nutininho",
    image: "assets/products/milkshake-nutininho.png",
    description: "Sorvete neutro, Nutella, Ovomaltine e leite em pó.",
    ingredients: ["Sorvete Neutro", "Nutella", "Ovomaltine", "Leite em Pó"],
    sizes: [{ label: "350ml", price: 22 }],
  },
  {
    id: "copo-100",
    category: "copos",
    name: "Copo 100ml",
    image: "assets/products/copo-100.png",
    description: "Sorvete e cobertura disponíveis do dia.",
    ingredients: ["Escolha o Sorvete", "Escolha a Cobertura"],
    sizes: [{ label: "100ml", price: 8 }],
  },
  {
    id: "copo-150",
    category: "copos",
    name: "Copo 150ml",
    image: "assets/products/copo-150.png",
    description: "Sorvete, cobertura, flocos de arroz e wafer.",
    ingredients: ["Escolha o Sorvete", "Escolha a Cobertura", "Flocos de Arroz", "Wafer"],
    sizes: [{ label: "150ml", price: 11 }],
  },
  {
    id: "copo-300",
    category: "copos",
    name: "Copo",
    image: "assets/products/copo-300.png",
    description: "Sorvete e cobertura disponíveis do dia.",
    ingredients: ["Escolha o Sorvete", "Escolha a Cobertura"],
    sizes: [
      { label: "300ml", price: 16 },
      { label: "400ml", price: 18 },
      { label: "500ml", price: 20 },
    ],
  },
  {
    id: "pote-acai",
    category: "copos",
    name: "Pote de Açaí Cremoso",
    image: "assets/products/pote-acai.png",
    description: "Pote de 1 litro de açaí cremoso.",
    ingredients: ["Açaí Cremoso"],
    sizes: [{ label: "1 litro", price: 43 }],
  },
  {
    id: "pote-sorvete",
    category: "copos",
    name: "Pote de Sorvete",
    image: "assets/products/pote-sorvete.png",
    description: "Escolha de 2 a 8 sabores disponíveis do dia.",
    ingredients: ["Escolha de 2 a 8 sabores"],
    sizes: [{ label: "1 litro", price: 40 }],
  },
];

const PRODUCT_ASSET_ROOT = "assets/quero-bis/products-web/";
const productImageMap = {
  "acai-tradicional.png": "p03-02-x6.png",
  "acai-light.png": "p03-03-x8.png",
  "acai-kids.png": "p08-09-x48.png",
  "acai-patrao.png": "p03-05-x12.png",
  "acai-floresta.png": "p03-06-x14.png",
  "acai-chocolegal.png": "p03-07-x16.png",
  "acai-mix-copo.png": "p04-02-x6.png",
  "vitamina-acai.png": "p04-03-x8.png",
  "garrafinha-pede-bis.png": "p04-07-x66.png",
  "taca-ferrero.png": "p05-02-x10.png",
  "taca-kinder.png": "p05-03-x12.png",
  "taca-supremo-coffee.png": "p05-04-x14.png",
  "taca-enamorados.png": "p05-05-x16.png",
  "taca-rafaello.png": "p05-06-x18.png",
  "taca-pudim.png": "p05-07-x20.png",
  "taca-nuleite.png": "p05-08-x35.png",
  "taca-sensacao.png": "p05-09-x37.png",
  "taca-banoffe.png": "p06-02-x10.png",
  "taca-big-sandey.png": "p06-03-x12.png",
  "taca-ostentacao.png": "p06-04-x14.png",
  "taca-casadinho-acai.png": "p06-05-x16.png",
  "taca-salada-frutas.png": "p06-06-x19.png",
  "mix-brownie-sorvete.png": "p07-02-x6.png",
  "mix-canecake-kinder.png": "p07-03-x8.png",
  "mix-copo-felicidade.png": "p07-04-x10.png",
  "mix-banana-split.png": "p07-05-x18.png",
  "mix-moranguito.png": "p07-06-x20.png",
  "mix-ovomaltine-nutella.png": "p07-07-x22.png",
  "mix-acaitella-card.png": "p07-08-x37.png",
  "mix-doce-limao.png": "p07-09-x42.png",
  "mix-banana-caramelada.png": "p07-10-x47.png",
  "mix-toffemelo.png": "p07-11-x54.png",
  "kids-bis.png": "p08-02-x15.png",
  "kids-magic-shake.png": "p08-03-x17.png",
  "kids-fantasia.png": "p08-04-x22.png",
  "kids-croc.png": "p08-05-x25.png",
  "kids-sandey.png": "p08-06-x28.png",
  "kids-choco.png": "p08-07-x31.png",
  "kids-ninho.png": "p08-08-x39.png",
  "casquinha-tradicional.png": "p09-02-x6.png",
  "casquinha-calda-quente.png": "p09-03-x8.png",
  "casquinha-trufada.png": "p09-04-x10.png",
  "cascao-tradicional.png": "p09-05-x12.png",
  "cascao-sonho-valsa.png": "p09-06-x14.png",
  "cascao-calda-quente.png": "p09-07-x16.png",
  "cascao-recheado.png": "p09-08-x18.png",
  "cascao-trufado.png": "p09-09-x20.png",
  "cascao-2-amores.png": "p09-11-x24.png",
  "cascao-ovomaltine.png": "p09-12-x54.png",
  "cascao-surpresinha.png": "p09-13-x58.png",
  "cascao-cajuzinho.png": "p09-15-x66.png",
  "cascao-animadinho.png": "p09-06-x14.png",
  "cascao-maltella.png": "p09-12-x54.png",
  "milkshake-tradicional.png": "p10-02-x6.png",
  "milkshake-acai.png": "p10-03-x8.png",
  "milkshake-pistache.png": "p10-05-x12.png",
  "milkshake-banana.png": "p10-06-x14.png",
  "milkshake-maracuja.png": "p10-07-x16.png",
  "milkshake-menta.png": "p10-08-x18.png",
  "milkshake-capuccino.png": "p10-09-x20.png",
  "milkshake-flokito.png": "p10-10-x22.png",
  "milkshake-leite-ninho.png": "p10-11-x24.png",
  "milkshake-pacoca.png": "p10-12-x26.png",
  "milkshake-dorio.png": "p10-13-x28.png",
  "milkshake-ovomaltine.png": "p10-14-x30.png",
  "milkshake-chocotine.png": "p10-04-x10.png",
  "milk-popping.png": "p11-02-x6.png",
  "milkshake-brownitella.png": "p11-04-x10.png",
  "milkshake-nutininho.png": "p11-09-x25.png",
  "copo-100.png": "p11-05-x13.png",
  "copo-150.png": "p11-06-x15.png",
  "copo-300.png": "p11-07-x17.png",
  "pote-acai.png": "p11-10-x27.png",
  "pote-sorvete.png": "p11-11-x29.png",
};

products.forEach((product) => {
  const sourceName = product.image.split("/").pop();
  if (productImageMap[sourceName]) {
    product.image = `${PRODUCT_ASSET_ROOT}${productImageMap[sourceName].replace(".png", ".webp")}`;
  }
});

const categoryVisuals = {
  todos: { image: "p01-03-x9.webp", icon: "★" },
  acai: { image: "p03-02-x6.webp", icon: "◌" },
  tacas: { image: "p05-07-x20.webp", icon: "♢" },
  mix: { image: "p07-10-x47.webp", icon: "+" },
  kids: { image: "p08-03-x17.webp", icon: "☺" },
  casquinhas: { image: "p09-05-x12.webp", icon: "▽" },
  milkshakes: { image: "p11-04-x10.webp", icon: "▯" },
  copos: { image: "p11-07-x17.webp", icon: "□" },
};

const state = {
  activeCategory: "todos",
  search: "",
  cart: [],
  current: null,
};

const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const dom = {
  categoryScroller: document.querySelector("#categoryScroller"),
  featuredRail: document.querySelector("#featuredRail"),
  productList: document.querySelector("#productList"),
  activeCategoryLabel: document.querySelector("#activeCategoryLabel"),
  productCountTitle: document.querySelector("#productCountTitle"),
  searchInput: document.querySelector("#searchInput"),
  productBackdrop: document.querySelector("#productBackdrop"),
  productSheet: document.querySelector("#productSheet"),
  productSheetContent: document.querySelector("#productSheetContent"),
  cartBackdrop: document.querySelector("#cartBackdrop"),
  cartSheet: document.querySelector("#cartSheet"),
  cartItems: document.querySelector("#cartItems"),
  cartTotal: document.querySelector("#cartTotal"),
  topCartCount: document.querySelector("#topCartCount"),
  floatingCartCount: document.querySelector("#floatingCartCount"),
  checkoutButton: document.querySelector("#checkoutButton"),
  customerName: document.querySelector("#customerName"),
  deliveryMode: document.querySelector("#deliveryMode"),
  orderNote: document.querySelector("#orderNote"),
};

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatPrice(value) {
  return money.format(value);
}

function productPrice(product) {
  return product.sizes[0].price;
}

function productSize(product) {
  return product.sizes[0].label;
}

function categoryLabel(categoryId) {
  return categories.find((category) => category.id === categoryId)?.label || "Tudo";
}

function ingredientsPreview(product, limit = 4) {
  return product.ingredients.slice(0, limit).join(", ");
}

function selectedAddonsTotal() {
  if (!state.current) return 0;
  return [...state.current.addons].reduce((sum, addonId) => {
    const addon = addons.find((item) => item.id === addonId);
    return sum + (addon?.price || 0);
  }, 0);
}

function currentUnitPrice() {
  const product = state.current?.product;
  if (!product) return 0;
  const size = product.sizes[state.current.sizeIndex] || product.sizes[0];
  return size.price + selectedAddonsTotal();
}

function currentTotal() {
  return currentUnitPrice() * (state.current?.qty || 1);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.total, 0);
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCategories() {
  dom.categoryScroller.innerHTML = categories
    .map(
      (category) => {
        const visual = categoryVisuals[category.id] || categoryVisuals.todos;
        return `
        <button
          class="category-button ${state.activeCategory === category.id ? "is-active" : ""}"
          type="button"
          data-category="${category.id}"
        >
          <img class="category-thumb" src="${PRODUCT_ASSET_ROOT}${esc(visual.image)}" alt="" loading="lazy" />
          <span class="category-icon" aria-hidden="true">${esc(visual.icon)}</span>
          <span class="category-label">${esc(category.label)}</span>
        </button>
      `;
      },
    )
    .join("");
}

function renderFeatured() {
  const highlighted = products.filter((product) => product.highlight).slice(0, 10);
  dom.featuredRail.innerHTML = highlighted
    .map(
      (product) => `
        <article class="featured-card reveal-card">
          <div class="featured-media">
            <img src="${esc(product.image)}" alt="${esc(product.name)}" loading="lazy" />
          </div>
          <div class="featured-card-content">
            <h3>${esc(product.name)}</h3>
            <p>${esc(product.description)}</p>
            <div class="price-row">
              <span class="price-sticker">
                <small>${esc(productSize(product))}</small>
                ${formatPrice(productPrice(product))}
              </span>
              <button class="customize-button" type="button" data-product="${esc(product.id)}">
                Personalizar
              </button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function filteredProducts() {
  return products.filter((product) => {
    const categoryMatch = state.activeCategory === "todos" || product.category === state.activeCategory;
    const query = state.search.trim().toLowerCase();
    const searchMatch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.ingredients.join(" ").toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
}

function renderProducts() {
  const visibleProducts = filteredProducts();
  const categoryText = state.activeCategory === "todos" ? "Todos os produtos" : categoryLabel(state.activeCategory);
  dom.activeCategoryLabel.textContent = categoryText;
  dom.productCountTitle.textContent = `${visibleProducts.length} opções para pedir`;

  if (!visibleProducts.length) {
    dom.productList.innerHTML = `
      <div class="empty-cart">
        <h3>Nada encontrado</h3>
        <p>Tente buscar por açaí, taça, cascão ou milk shake.</p>
      </div>
    `;
    return;
  }

  dom.productList.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card reveal-card">
          <div class="product-media">
            <img src="${esc(product.image)}" alt="${esc(product.name)}" loading="lazy" />
          </div>
          <div class="product-content">
            <div class="product-meta">
              <span class="product-pill">${esc(categoryLabel(product.category))}</span>
              <span class="product-pill">${esc(productSize(product))}</span>
            </div>
            <h3>${esc(product.name)}</h3>
            <p>${esc(ingredientsPreview(product))}</p>
            <div class="price-row">
              <span class="price-sticker">
                <small>a partir de</small>
                ${formatPrice(productPrice(product))}
              </span>
              <button class="customize-button" type="button" data-product="${esc(product.id)}">
                Pedir
              </button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
  animateCards();
}

function renderAll() {
  renderCategories();
  renderFeatured();
  renderProducts();
  renderCart();
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  state.current = {
    product,
    sizeIndex: 0,
    qty: 1,
    flavor: flavors[0],
    addons: new Set(),
    removed: new Set(),
    note: "",
  };
  renderProductSheet();
  dom.productBackdrop.hidden = false;
  dom.productSheet.hidden = false;
  document.body.style.overflow = "hidden";

  if (window.gsap) {
    gsap.fromTo(
      dom.productSheet,
      { y: "100%" },
      { y: 0, duration: 0.55, ease: "power4.out" },
    );
  }
}

function closeProduct() {
  dom.productBackdrop.hidden = true;
  dom.productSheet.hidden = true;
  state.current = null;
  if (dom.cartSheet.hidden) document.body.style.overflow = "";
}

function removableIngredients(product) {
  return product.ingredients.filter((ingredient) => {
    const lower = ingredient.toLowerCase();
    return !lower.includes("escolha") && !lower.includes("até") && !lower.includes("disponíveis");
  });
}

function renderProductSheet() {
  const current = state.current;
  if (!current) return;
  const { product } = current;
  const size = product.sizes[current.sizeIndex] || product.sizes[0];
  const removeOptions = removableIngredients(product);
  const hasFlavorChoice =
    product.ingredients.some((ingredient) => ingredient.toLowerCase().includes("sorvete")) ||
    ["tacas", "milkshakes", "casquinhas", "kids", "copos"].includes(product.category);

  dom.productSheetContent.innerHTML = `
    <div class="sheet-product-hero">
      <div class="sheet-product-image">
        <img src="${esc(product.image)}" alt="${esc(product.name)}" />
      </div>
      <div class="sheet-product-copy">
        <p class="eyebrow">${esc(categoryLabel(product.category))}</p>
        <h2 id="productSheetTitle">${esc(product.name)}</h2>
        <p>${esc(product.description)}</p>
      </div>
    </div>

    <div class="option-block">
      <h3>Tamanho</h3>
      <div class="size-options">
        ${product.sizes
          .map(
            (item, index) => `
              <button
                class="size-chip ${index === current.sizeIndex ? "is-selected" : ""}"
                type="button"
                data-size-index="${index}"
              >
                ${esc(item.label)} · ${formatPrice(item.price)}
              </button>
            `,
          )
          .join("")}
      </div>
    </div>

    <div class="option-block quantity-row">
      <h3>Quantidade</h3>
      <div class="stepper">
        <button type="button" data-qty="-1" aria-label="Diminuir quantidade">-</button>
        <span>${current.qty}</span>
        <button type="button" data-qty="1" aria-label="Aumentar quantidade">+</button>
      </div>
    </div>

    ${
      hasFlavorChoice
        ? `
          <div class="option-block">
            <h3>Sabor</h3>
            <select class="option-select" id="flavorSelect">
              ${flavors
                .map(
                  (flavor) => `
                    <option value="${esc(flavor)}" ${flavor === current.flavor ? "selected" : ""}>
                      ${esc(flavor)}
                    </option>
                  `,
                )
                .join("")}
            </select>
          </div>
        `
        : ""
    }

    <div class="option-block">
      <h3>Adicionar algo</h3>
      <div class="chip-grid">
        ${addons
          .map(
            (addon) => `
              <button
                class="option-chip ${current.addons.has(addon.id) ? "is-selected" : ""}"
                type="button"
                data-addon="${esc(addon.id)}"
              >
                ${esc(addon.label)} +${formatPrice(addon.price)}
              </button>
            `,
          )
          .join("")}
      </div>
    </div>

    ${
      removeOptions.length
        ? `
          <div class="option-block">
            <h3>Remover ingrediente</h3>
            <div class="remove-grid">
              ${removeOptions
                .map(
                  (ingredient) => `
                    <button
                      class="remove-chip ${current.removed.has(ingredient) ? "is-selected" : ""}"
                      type="button"
                      data-remove="${esc(ingredient)}"
                    >
                      Sem ${esc(ingredient)}
                    </button>
                  `,
                )
                .join("")}
            </div>
          </div>
        `
        : ""
    }

    <div class="option-block">
      <h3>Observação do item</h3>
      <textarea class="notes-field" id="itemNote" rows="3" placeholder="Ex: pouca calda, separar cobertura">${esc(current.note)}</textarea>
    </div>

    <div class="sheet-total">
      <span>${esc(size.label)}</span>
      <strong>${formatPrice(currentTotal())}</strong>
      <button class="add-cart-button" type="button" data-add-cart>
        Adicionar ao carrinho
      </button>
    </div>
  `;
}

function addCurrentToCart() {
  const current = state.current;
  if (!current) return;
  const product = current.product;
  const size = product.sizes[current.sizeIndex] || product.sizes[0];
  const selectedAddons = [...current.addons].map((addonId) => addons.find((item) => item.id === addonId));
  const item = {
    key: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    productId: product.id,
    name: product.name,
    image: product.image,
    size: size.label,
    basePrice: size.price,
    unitPrice: currentUnitPrice(),
    total: currentTotal(),
    qty: current.qty,
    flavor: current.flavor,
    addons: selectedAddons.filter(Boolean),
    removed: [...current.removed],
    note: current.note.trim(),
  };
  state.cart.push(item);
  closeProduct();
  renderCart();
  pulseCartButton();
}

function updateCartItem(key, delta) {
  const item = state.cart.find((entry) => entry.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  item.total = item.unitPrice * item.qty;
  renderCart();
}

function removeCartItem(key) {
  state.cart = state.cart.filter((item) => item.key !== key);
  renderCart();
}

function cartItemSummary(item) {
  const parts = [item.size];
  if (item.flavor && item.flavor !== "Disponível do dia") parts.push(`Sabor: ${item.flavor}`);
  if (item.addons.length) parts.push(`Adicionais: ${item.addons.map((addon) => addon.label).join(", ")}`);
  if (item.removed.length) parts.push(`Remover: ${item.removed.join(", ")}`);
  if (item.note) parts.push(`Obs: ${item.note}`);
  return parts.join(" · ");
}

function renderCart() {
  if (dom.topCartCount) dom.topCartCount.textContent = cartCount();
  dom.floatingCartCount.textContent = cartCount();
  dom.cartTotal.textContent = formatPrice(cartTotal());

  if (!state.cart.length) {
    dom.cartItems.innerHTML = `
      <div class="empty-cart">
        <h3>Seu carrinho está vazio</h3>
        <p>Escolha um produto, personalize e adicione ao pedido.</p>
      </div>
    `;
  } else {
    dom.cartItems.innerHTML = state.cart
      .map(
        (item) => `
          <article class="cart-item">
            <img src="${esc(item.image)}" alt="${esc(item.name)}" />
            <div>
              <h3>${esc(item.name)}</h3>
              <p>${esc(cartItemSummary(item))}</p>
              <div class="cart-item-actions">
                <div class="stepper">
                  <button type="button" data-cart-delta="-1" data-cart-key="${esc(item.key)}" aria-label="Diminuir item">-</button>
                  <span>${item.qty}</span>
                  <button type="button" data-cart-delta="1" data-cart-key="${esc(item.key)}" aria-label="Aumentar item">+</button>
                </div>
                <strong>${formatPrice(item.total)}</strong>
                <button class="remove-item" type="button" data-remove-cart="${esc(item.key)}">Remover</button>
              </div>
            </div>
          </article>
        `,
      )
      .join("");
  }

  updateCheckoutLink();
}

function updateCheckoutLink() {
  const name = dom.customerName.value.trim();
  const mode = dom.deliveryMode.value;
  const note = dom.orderNote.value.trim();
  const lines = [
    "Olá! Quero fazer um pedido na Quero Bis:",
    "",
    ...state.cart.flatMap((item, index) => [
      `${index + 1}. ${item.qty}x ${item.name}`,
      `   Tamanho: ${item.size}`,
      item.flavor ? `   Sabor: ${item.flavor}` : "",
      item.addons.length ? `   Adicionais: ${item.addons.map((addon) => addon.label).join(", ")}` : "",
      item.removed.length ? `   Remover: ${item.removed.join(", ")}` : "",
      item.note ? `   Obs do item: ${item.note}` : "",
      `   Valor: ${formatPrice(item.total)}`,
      "",
    ]),
    `Total: ${formatPrice(cartTotal())}`,
    name ? `Nome: ${name}` : "",
    `Forma: ${mode}`,
    note ? `Observação: ${note}` : "",
  ].filter(Boolean);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  dom.checkoutButton.href = state.cart.length ? url : "#";
  dom.checkoutButton.setAttribute("aria-disabled", state.cart.length ? "false" : "true");
}

function openCart() {
  renderCart();
  dom.cartBackdrop.hidden = false;
  dom.cartSheet.hidden = false;
  document.body.style.overflow = "hidden";

  if (window.gsap) {
    gsap.fromTo(dom.cartSheet, { y: "100%" }, { y: 0, duration: 0.52, ease: "power4.out" });
  }
}

function closeCart() {
  dom.cartBackdrop.hidden = true;
  dom.cartSheet.hidden = true;
  if (dom.productSheet.hidden) document.body.style.overflow = "";
}

function pulseCartButton() {
  const button = document.querySelector(".floating-whatsapp");
  if (window.gsap && button) {
    gsap.fromTo(button, { scale: 0.96 }, { scale: 1, duration: 0.5, ease: "back.out(2)" });
  }
}

function setupEvents() {
  dom.categoryScroller.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.activeCategory = button.dataset.category;
    renderCategories();
    renderProducts();
    document.querySelector("#produtos").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.addEventListener("click", (event) => {
    const productButton = event.target.closest("[data-product]");
    if (productButton) openProduct(productButton.dataset.product);

    const builderButton = event.target.closest("[data-builder-product]");
    if (builderButton) openProduct(builderButton.dataset.builderProduct);

    if (event.target.closest("[data-open-cart]")) openCart();
    if (event.target.closest("[data-close-product]") || event.target === dom.productBackdrop) closeProduct();
    if (event.target.closest("[data-close-cart]") || event.target === dom.cartBackdrop) closeCart();
  });

  dom.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });

  dom.productSheet.addEventListener("click", (event) => {
    const current = state.current;
    if (!current) return;

    const sizeButton = event.target.closest("[data-size-index]");
    if (sizeButton) {
      current.sizeIndex = Number(sizeButton.dataset.sizeIndex);
      renderProductSheet();
      return;
    }

    const qtyButton = event.target.closest("[data-qty]");
    if (qtyButton) {
      current.qty = Math.max(1, current.qty + Number(qtyButton.dataset.qty));
      renderProductSheet();
      return;
    }

    const addonButton = event.target.closest("[data-addon]");
    if (addonButton) {
      const id = addonButton.dataset.addon;
      if (current.addons.has(id)) current.addons.delete(id);
      else current.addons.add(id);
      renderProductSheet();
      return;
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      const ingredient = removeButton.dataset.remove;
      if (current.removed.has(ingredient)) current.removed.delete(ingredient);
      else current.removed.add(ingredient);
      renderProductSheet();
      return;
    }

    if (event.target.closest("[data-add-cart]")) addCurrentToCart();
  });

  dom.productSheet.addEventListener("change", (event) => {
    if (!state.current) return;
    if (event.target.id === "flavorSelect") {
      state.current.flavor = event.target.value;
      renderProductSheet();
    }
  });

  dom.productSheet.addEventListener("input", (event) => {
    if (!state.current) return;
    if (event.target.id === "itemNote") state.current.note = event.target.value;
  });

  dom.cartSheet.addEventListener("click", (event) => {
    const deltaButton = event.target.closest("[data-cart-delta]");
    if (deltaButton) {
      updateCartItem(deltaButton.dataset.cartKey, Number(deltaButton.dataset.cartDelta));
      return;
    }

    const removeButton = event.target.closest("[data-remove-cart]");
    if (removeButton) removeCartItem(removeButton.dataset.removeCart);
  });

  [dom.customerName, dom.deliveryMode, dom.orderNote].forEach((input) => {
    input.addEventListener("input", updateCheckoutLink);
    input.addEventListener("change", updateCheckoutLink);
  });

  dom.checkoutButton.addEventListener("click", (event) => {
    if (!state.cart.length) event.preventDefault();
  });
}

function setupHeroMotion() {
  const heroStage = document.querySelector(".hero-stage");
  const hero = document.querySelector(".hero");
  if (!heroStage || !hero) return;

  const setMotion = (x, y) => {
    heroStage.style.setProperty("--motion-x", x.toFixed(2));
    heroStage.style.setProperty("--motion-y", y.toFixed(2));
  };

  window.addEventListener(
    "scroll",
    () => {
      const progress = Math.min(1, window.scrollY / Math.max(1, hero.offsetHeight));
      setMotion(progress * -12, progress * 34);
    },
    { passive: true },
  );

  hero.addEventListener(
    "pointermove",
    (event) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 16;
      setMotion(x, y);
    },
    { passive: true },
  );
}

function setupCanvas() {
  const canvas = document.querySelector("#sprinkleCanvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const context = canvas.getContext("2d");
  const colors = ["#fff200", "#ff38a7", "#32e4ef", "#ffffff"];
  let width = 0;
  let height = 0;
  let particles = [];

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: 42 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: 6 + Math.random() * 14,
      speed: 0.18 + Math.random() * 0.7,
      drift: -0.22 + Math.random() * 0.44,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI,
    }));
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.y += particle.speed;
      particle.x += particle.drift;
      particle.rot += 0.012;
      if (particle.y > height + 20) particle.y = -20;
      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;

      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.rot);
      context.strokeStyle = particle.color;
      context.lineWidth = 3;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(-particle.length / 2, 0);
      context.lineTo(particle.length / 2, 0);
      context.stroke();
      context.restore();
    });
    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });
  draw();
}

function setupGsap() {
  if (!window.gsap) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  gsap.from(".menu-orb, .delivery-pill", { y: -12, opacity: 0, duration: 0.55, ease: "power3.out", stagger: 0.05 });
  gsap.from(".hero-content > *", {
    y: 24,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08,
    delay: 0.18,
    ease: "power3.out",
  });
  gsap.from(".hero-product", {
    scale: 0.78,
    opacity: 0,
    duration: 0.9,
    stagger: 0.08,
    ease: "power4.out",
  });
  gsap.from(".hero-status span", {
    y: 12,
    opacity: 0,
    duration: 0.55,
    stagger: 0.05,
    delay: 0.38,
    ease: "power3.out",
  });

  if (window.ScrollTrigger) {
    gsap.to(".hero-product-cone", {
      y: 46,
      rotate: -2,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.7,
      },
    });
    gsap.to(".hero-product-shake", {
      y: 72,
      rotate: 1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.7,
      },
    });
    gsap.to(".builder-bowl img", {
      y: -24,
      scale: 1.06,
      scrollTrigger: {
        trigger: ".builder-section",
        start: "top 92%",
        end: "bottom 40%",
        scrub: 0.8,
      },
    });
  }

  animateCards();
}

function animateCards() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.utils.toArray(".reveal-card").forEach((card) => {
    if (card.dataset.animated) return;
    card.dataset.animated = "true";
    gsap.fromTo(
      card,
      { y: 28, opacity: 0.01, scale: 0.965, filter: "saturate(0.8)" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "saturate(1)",
        duration: 0.62,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 92%",
          once: true,
        },
      },
    );
  });
}

renderAll();
setupEvents();
setupHeroMotion();
setupCanvas();
setupGsap();
