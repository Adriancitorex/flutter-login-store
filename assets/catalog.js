const CATALOG = [
  {
    slug: "pastel",
    title: "Pastel Minimal",
    category: "Minimal",
    price: "MX$49",
    description: "Login limpio y suave para apps que necesitan una interfaz sencilla y fácil de adaptar.",
    features: ["Validación de correo","Validación de contraseña","Mostrar/ocultar contraseña","SnackBar de confirmación demo","Sin paquetes externos"],
    tech: "Flutter / Material",
    preview: "pastel"
  },
  {
    slug: "aurora-glass",
    title: "Aurora Glass",
    category: "Glass",
    price: "MX$69",
    description: "Glassmorphism con auroras animadas, desenfoque y una interacción de formulario más completa.",
    features: ["Fondo aurora animado","Efecto glass con blur","Validación de correo","Mostrar/ocultar contraseña","Estado de carga","Mensajes demo para acciones"],
    tech: "Flutter / Material 3",
    preview: "aurora"
  },
  {
    slug: "corporate",
    title: "Corporate",
    category: "Business",
    price: "MX$59",
    description: "Interfaz corporativa sobria, pensada para dashboards, SaaS y aplicaciones empresariales.",
    features: ["Campo de correo","Campo de contraseña","Mostrar/ocultar contraseña","Recordarme","Validación de formulario"],
    tech: "Flutter / Material 3",
    preview: "corporate"
  },
  {
    slug: "vibrant",
    title: "Vibrant",
    category: "Gradient",
    price: "MX$59",
    description: "Diseño llamativo con color y movimiento para productos orientados a consumidores.",
    features: ["Interfaz colorida","Campo de acceso","Mostrar/ocultar contraseña","Indicador de carga","Acciones secundarias"],
    tech: "Flutter / Material",
    preview: "vibrant"
  },
  {
    slug: "cyberpunk",
    title: "Cyberpunk",
    category: "Futuristic",
    price: "MX$79",
    description: "Estética cyberpunk con grid, neón, paneles angulares y microanimaciones.",
    features: ["Fondo con grid personalizado","Animación de estado","Paneles chamfered","Mostrar/ocultar contraseña","Elementos neon personalizados"],
    tech: "Flutter / Material",
    preview: "cyber"
  },
  {
    slug: "liquid-glass",
    title: "Liquid Glass",
    category: "Glass",
    price: "MX$79",
    description: "Vidrio líquido con superficies translúcidas, reflejos suaves, fondos orgánicos y autenticación básica conectada a una API.",
    features: ["Efecto liquid glass","Fondo animado con blobs","Blur y superficies translúcidas","Registro e inicio de sesión","Contraseñas protegidas con hash","JWT de sesión","Validación de formulario"],
    tech: "Flutter / Material 3 + REST API",
    preview: "liquid"
  },
  {
    slug: "dark-glass",
    title: "Dark Glass",
    category: "Glass",
    price: "MX$69",
    description: "Interfaz oscura premium con superficies translúcidas, blur y una estética elegante para productos digitales.",
    features: ["Glassmorphism oscuro","Backdrop blur","Fondo con degradado","Mostrar/ocultar contraseña","Diseño responsive"],
    tech: "Flutter / Material 3",
    preview: "dark-glass"
  },
  {
    slug: "fintech",
    title: "Fintech",
    category: "Business",
    price: "MX$69",
    description: "Login limpio orientado a banca, finanzas y aplicaciones que necesitan transmitir una experiencia de acceso segura.",
    features: ["Diseño financiero","Acceso de cuenta","Mostrar/ocultar contraseña","Recuperación de contraseña","Indicador de autenticación segura"],
    tech: "Flutter / Material 3",
    preview: "fintech"
  },
  {
    slug: "gradient-flow",
    title: "Gradient Flow",
    category: "Gradient",
    price: "MX$59",
    description: "Experiencia de acceso moderna con degradados vibrantes, tarjeta elevada y detalles suaves de interacción.",
    features: ["Fondo gradient","Tarjeta elevada","Mostrar/ocultar contraseña","Acciones de cuenta","Diseño responsive"],
    tech: "Flutter / Material 3",
    preview: "gradient-flow"
  },
  {
    slug: "minimal-pro",
    title: "Minimal Pro",
    category: "Minimal",
    price: "MX$69",
    description: "Login minimalista y profesional con soporte para acceso tradicional y opción de autenticación con Google.",
    features: ["Diseño minimalista","Validación básica","Mostrar/ocultar contraseña","Acceso con Google","Estado de formulario"],
    tech: "Flutter / Material 3",
    preview: "minimal-pro"
  },
  {
    slug: "neon",
    title: "Neon",
    category: "Futuristic",
    price: "MX$69",
    description: "Interfaz oscura inspirada en terminales modernas, con acentos neon y una estética tecnológica.",
    features: ["Tema oscuro","Acentos neon","Campos de acceso estilizados","Mostrar/ocultar contraseña","Diseño tecnológico"],
    tech: "Flutter / Material 3",
    preview: "neon"
  },
  {
    slug: "split-modern",
    title: "Split Modern",
    category: "Business",
    price: "MX$79",
    description: "Experiencia split-screen para productos modernos, con panel visual en escritorio y adaptación automática en móvil.",
    features: ["Split-screen responsive","Panel visual","Acceso con Google","Mostrar/ocultar contraseña","Adaptación móvil"],
    tech: "Flutter / Material 3",
    preview: "split-modern"
  }
];

function productBySlug(slug) {
  return CATALOG.find(p => p.slug === slug);
}
