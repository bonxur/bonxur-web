export type CropDifficulty = "Fácil" | "Media";

export type Crop = {
  slug: string;
  name: string;
  type: "Hoja" | "Aromática" | "Fruto";
  image: string;
  summary: string;
  description: string;
  difficulty: CropDifficulty;
  growthTime: string;
  cycles: string;
  light: string;
  tips: string;
  towerRecommendation: string;
  use: string;
};

export const cropCatalog: Crop[] = [
  {
    slug: "lechuga",
    name: "Lechuga",
    type: "Hoja",
    image: "/images/cultivos/lechuga.jpg",
    summary: "Rápida, fresca y muy agradecida para iniciarse.",
    description:
      "Una de las opciones más fiables para hidroponía vertical por su ciclo corto y su tamaño contenido.",
    difficulty: "Fácil",
    growthTime: "35–50 días",
    cycles: "8–10 ciclos/año",
    light: "Luz media",
    tips: "Escalona las plantaciones cada una o dos semanas y evita el calor excesivo.",
    towerRecommendation: "Funciona bien en zonas medias y altas con buena ventilación.",
    use: "Principiante · autoconsumo · restaurante",
  },
  {
    slug: "espinaca",
    name: "Espinaca",
    type: "Hoja",
    image: "/images/cultivos/espinaca.jpg",
    summary: "Hoja tierna para ciclos frescos y cosecha frecuente.",
    description:
      "Crece mejor con temperaturas suaves y permite recoger hojas jóvenes de forma escalonada.",
    difficulty: "Media",
    growthTime: "40–55 días",
    cycles: "6–8 ciclos/año",
    light: "Luz media",
    tips: "Mantén una temperatura moderada y cosecha las hojas exteriores primero.",
    towerRecommendation: "Reserva posiciones con luz estable y sin exceso de temperatura.",
    use: "Autoconsumo · restaurante · comercial",
  },
  {
    slug: "acelga",
    name: "Acelga",
    type: "Hoja",
    image: "/images/cultivos/acelga.jpg",
    summary: "Productiva, resistente y apta para cosecha escalonada.",
    description:
      "Una planta generosa que sigue produciendo al retirar únicamente las hojas exteriores.",
    difficulty: "Fácil",
    growthTime: "45–60 días",
    cycles: "Cosecha continua",
    light: "Luz media",
    tips: "Deja espacio alrededor de las hojas maduras para mejorar la ventilación.",
    towerRecommendation: "Colócala en posiciones bajas o medias por el tamaño de sus hojas.",
    use: "Principiante · autoconsumo · comercial",
  },
  {
    slug: "kale",
    name: "Kale",
    type: "Hoja",
    image: "/images/cultivos/kale.jpg",
    summary: "Resistente y productiva mediante cortes sucesivos.",
    description:
      "Su porte y duración permiten mantener plantas productivas durante varias cosechas.",
    difficulty: "Media",
    growthTime: "55–70 días",
    cycles: "Cosecha escalonada",
    light: "Luz media-alta",
    tips: "Cosecha primero las hojas exteriores y conserva activo el centro de crecimiento.",
    towerRecommendation: "Usa posiciones inferiores para que las hojas tengan más espacio.",
    use: "Autoconsumo · restaurante · comercial",
  },
  {
    slug: "canonigos",
    name: "Canónigos",
    type: "Hoja",
    image: "/images/cultivos/canonigos.jpg",
    summary: "Hojas suaves y compactas para ensaladas de calidad.",
    description:
      "Un cultivo pequeño que permite aprovechar bien los alojamientos de la torre.",
    difficulty: "Media",
    growthTime: "45–60 días",
    cycles: "5–7 ciclos/año",
    light: "Luz media",
    tips: "Evita temperaturas altas y mantén una humedad estable sin encharcar.",
    towerRecommendation: "Ideal para posiciones medias con luz suave y constante.",
    use: "Autoconsumo · restaurante",
  },
  {
    slug: "rucula",
    name: "Rúcula",
    type: "Hoja",
    image: "/images/cultivos/rucula.jpg",
    summary: "Crecimiento rápido y sabor intenso para cocina y ensalada.",
    description:
      "Ofrece cortes tempranos y puede reponerse con frecuencia para mantener hojas tiernas.",
    difficulty: "Fácil",
    growthTime: "25–40 días",
    cycles: "8–12 ciclos/año",
    light: "Luz media",
    tips: "Cosecha joven para obtener hojas más suaves y evita que espigue.",
    towerRecommendation: "Muy adecuada para llenar huecos y escalonar producciones.",
    use: "Principiante · restaurante · comercial",
  },
  {
    slug: "albahaca",
    name: "Albahaca",
    type: "Aromática",
    image: "/images/cultivos/albahaca.jpg",
    summary: "Aromática productiva y especialmente útil en cocina.",
    description:
      "Con temperatura estable y podas regulares desarrolla una planta compacta y abundante.",
    difficulty: "Fácil",
    growthTime: "30–45 días",
    cycles: "6–8 cortes/año",
    light: "Luz media-alta",
    tips: "Pinza las puntas y evita la floración temprana para favorecer nuevas hojas.",
    towerRecommendation: "Sitúala en zonas luminosas con espacio para ramificarse.",
    use: "Principiante · restaurante · comercial",
  },
  {
    slug: "cilantro",
    name: "Cilantro",
    type: "Aromática",
    image: "/images/cultivos/cilantro.jpg",
    summary: "Aromática de ciclo corto para cosechas continuas.",
    description:
      "Resulta muy útil en cocina, aunque agradece temperaturas suaves para retrasar la floración.",
    difficulty: "Media",
    growthTime: "30–50 días",
    cycles: "6–9 ciclos/año",
    light: "Luz media",
    tips: "Realiza siembras escalonadas y protege la planta del calor intenso.",
    towerRecommendation: "Mejor en posiciones medias o bajas con temperatura moderada.",
    use: "Autoconsumo · restaurante · comercial",
  },
  {
    slug: "perejil",
    name: "Perejil",
    type: "Aromática",
    image: "/images/cultivos/perejil.jpg",
    summary: "Versátil, resistente y capaz de ofrecer varios cortes.",
    description:
      "Su germinación es lenta, pero una vez establecido permite una cosecha prolongada.",
    difficulty: "Media",
    growthTime: "55–75 días",
    cycles: "Cortes continuos",
    light: "Luz media",
    tips: "Ten paciencia durante la germinación y corta los tallos exteriores desde la base.",
    towerRecommendation: "Ocupa bien posiciones medias con humedad regular.",
    use: "Autoconsumo · restaurante",
  },
  {
    slug: "menta",
    name: "Menta",
    type: "Aromática",
    image: "/images/cultivos/menta.jpg",
    summary: "Vigorosa, aromática y preparada para cortes frecuentes.",
    description:
      "Crece con rapidez y ofrece hojas de forma continua si se controla mediante poda.",
    difficulty: "Fácil",
    growthTime: "30–45 días",
    cycles: "Cosecha continua",
    light: "Luz media",
    tips: "Poda con regularidad para controlar su vigor y mantener brotes tiernos.",
    towerRecommendation: "Dale una posición propia y espacio para que no cubra otros cultivos.",
    use: "Principiante · autoconsumo · restaurante",
  },
  {
    slug: "hierbabuena",
    name: "Hierbabuena",
    type: "Aromática",
    image: "/images/cultivos/hierbabuena.jpg",
    summary: "Muy aromática y adecuada para bebidas, cocina y postres.",
    description:
      "Comparte el vigor de otras mentas y responde bien a la cosecha frecuente.",
    difficulty: "Fácil",
    growthTime: "30–45 días",
    cycles: "Cosecha continua",
    light: "Luz media",
    tips: "Recorta los tallos largos y retira hojas dañadas para mantenerla compacta.",
    towerRecommendation: "Colócala en posiciones bajas o exteriores para controlar su expansión.",
    use: "Principiante · autoconsumo · restaurante",
  },
  {
    slug: "cebollino",
    name: "Cebollino",
    type: "Aromática",
    image: "/images/cultivos/cebollino.jpg",
    summary: "Compacto, resistente y cómodo para cortar según necesidad.",
    description:
      "Su crecimiento vertical y estrecho permite combinarlo con otros cultivos sin ocupar demasiado.",
    difficulty: "Fácil",
    growthTime: "45–60 días",
    cycles: "Cortes continuos",
    light: "Luz media-alta",
    tips: "Corta a pocos centímetros de la base y deja que la mata rebrote.",
    towerRecommendation: "Se adapta bien a posiciones medias y altas con buena luz.",
    use: "Principiante · autoconsumo · restaurante",
  },
  {
    slug: "fresas",
    name: "Fresas",
    type: "Fruto",
    image: "/images/cultivos/fresas.jpg",
    summary: "Un cultivo vistoso que agradece mucha luz y atención.",
    description:
      "La producción depende de la variedad, la iluminación, la temperatura y una buena polinización.",
    difficulty: "Media",
    growthTime: "60–90 días",
    cycles: "Producción estacional",
    light: "Luz alta",
    tips: "Vigila la floración, facilita la polinización y retira frutos u hojas dañadas.",
    towerRecommendation: "Reserva posiciones exteriores y luminosas para que los frutos cuelguen.",
    use: "Autoconsumo · restaurante · comercial",
  },
  {
    slug: "tomate-cherry",
    name: "Tomate cherry",
    type: "Fruto",
    image: "/images/cultivos/tomate-cherry.jpg",
    summary: "Fruto compacto para proyectos con más luz y seguimiento.",
    description:
      "Necesita tutorado, nutrición estable y más tiempo que los cultivos de hoja, pero ofrece gran valor culinario.",
    difficulty: "Media",
    growthTime: "70–100 días",
    cycles: "Producción prolongada",
    light: "Luz alta",
    tips: "Aporta soporte, controla el crecimiento y favorece la polinización de las flores.",
    towerRecommendation: "Usa posiciones bajas y limita el número de plantas para evitar exceso de peso.",
    use: "Restaurante · autoconsumo · comercial",
  },
];

export const cropNames = cropCatalog.map((crop) => crop.name);
