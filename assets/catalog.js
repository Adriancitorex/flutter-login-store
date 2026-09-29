const CATALOG = [
  {
    slug: "pastel",
    title: "Pastel Minimal",
    category: "Minimal",
    price: "MX$49",
    description: "Login limpio y suave para apps que necesitan una interfaz sencilla y fácil de adaptar.",
    features: ["Validación de correo", "Validación de contraseña", "Mostrar/ocultar contraseña", "SnackBar de confirmación demo", "Sin paquetes externos"],
    tech: "Flutter / Material",
    preview: "pastel"
  },
  {
    slug: "aurora-glass",
    title: "Aurora Glass",
    category: "Glass",
    price: "MX$69",
    description: "Glassmorphism con auroras animadas, desenfoque y una interacción de formulario más completa.",
    features: ["Fondo aurora animado", "Efecto glass con blur", "Validación de correo", "Mostrar/ocultar contraseña", "Estado de carga", "Mensajes demo para acciones"],
    tech: "Flutter / Material 3",
    preview: "aurora"
  },
  {
    slug: "corporate",
    title: "Corporate",
    category: "Business",
    price: "MX$59",
    description: "Interfaz corporativa sobria, pensada para dashboards, SaaS y aplicaciones empresariales.",
    features: ["Campo de correo", "Campo de contraseña", "Mostrar/ocultar contraseña", "Recordarme", "Validación de formulario"],
    tech: "Flutter / Material 3",
    preview: "corporate"
  },
  {
    slug: "vibrant",
    title: "Vibrant",
    category: "Gradient",
    price: "MX$59",
    description: "Diseño llamativo con color y movimiento para productos orientados a consumidores.",
    features: ["Interfaz colorida", "Campo de acceso", "Mostrar/ocultar contraseña", "Indicador de carga", "Acciones secundarias"],
    tech: "Flutter / Material",
    preview: "vibrant"
  },
  {
    slug: "cyberpunk",
    title: "Cyberpunk",
    category: "Futuristic",
    price: "MX$79",
    description: "Estética cyberpunk con grid, neón, paneles angulares y microanimaciones.",
    features: ["Fondo con grid personalizado", "Animación de estado", "Paneles chamfered", "Mostrar/ocultar contraseña", "Elementos neon personalizados"],
    tech: "Flutter / Material",
    preview: "cyber"
  }
];

function productBySlug(slug) {
  return CATALOG.find(p => p.slug === slug);
}