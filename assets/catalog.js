const CATALOG = [
  {
    slug: "pastel",
    file: "login_estilo_1.dart",
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
    file: "login_estilo_2.dart",
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
    file: "login_estilo_3.dart",
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
    file: "login_estilo_4.dart",
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
    file: "login_estilo_5.dart",
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
    file: "login_estilo_6.dart",
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
    file: "login_dark_glass.dart",
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
    file: "login_fintech.dart",
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
    file: "login_gradient_flow.dart",
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
    file: "login_minimal_pro.dart",
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
    file: "login_neon.dart",
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
    file: "login_split_modern.dart",
    title: "Split Modern",
    category: "Business",
    price: "MX$79",
    description: "Experiencia split-screen para productos modernos, con panel visual en escritorio y adaptación automática en móvil.",
    features: ["Split-screen responsive","Panel visual","Acceso con Google","Mostrar/ocultar contraseña","Adaptación móvil"],
    tech: "Flutter / Material 3",
    preview: "split-modern"
  }
];


// 89 diseños adicionales de la colección generada.
CATALOG.push(...[
  {
    "slug": "studio-00ix9j",
    "title": "CYBER_CORE // ACCESS TERMINAL",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_00ix9j.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-023av2",
    "title": "NeonCore Access",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_023av2.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-02d0u3",
    "title": "Cosmic Station Portal",
    "category": "Cosmic",
    "price": "Próximamente",
    "file": "login_rand_02d0u3.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#050614","#8AE5FF","#8A5CFF"]
  },
  {
    "slug": "studio-0cw0ib",
    "title": "Pastel Auth UI",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_0cw0ib.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-1p8bnx",
    "title": "Vibrant Login UI",
    "category": "Gradient",
    "price": "Próximamente",
    "file": "login_rand_1p8bnx.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#170D28","#FF4F9A","#7A5CFF"]
  },
  {
    "slug": "studio-21pobq",
    "title": "CYBER//ID Terminal",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_21pobq.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-23wu9u",
    "title": "Neumorphic Auth UI",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_23wu9u.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-278xli",
    "title": "Neumorphic Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_278xli.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-31c2wb",
    "title": "Botanica Studio Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_31c2wb.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-48rhv6",
    "title": "Neumorphic Authentication",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_48rhv6.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-4axpza",
    "title": "Aegis Cyber Login",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_4axpza.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-4pngtq",
    "title": "Neon Noir Authentication",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_4pngtq.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-4sfmp4",
    "title": "Maison Aureate",
    "category": "Luxury",
    "price": "Próximamente",
    "file": "login_rand_4sfmp4.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#100E11","#D4AF70","#F1DFC0"]
  },
  {
    "slug": "studio-5es8ih",
    "title": "Neon Noir Terminal",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_5es8ih.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-65dm8v",
    "title": "Portal Corporativo",
    "category": "Business",
    "price": "Próximamente",
    "file": "login_rand_65dm8v.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F5F7FA","#244B83","#6A9A92"]
  },
  {
    "slug": "studio-79c07l",
    "title": "TERMINAL // AUTH",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_79c07l.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#15181D","#FFB703","#A4ABB5"]
  },
  {
    "slug": "studio-7zj8d5",
    "title": "Astra Portal",
    "category": "Cosmic",
    "price": "Próximamente",
    "file": "login_rand_7zj8d5.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#050614","#8AE5FF","#8A5CFF"]
  },
  {
    "slug": "studio-83royt",
    "title": "OUTRUN 1984 - ACCESS TERMINAL",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_83royt.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#10051D","#FF4C9A","#00E5FF"]
  },
  {
    "slug": "studio-8pr80v",
    "title": "Nitro Athlete Login",
    "category": "Sport",
    "price": "Próximamente",
    "file": "login_rand_8pr80v.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D1014","#D4FF00","#FF4A5E"]
  },
  {
    "slug": "studio-91ckpb",
    "title": "Glassmorphic Login UI",
    "category": "Glass",
    "price": "Próximamente",
    "file": "login_rand_91ckpb.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D0B1C","#9B7CFF","#43D9D2"]
  },
  {
    "slug": "studio-9dmagf",
    "title": "Holographic Access Portal",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_9dmagf.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-9fqny0",
    "title": "Nexora Enterprise Portal",
    "category": "Business",
    "price": "Próximamente",
    "file": "login_rand_9fqny0.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F5F7FA","#244B83","#6A9A92"]
  },
  {
    "slug": "studio-9q4yid",
    "title": "Aethelgard OS Login",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_9q4yid.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-9s7p7q",
    "title": "Minimalist Pastel Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_9s7p7q.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-a1vqk3",
    "title": "Pastel Minimalist Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_a1vqk3.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-a2nsr1",
    "title": "CYBER//LOGIN",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_a2nsr1.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-aphyi1",
    "title": "Heavy Industry Terminal",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_aphyi1.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#15181D","#FFB703","#A4ABB5"]
  },
  {
    "slug": "studio-axluut",
    "title": "Maison Royale",
    "category": "Luxury",
    "price": "Próximamente",
    "file": "login_rand_axluut.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#100E11","#D4AF70","#F1DFC0"]
  },
  {
    "slug": "studio-blw6k0",
    "title": "Apex Athlete Login",
    "category": "Sport",
    "price": "Próximamente",
    "file": "login_rand_blw6k0.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D1014","#D4FF00","#FF4A5E"]
  },
  {
    "slug": "studio-bracyk",
    "title": "Brutalist Auth UI",
    "category": "Brutalist",
    "price": "Próximamente",
    "file": "login_rand_bracyk.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F3E9","#151515","#FF5C45"]
  },
  {
    "slug": "studio-brdtp5",
    "title": "Pastel Minimal Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_brdtp5.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-c01bed",
    "title": "RetroWave Login",
    "category": "Retro",
    "price": "Próximamente",
    "file": "login_rand_c01bed.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#10051D","#FF4C9A","#00E5FF"]
  },
  {
    "slug": "studio-c7kki4",
    "title": "Hacienda - Ingreso Rústico",
    "category": "Luxury",
    "price": "Próximamente",
    "file": "login_rand_c7kki4.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#100E11","#D4AF70","#F1DFC0"]
  },
  {
    "slug": "studio-cmzgtk",
    "title": "CYBER//NODE AUTH",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_cmzgtk.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-cywo3f",
    "title": "Portal Corporativo",
    "category": "Business",
    "price": "Próximamente",
    "file": "login_rand_cywo3f.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F5F7FA","#244B83","#6A9A92"]
  },
  {
    "slug": "studio-dza9w8",
    "title": "Gazette Editorial",
    "category": "Editorial",
    "price": "Próximamente",
    "file": "login_rand_dza9w8.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F8F7F3","#222222","#A58A62"]
  },
  {
    "slug": "studio-eg6kbx",
    "title": "Neumorphic UI Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_eg6kbx.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-eibvfw",
    "title": "Glassmorphic Login UI",
    "category": "Glass",
    "price": "Próximamente",
    "file": "login_rand_eibvfw.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D0B1C","#9B7CFF","#43D9D2"]
  },
  {
    "slug": "studio-ejr3ej",
    "title": "Hacienda El Roble",
    "category": "Luxury",
    "price": "Próximamente",
    "file": "login_rand_ejr3ej.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#100E11","#D4AF70","#F1DFC0"]
  },
  {
    "slug": "studio-fw0v83",
    "title": "Minimal Pastel Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_fw0v83.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-fw6xbl",
    "title": "AURA Cybernetic Access",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_fw6xbl.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-gmdrgp",
    "title": "Vibrant Gradient Login",
    "category": "Gradient",
    "price": "Próximamente",
    "file": "login_rand_gmdrgp.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#170D28","#FF4F9A","#7A5CFF"]
  },
  {
    "slug": "studio-hiozr8",
    "title": "HEAVY_IND // AUTH",
    "category": "Industrial",
    "price": "Próximamente",
    "file": "login_rand_hiozr8.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#15181D","#FFB703","#A4ABB5"]
  },
  {
    "slug": "studio-in2ic6",
    "title": "Minimalist Pastel Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_in2ic6.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-j7b29h",
    "title": "Astra Terminal",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_j7b29h.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#050614","#8AE5FF","#8A5CFF"]
  },
  {
    "slug": "studio-jgapdm",
    "title": "PULSE // SPORT",
    "category": "Sport",
    "price": "Próximamente",
    "file": "login_rand_jgapdm.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D1014","#D4FF00","#FF4A5E"]
  },
  {
    "slug": "studio-jq3oiw",
    "title": "Pastel Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_jq3oiw.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-k7wwdb",
    "title": "The Monograph — Login",
    "category": "Editorial",
    "price": "Próximamente",
    "file": "login_rand_k7wwdb.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F8F7F3","#222222","#A58A62"]
  },
  {
    "slug": "studio-kcqnuw",
    "title": "Vibrant Gradient Login",
    "category": "Gradient",
    "price": "Próximamente",
    "file": "login_rand_kcqnuw.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#170D28","#FF4F9A","#7A5CFF"]
  },
  {
    "slug": "studio-kcqp0y",
    "title": "AuraID // Futuristic Login",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_kcqp0y.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-kd5why",
    "title": "Apex Athletic Login",
    "category": "Sport",
    "price": "Próximamente",
    "file": "login_rand_kd5why.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D1014","#D4FF00","#FF4A5E"]
  },
  {
    "slug": "studio-kpgvn0",
    "title": "Cosmic Station Login",
    "category": "Cosmic",
    "price": "Próximamente",
    "file": "login_rand_kpgvn0.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#050614","#8AE5FF","#8A5CFF"]
  },
  {
    "slug": "studio-lr6lo6",
    "title": "Neon Noir Authentication",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_lr6lo6.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-ltmbyo",
    "title": "CYBER//LOGIN 2088",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_ltmbyo.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-maxijv",
    "title": "Glassmorphism Login Template",
    "category": "Glass",
    "price": "Próximamente",
    "file": "login_rand_maxijv.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D0B1C","#9B7CFF","#43D9D2"]
  },
  {
    "slug": "studio-mg2tvz",
    "title": "CYBER_AUTH_V4",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_mg2tvz.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-mj67oe",
    "title": "The Monograph Archive",
    "category": "Editorial",
    "price": "Próximamente",
    "file": "login_rand_mj67oe.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F8F7F3","#222222","#A58A62"]
  },
  {
    "slug": "studio-n1mh44",
    "title": "Glassmorphic Login UI",
    "category": "Glass",
    "price": "Próximamente",
    "file": "login_rand_n1mh44.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D0B1C","#9B7CFF","#43D9D2"]
  },
  {
    "slug": "studio-na9x0z",
    "title": "Neumorphic Auth UI",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_na9x0z.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-nasa26",
    "title": "HoloAuth System",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_nasa26.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-nq7zl2",
    "title": "Apex Kinetic Login",
    "category": "Sport",
    "price": "Próximamente",
    "file": "login_rand_nq7zl2.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D1014","#D4FF00","#FF4A5E"]
  },
  {
    "slug": "studio-pbvpss",
    "title": "Retro Neon 1984 Login",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_pbvpss.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#10051D","#FF4C9A","#00E5FF"]
  },
  {
    "slug": "studio-prg5zw",
    "title": "Neon Aura Login",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_prg5zw.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-qarav1",
    "title": "Aura Luxury Login",
    "category": "Luxury",
    "price": "Próximamente",
    "file": "login_rand_qarav1.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#100E11","#D4AF70","#F1DFC0"]
  },
  {
    "slug": "studio-qemhs4",
    "title": "Glassmorphic Login UI",
    "category": "Glass",
    "price": "Próximamente",
    "file": "login_rand_qemhs4.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D0B1C","#9B7CFF","#43D9D2"]
  },
  {
    "slug": "studio-qlaiol",
    "title": "Sport Pulse Athletics",
    "category": "Sport",
    "price": "Próximamente",
    "file": "login_rand_qlaiol.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D1014","#D4FF00","#FF4A5E"]
  },
  {
    "slug": "studio-qqhyj6",
    "title": "Fluid Gradient Authentication",
    "category": "Gradient",
    "price": "Próximamente",
    "file": "login_rand_qqhyj6.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#170D28","#FF4F9A","#7A5CFF"]
  },
  {
    "slug": "studio-qu0o4e",
    "title": "CYBER_AUTH // 2099",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_qu0o4e.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-r8uv57",
    "title": "Neural Access Terminal",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_r8uv57.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-rp56d0",
    "title": "Aegis Cyber Access",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_rp56d0.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-rqs8d1",
    "title": "Acuarela Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_rqs8d1.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-sei2p0",
    "title": "Enterprise Portal",
    "category": "Business",
    "price": "Próximamente",
    "file": "login_rand_sei2p0.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F5F7FA","#244B83","#6A9A92"]
  },
  {
    "slug": "studio-syndb4",
    "title": "Vibrant Auth UI",
    "category": "Gradient",
    "price": "Próximamente",
    "file": "login_rand_syndb4.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#170D28","#FF4F9A","#7A5CFF"]
  },
  {
    "slug": "studio-tsnvah",
    "title": "CYBER_AUTH // V2.077",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_tsnvah.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-umx9vt",
    "title": "Vibrant Login Template",
    "category": "Gradient",
    "price": "Próximamente",
    "file": "login_rand_umx9vt.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#170D28","#FF4F9A","#7A5CFF"]
  },
  {
    "slug": "studio-ur30bx",
    "title": "Vibrant Gradient Login",
    "category": "Gradient",
    "price": "Próximamente",
    "file": "login_rand_ur30bx.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#170D28","#FF4F9A","#7A5CFF"]
  },
  {
    "slug": "studio-v3zz1t",
    "title": "BRUTAL_AUTH",
    "category": "Brutalist",
    "price": "Próximamente",
    "file": "login_rand_v3zz1t.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F3E9","#151515","#FF5C45"]
  },
  {
    "slug": "studio-vzrhhk",
    "title": "Portal Corporativo",
    "category": "Business",
    "price": "Próximamente",
    "file": "login_rand_vzrhhk.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F5F7FA","#244B83","#6A9A92"]
  },
  {
    "slug": "studio-w2up4l",
    "title": "Astra Login",
    "category": "Cosmic",
    "price": "Próximamente",
    "file": "login_rand_w2up4l.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#050614","#8AE5FF","#8A5CFF"]
  },
  {
    "slug": "studio-w9jda6",
    "title": "NeuralPass - Cyber Auth",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_w9jda6.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-wopa7u",
    "title": "Neumorphic Auth",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_wopa7u.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-x6foyk",
    "title": "Portal Corporativo",
    "category": "Business",
    "price": "Próximamente",
    "file": "login_rand_x6foyk.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F5F7FA","#244B83","#6A9A92"]
  },
  {
    "slug": "studio-xed8wz",
    "title": "Holographic Access Portal",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_xed8wz.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#070811","#00F0FF","#FF4FD8"]
  },
  {
    "slug": "studio-xk3cyr",
    "title": "Neon 1984 Arcade Login",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_xk3cyr.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#10051D","#FF4C9A","#00E5FF"]
  },
  {
    "slug": "studio-xrev7h",
    "title": "Glassmorphism Login",
    "category": "Glass",
    "price": "Próximamente",
    "file": "login_rand_xrev7h.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D0B1C","#9B7CFF","#43D9D2"]
  },
  {
    "slug": "studio-xyom6a",
    "title": "Botanical Login",
    "category": "Soft",
    "price": "Próximamente",
    "file": "login_rand_xyom6a.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#F7F6F2","#8EAA91","#D8A6B8"]
  },
  {
    "slug": "studio-y1hp49",
    "title": "Glassmorphism Login",
    "category": "Glass",
    "price": "Próximamente",
    "file": "login_rand_y1hp49.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D0B1C","#9B7CFF","#43D9D2"]
  },
  {
    "slug": "studio-y4syiv",
    "title": "Apex Athlete Login",
    "category": "Sport",
    "price": "Próximamente",
    "file": "login_rand_y4syiv.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#0D1014","#D4FF00","#FF4A5E"]
  },
  {
    "slug": "studio-zbjidm",
    "title": "Retro 80s Neon Login",
    "category": "Futuristic",
    "price": "Próximamente",
    "file": "login_rand_zbjidm.dart",
    "description": "Diseño original de la colección LoginForge. Interfaz Flutter con identidad visual propia; revisa la vista previa antes de integrarlo.",
    "features": [
      "Interfaz Flutter en Dart",
      "Diseño visual independiente",
      "Acciones de demostración",
      "Autenticación real requiere integración"
    ],
    "tech": "Flutter / Dart",
    "preview": "generated",
    "palette": ["#10051D","#FF4C9A","#00E5FF"]
  }
]);

function productBySlug(slug) {
  return CATALOG.find(p => p.slug === slug);
}
