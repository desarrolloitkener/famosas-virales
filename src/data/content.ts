export interface CarouselSlide {
  id: string;
  image: string;
  username: string;
  avatar: string;
  timestamp: string;
}

export const TELEGRAM_USER = "BryanCruz69";

export function getTelegramUrl(message: string): string {
  return `https://t.me/${TELEGRAM_USER}?text=${encodeURIComponent(message)}`;
}

const defaultAvatar =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop";

export const referenciasSlides: CarouselSlide[] = [
  {
    id: "ref-1",
    image: "https://images2.imgbox.com/88/76/nHR8IWOP_o.jpg",
    username: "linastarnopor",
    avatar: defaultAvatar,
    timestamp: "hace 1 año",
  },
  {
    id: "ref-2",
    image: "https://images2.imgbox.com/09/e9/Wk1OT5pk_o.jpg",
    username: "fridaitzel",
    avatar: defaultAvatar,
    timestamp: "hace 8 meses",
  },
  {
    id: "ref-3",
    image: "https://images2.imgbox.com/43/0a/Kvs7wKEi_o.jpg",
    username: "adrianaolivarez",
    avatar: defaultAvatar,
    timestamp: "hace 6 meses",
  },
  {
    id: "ref-4",
    image: "https://images2.imgbox.com/35/20/vgC4jO1z_o.jpg",
    username: "valecasta",
    avatar: defaultAvatar,
    timestamp: "hace 3 meses",
  },
  {
    id: "ref-5",
    image: "https://images2.imgbox.com/56/30/0mSnZV1x_o.jpg",
    username: "neveska",
    avatar: defaultAvatar,
    timestamp: "hace 2 meses",
  },
  {
    id: "ref-6",
    image: "https://images2.imgbox.com/4e/54/IEOlgtwn_o.jpg",
    username: "gialover",
    avatar: defaultAvatar,
    timestamp: "hace 1 mes",
  },
  {
    id: "ref-7",
    image: "https://images2.imgbox.com/65/b0/HG5RuOJp_o.jpg",
    username: "yajana_cano",
    avatar: defaultAvatar,
    timestamp: "hace 3 semanas",
  },
  {
    id: "ref-8",
    image: "https://images2.imgbox.com/fd/f5/d5JohACq_o.jpg",
    username: "catsara",
    avatar: defaultAvatar,
    timestamp: "hace 2 semanas",
  },
];

export const pruebaContenidoSlides: CarouselSlide[] = [
  {
    id: "prueba-1",
    image: "https://images2.imgbox.com/45/50/JWeFkd2z_o.jpg",
    username: "lela_sohna",
    avatar: defaultAvatar,
    timestamp: "hace 2 semanas",
  },
  {
    id: "prueba-2",
    image: "https://images2.imgbox.com/ce/e7/EHVaknZH_o.jpg",
    username: "belirusa",
    avatar: defaultAvatar,
    timestamp: "hace 3 semanas",
  },
  {
    id: "prueba-3",
    image: "https://images2.imgbox.com/21/63/g6epoiVr_o.jpg",
    username: "lioqueen",
    avatar: defaultAvatar,
    timestamp: "hace 1 mes",
  },
  {
    id: "prueba-4",
    image: "https://images2.imgbox.com/e3/9e/ovLHxHyf_o.jpg",
    username: "brenda_castro",
    avatar: defaultAvatar,
    timestamp: "hace 5 días",
  },
  {
    id: "prueba-5",
    image: "https://images2.imgbox.com/c4/37/m2rYHgfc_o.jpg",
    username: "minitinah",
    avatar: defaultAvatar,
    timestamp: "hace 1 semana",
  },
  {
    id: "prueba-6",
    image: "https://images2.imgbox.com/97/57/SkoyzDih_o.jpg",
    username: "whitebean",
    avatar: defaultAvatar,
    timestamp: "hace 4 días",
  },
  {
    id: "prueba-7",
    image: "https://images2.imgbox.com/6e/89/OP61dyDW_o.jpg",
    username: "ladydusha",
    avatar: defaultAvatar,
    timestamp: "hace 6 días",
  },
  {
    id: "prueba-8",
    image: "https://images2.imgbox.com/48/76/4ouYYuZF_o.jpg",
    username: "g88su",
    avatar: defaultAvatar,
    timestamp: "hace 3 días",
  },
];

