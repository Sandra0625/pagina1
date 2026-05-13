export const SITE = {
  name: "UTAMED",
  tagline: "La Universidad Online del Siglo XXI",
  description: "Títulos universitarios oficiales 100% online. Acceso inmediato, pago flexible y resultados reales.",
  phone: "951 562 138",
  phoneHref: "tel:+34951562138",
  contactHref: "/contacto",
  loginHref: "/acceso-plataformas-UTAMED",
};

export const ALERT_BANNER = {
  text: "🔥 Oferta limitada: 20% de descuento en matrículas",
  sub: "Solo hasta el 31 de mayo",
  href: "/oferta",
};

export const TOP_LINKS = [
  { label: "Noticias", href: "/noticias" },
  { label: "Blog", href: "/blog" },
  { label: "Eventos", href: "/eventos" },
  { label: "Podcast", href: "/podcast" },
];

export const NAV_ITEMS = [
  { label: "Grados", href: "/grados" },
  { label: "Másteres", href: "/masteres" },
  { label: "Formación Profesional", href: "/fp-a-distancia" },
  { label: "Oferta académica", href: "/oferta-academica" },
  { label: "Precios y Becas", href: "/precios-becas" },
  { label: "UTAMED", href: "/utamed" },
];

export const HERO = {
  badge: "Título oficial — Acceso inmediato",
  title1: "Invierte en ti.",
  title2: "Obtén tu título oficial online",
  subtitle: "Más de 40 programas universitarios listos para empezar hoy. Pago en cuotas, sin intereses. Resultados que transforman carreras.",
  ctaPrimary: { label: "Ver programas y precios", href: "/oferta-academica" },
  ctaSecondary: { label: "Hablar con un asesor", href: "/contacto" },
  stats: [
    { value: "+15.000", label: "Alumnos activos" },
    { value: "100%", label: "Online" },
    { value: "+40", label: "Titulaciones" },
  ],
};

export const FEATURED_PROGRAMS = [
  {
    id: 1,
    category: "Grado Oficial",
    title: "Psicología",
    description: "El grado más demandado. Formación científica y clínica con salidas laborales inmediatas.",
    href: "/grados/psicologia-online",
    icon: "🧠",
    color: "#6366f1",
    price: "desde 79€/mes",
    duration: "4 años",
    badge: "Más vendido",
  },
  {
    id: 2,
    category: "Grado Oficial",
    title: "Nutrición Humana y Dietética",
    description: "Alta demanda laboral. Especialización en salud alimentaria con proyección internacional.",
    href: "/grados/nutricion-dietetica-online",
    icon: "🥗",
    color: "#22c55e",
    price: "desde 79€/mes",
    duration: "4 años",
    badge: null,
  },
  {
    id: 3,
    category: "Grado Oficial",
    title: "Ingeniería Informática",
    description: "El sector tech no para de crecer. Domina el desarrollo de software y los sistemas del futuro.",
    href: "/grados/ingenieria-informatica-online",
    icon: "💻",
    color: "#0ea5e9",
    price: "desde 79€/mes",
    duration: "4 años",
    badge: null,
  },
  {
    id: 4,
    category: "Máster Oficial",
    title: "Inteligencia Artificial",
    description: "El máster del momento. Lidera la revolución tecnológica con IA aplicada a negocios reales.",
    href: "/masteres/inteligencia-artificial",
    icon: "🤖",
    color: "#f59e0b",
    price: "desde 120€/mes",
    duration: "1 año",
    badge: "Novedad",
  },
  {
    id: 5,
    category: "Máster Oficial",
    title: "Formación del Profesorado",
    description: "Habilitación oficial para enseñar en secundaria. Plazas limitadas cada convocatoria.",
    href: "/masteres/formacion-del-profesorado",
    icon: "📚",
    color: "#ec4899",
    price: "desde 120€/mes",
    duration: "1 año",
    badge: "Plazas limitadas",
  },
  {
    id: 6,
    category: "FP Superior",
    title: "Desarrollo de Aplicaciones Web",
    description: "Accede al mercado laboral digital en menos de 2 años. Alta empleabilidad garantizada.",
    href: "/grado-superior/fp-daw-online",
    icon: "🌐",
    color: "#14b8a6",
    price: "desde 49€/mes",
    duration: "2 años",
    badge: "Alta empleabilidad",
  },
];

export const WHY_UTAMED = [
  { icon: "🎓", title: "Título oficial incluido", desc: "Recibes un título reconocido por el Ministerio de Educación. Válido en toda Europa." },
  { icon: "⚡", title: "Empieza hoy mismo", desc: "Acceso inmediato a todos los contenidos tras completar tu matrícula online." },
  { icon: "💳", title: "Pago en cuotas sin intereses", desc: "Financia tu formación desde 49€/mes. Sin permanencia, cancela cuando quieras." },
  { icon: "📱", title: "Estudia desde cualquier lugar", desc: "Plataforma 100% online adaptada a móvil, tablet y ordenador. Sin horarios fijos." },
  { icon: "🏆", title: "Garantía de satisfacción", desc: "Si en los primeros 15 días no estás satisfecho, te devolvemos el dinero. Sin preguntas." },
  { icon: "💼", title: "Bolsa de empleo incluida", desc: "Acceso a nuestra red de +500 empresas colaboradoras para prácticas y empleo directo." },
];

export const TESTIMONIALS = [
  { name: "María García", program: "Grado en Psicología", text: "En 4 años conseguí mi título oficial estudiando desde casa. La inversión más rentable que he hecho en mi vida.", avatar: "MG" },
  { name: "Carlos Ruiz", program: "Máster en Inteligencia Artificial", text: "Conseguí un aumento de sueldo del 40% al terminar el máster. El contenido está al nivel de cualquier universidad presencial.", avatar: "CR" },
  { name: "Ana Martínez", program: "FP en Desarrollo de Aplicaciones Web", text: "En menos de un año ya tenía trabajo como desarrolladora. El precio es imbatible para la calidad que ofrecen.", avatar: "AM" },
];

export const FOOTER_LINKS = {
  Universidad: [
    { label: "Sobre UTAMED", href: "/utamed" },
    { label: "Equipo docente", href: "/equipo" },
    { label: "Noticias", href: "/noticias" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
  Formación: [
    { label: "Grados oficiales", href: "/grados" },
    { label: "Másteres oficiales", href: "/masteres" },
    { label: "Formación Profesional", href: "/fp-a-distancia" },
    { label: "Tridente UTAMED", href: "/fp-a-distancia/tridente-utamed" },
  ],
  Legal: [
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Cookies", href: "/cookies" },
    { label: "Términos y condiciones", href: "/terminos" },
  ],
};