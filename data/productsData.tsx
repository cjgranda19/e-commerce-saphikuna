import categories from "@/data/categoryData"; // Importa categorías

export type Product = {
  id: number;
  name: string;
  description: string;
  origin: string;
  price: number;
  imageUrl: string;
  categoryId: number; // Usa el ID de la categoría directamente
};

const products: Product[] = [
  {
    id: 1,
    name: "Sombrero de Otavalo",
    description: "El sombrero Otavaleño, emblemático de la cultura kichwa en Ecuador, se confecciona artesanalmente con lana de borrego o pelo de conejo. Sus cintas tejidas simbolizan la sabiduría ancestral y la unidad comunitaria, mientras que los colores sobrios reflejan respeto por la naturaleza. Es un símbolo de estatus y calidad reconocida internacionalmente.",
    origin: "Otavalo",
    price: 25.00,
    imageUrl: "/otavalo.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 2,
    name: "Sombreros de los Salasaca",
    description: "Símbolo profundo de identidad cultural y espiritualidad, representando la conexión de la comunidad con la tierra, la naturaleza y sus ancestros. Además de su función práctica, estos sombreros indican jerarquía y estatus social dentro de la comunidad, y su uso en ceremonias y festividades refuerza la continuidad de tradiciones ancestrales que celebran la vida y la protección espiritual.",
    origin: "Salasaca",
    price: 49.00,
    imageUrl: "/salasaca-tradicional.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 3,
    name: "Sombreros de los Salasaca dia antes de la boda",
    description: "En la cultura Salasaka, antes de la boda, las mujeres usan un sombrero de tonos claros, a menudo blanco, adornado con bordados y detalles tradicionales que resaltan su belleza y juventud. Este sombrero, a diferencia del sombrero negro que portan las mujeres casadas, simboliza su soltería y disponibilidad para el matrimonio. Con un diseño que refleja orgullo y tradición, cada mujer personaliza su sombrero con detalles únicos que destacan su identidad y conexión con sus raíces culturales, mostrando que está en la etapa de ser cortejada.",
    origin: "Salasaca",
    price: 49.00,
    imageUrl: "/salasaca-antes-boda.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 4,
    name: "Sombrero de los Salasaca para cuando está casada",
    description: "El sombrero de la cultura Salasaka resalta más aún cuando una mujer es casada porque deben usar un distintivo y enorgullecedor sombrero negro el que debe ser portado siempre en todo momento como significado de que la mujer ya no está soltera o disponible para otro hombre.",
    origin: "Salasaca",
    price: 25.00,
    imageUrl: "/salasaca-casada.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 5,
    name: "Sombrero de los Saraguro",
    description: "Elementos distintivos de su vestimenta tradicional de la provincia de Loja, caracterizados por su color blanco y una banda negra que simboliza la dualidad y el equilibrio en su cosmovisión. Estos sombreros no solo marcan la identidad y el orgullo de pertenecer a la comunidad Saraguro, sino que también tienen un valor ritual, siendo usados en momentos clave de la vida social y espiritual.",
    origin: "Saraguro",
    price: 30.00,
    imageUrl: "/saraguro.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 6,
    name: "Sombreros de Natabuela",
    description: "Los sombreros ecuatorianos de Natabuela, una parroquia de la provincia de Imbabura, se fabrican principalmente con lana de oveja. Los sombreros suelen tener una forma redondeada con un ala ancha, ideal para proteger del sol en las labores agrícolas. Tradicionalmente, estos sombreros son un símbolo de identidad local y se usan en festividades y celebraciones como la Fiesta de San Juan, donde se mezclan la danza, la música y las creencias ancestrales.",
    origin: "Natabuela",
    price: 25.00,
    imageUrl: "/natabuela.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 6,
    name: "Sombrero Secoya",
    description: "Los sombreros tradicionales de los Secoyas, una comunidad indígena de la Amazonía ecuatoriana, son notablemente diferentes de los de las regiones andinas y costeras. Estos sombreros suelen estar hechos de materiales naturales como fibras vegetales y hojas de palma, reflejando su profunda conexión con el entorno amazónico. Los Secoyas los decoran con plumas de aves locales, semillas, y a veces con cuentas de colores, lo que los hace vibrantes y únicos.",
    origin: "Ecuador",
    price: 28.00,
    imageUrl: "/secoyas.jpg",
    categoryId: 3, // Usa el ID de la categoría
  },
  {
    id: 7,
    name: "Sombreros de los Kayambi",
    description: "Los sombreros ecuatorianos de la cultura Kayambi, originaria de la región andina de Ecuador, se caracterizan por su forma tradicional con copa alta y ala media, ofreciendo protección tanto del sol como del frío de las alturas. Estos sombreros están elaborados con lana de oveja, teñida en tonos sobrios como el negro y marrón, que reflejan la conexión con la tierra y la naturaleza.",
    origin: "Kayambi",
    price: 20.00,
    imageUrl: "/cayambis.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 8,
    name: "Sombreros de Aruchico",
    description: "El sombrero Aruchico, tradicional de las regiones andinas de Ecuador, es un símbolo cultural que representa la diversidad y riqueza de la cultura andina. Adornado con cintas multicolores, cada color simboliza elementos naturales. Además, es un emblema de protección espiritual e identidad indígena en las festividades de San Pedro y San Juan.",
    origin: "Aruchico",
    price: 40.00,
    imageUrl: "/ariucho.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 9,
    name: "Sombrero Montuvio",
    description: "El sombrero montuvio, tradicional en Guayas, Manabí y Los Ríos, es un símbolo de identidad y orgullo para la cultura montuvia en Ecuador. Confeccionado de paja toquilla o mocora, su cinta negra simboliza respeto y honor, mientras que su color natural o blanco representa pureza y conexión con la tierra. Es un emblema de tradición y herencia cultural.",
    origin: "Montuvio",
    price: 40.00,
    imageUrl: "/montubio.jpg",
    categoryId: 1, // Usa el ID de la categoría
  },
  {
    id: 10,
    name: "Sombrero de Paja Toquilla",
    description: "Conocidos como sombreros Panamá, son un símbolo de la identidad y la herencia cultural ecuatoriana, reconocidos mundialmente por su fina artesanía. Hechos a mano con hojas de la planta Carludovica palmata, representan elegancia y estatus social, y son un emblema de la dedicación y destreza de las comunidades rurales de Ecuador.",
    origin: "Toquilla",
    price: 35.00,
    imageUrl: "/paja-toquilla.jpg",
    categoryId: 1, // Usa el ID de la categoría
  },
  {
    id: 11,
    name: "Sombrero de Paja Toquilla con Ala ancha",
    description: "Es un sombrero con una ala más ancha que el promedio, diseñado para ofrecer mayor protección contra el sol. Este estilo es popular en climas cálidos y soleados.",
    origin: "Toquilla",
    price: 65.00,
    imageUrl: "/ala-ancha.jpg",
    categoryId: 1, // Usa el ID de la categoría
  },
  {
    id: 12,
    name: "Sombrero del Chullita Quiteño",
    description:"El sombrero del chullita quiteño es un símbolo de identidad y orgullo cultural en Quito, representando la alegría y picardía del personaje tradicional de la ciudad. Hecho de fieltro, generalmente de lana, este sombrero de ala ancha y copa alta es un elemento clave en la vestimenta del chullita, y es especialmente usado durante las celebraciones populares como las fiestas de Quito.",
    origin: "Chullita",
    price: 45.00,
    imageUrl: "/chullita-quitenio.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 13,
    name: "Sombrero de la Chola Cuencana",
    description: "La chola cuencana que viene del campo lleva sombrero de paja toquilla, tejido a mano, de copa alta, ala corta y cintillo negro, la que viene de la ciudad generalmente no lleva sombrero.",
    origin: "Chola",
    price: 25.00,
    imageUrl: "/chola-cuencana.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },
  {
    id: 14,
    name: "Sombrero de los Puruháes",
    description: "Los sombreros de los Puruháes, originarios de la región central andina, son de forma cónica con ala estrecha, elaborados con lana de oveja en colores oscuros como negro y marrón. Estos sombreros simbolizan el estatus y la identidad comunitaria, siendo esenciales en ceremonias y festividades tradicionales, como el Kapak Raymi, donde refuerzan el vínculo con la tierra y los ancestros.",
    origin: "Puruhá",
    price: 45.00,
    imageUrl: "/puruhaes.jpg",
    categoryId: 2, // Usa el ID de la categoría
  },

];

export default products;