export const modelos = [
  "linastarnopor",
  "fridaitzel",
  "mommysharon",
  "stefany chavez",
  "emilia vizcarra",
  "melisa ruiz",
  "ivanna banana",
  "yolany gomez",
  "ggval",
  "xoxlovelysweets",
  "whossooof",
  "adriana olivarez",
  "vanevp19",
  "brenda castro",
  "catsara",
  "neveska",
  "lela sohna",
  "valecasta",
  "yajana cano",
  "gialover",
  "sunshine23_45",
  "ladydusha",
  "joselis johana",
  "gigardez",
  "marta maria santos",
  "belirusa",
  "maria julissa",
  "whitebean",
  "francesa trisini",
  "minitinah",
  "lioqueen",
  "g88su",
  "lilmilk69",
];

export const planes = [
  {
    id: "premium",
    nombre: "Grupo OFPremium",
    mxn: 300,
    usd: 19,
    destacado: false,
    telegramMessage:
      "Hola bro, me interesa el grupo de telegram (OFPremium) de 300 pesos mexicanos o 19 dólares.",
    beneficios: [
      "Acceso al grupo premium",
      "Contenido exclusivo cada semana",
      "Actualizaciones constantes",
    ],
  },
  {
    id: "deluxe",
    nombre: "Grupo OFDeluxe",
    mxn: 600,
    usd: 37,
    destacado: true,
    telegramMessage:
      "Hola bro, me interesa el grupo de telegram (OFDeluxe) de 600 pesos mexicanos o 37 dólares.",
    beneficios: [
      "Acceso al grupo deluxe",
      "Contenido premium + exclusivo",
      "Material de mayor calidad",
    ],
  },
  {
    id: "bundle",
    nombre: "Acceso a ambos grupos",
    mxn: 700,
    usd: 42,
    destacado: false,
    telegramMessage:
      "Hola bro, me interesa el acceso a ambos grupos de telegram (OFPremium + OFDeluxe) de 700 pesos mexicanos o 42 dólares.",
    beneficios: [
      "OFPremium + OFDeluxe incluidos",
      "Mejor precio por acceso completo",
      "Todo el catálogo disponible",
    ],
  },
];

export const metodosPago = [
  {
    id: "transferencia",
    nombre: "Transferencia mexicana",
    descripcion: "SPEI / transferencia bancaria nacional",
    icon: "🏦",
  },
  {
    id: "paypal",
    nombre: "PayPal",
    descripcion: "Pago internacional seguro",
    icon: "💳",
  },
  {
    id: "felix",
    nombre: "Felix Pago",
    descripcion: "Envíos rápidos desde USA",
    icon: "⚡",
  },
  {
    id: "remitly",
    nombre: "Remitly",
    descripcion: "Transferencias internacionales",
    icon: "🌎",
  },
];

export const faqs = [
  {
    id: "diferencia-grupos",
    pregunta: "¿Cuál es la diferencia de ambos grupos?",
    respuesta:
      "En el grupo OFDeluxe únicamente se sube contenido de pago (el que las creadoras venden por mensaje privado) y el grupo OFPremium tiene contenido variado (contenido del feed de su perfil de OF y algunos videos de pago).",
  },
  {
    id: "solo-pago",
    pregunta: "¿Es un solo pago?",
    respuesta: "Sí, es un solo pago y acceso de por vida.",
  },
  {
    id: "metodos-pago",
    pregunta: "¿Qué métodos de pago aceptas?",
    respuesta: "Transferencia mexicana, PayPal, Felix Pago y Remitly.",
  },
  {
    id: "cambios",
    pregunta: "¿Haces cambios?",
    respuesta:
      "Sí, si el contenido es de tu interés. Manda mensaje y dime qué no quieres comprar, que solo te interesa cambiar.",
  },
  {
    id: "grupo-gratis",
    pregunta: "¿Hay un grupo gratis?",
    respuesta:
      "No, lo intentamos pero Telegram cierra los canales porque los reportan.",
  },
  {
    id: "modelos-grupos",
    pregunta: "¿Qué modelos hay en los grupos?",
    respuesta:
      "En la sección prueba de contenido y modelos puedes ver una lista de las principales, de las que más preguntan. Si te interesa saber si tenemos contenido de una modelo en especial, pregunta directamente. Ej. ¿En tu grupo hay contenido de Francesca Trisini?",
  },
  {
    id: "plataforma-grupos",
    pregunta: "¿En qué plataforma o página están los grupos?",
    respuesta: "En Telegram están ambos grupos.",
  },
  {
    id: "actualizaciones",
    pregunta: "¿Cada cuánto se actualiza el contenido?",
    respuesta: "El contenido se actualiza cada fin de semana.",
  },
];
