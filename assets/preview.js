function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

function safeColor(value, fallback) {
  return /^#[0-9a-fA-F]{6}$/.test(String(value || "")) ? value : fallback;
}

function hashText(value) {
  let hash = 0;
  for (const char of String(value || "")) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash;
}

function getPreviewData(type, palette, productTitle, slug, category) {
  const presets = {
    pastel: ["#f8f9fc","#9aa7d8","#d6b8e8","Hola de nuevo","Correo electrónico","Contraseña","minimal"],
    aurora: ["#10101b","#8c63ff","#ff70b7","Welcome back","you@example.com","••••••••","glass"],
    corporate: ["#f8fafc","#1e3a8a","#64748b","Iniciar sesión","nombre@empresa.com","••••••••","minimal"],
    vibrant: ["#171124","#ff4f9a","#6d5dfc","Hola de nuevo","Correo electrónico","Contraseña","split"],
    cyber: ["#070810","#00f0ff","#ff0055","NIGHT_CITY","NETRUNNER_NAME","••••••••","neon"],
    liquid: ["#0a1420","#9be7ff","#d39bff","Welcome back","you@example.com","••••••••","glass"],
    "dark-glass": ["#090b12","#9b8cff","#00c2ff","Welcome back","Email","••••••••","glass"],
    fintech: ["#f4f7f5","#123b2a","#5c8d73","Secure access","you@example.com","••••••••","minimal"],
    "gradient-flow": ["#17152a","#ff6b9d","#b84dff","Hello again!","Email address","••••••••","split"],
    "minimal-pro": ["#ffffff","#111827","#8b93a5","Welcome back","Email address","••••••••","minimal"],
    neon: ["#07090d","#53f6c7","#26313d","Access terminal","EMAIL","••••••••","neon"],
    "split-modern": ["#111318","#343c4d","#8a96aa","Sign in","Email","••••••••","split"]
  };

  const preset = presets[type];
  const selected = hashText(slug || productTitle) % 20;
  const variant = "layout-" + selected;
  if (preset) return { bg:preset[0], accent:preset[1], accent2:preset[2], heading:preset[3], email:preset[4], password:preset[5], variant };

  const colors = Array.isArray(palette) ? palette : [];
  let variant = "editorial";
  if (category === "Glass") variant = "glass";
  else if (category === "Futuristic") variant = "neon";
  else if (category === "Business" || category === "Minimal") variant = "minimal";
  else if (category === "Gradient") variant = "split";
  else if (category === "Soft") variant = "editorial";
  else variant = ["glass","split","minimal","editorial","neon"][hashText(slug) % 5];

  return {
    bg: safeColor(colors[0], "#111522"),
    accent: safeColor(colors[1], "#9b83ff"),
    accent2: safeColor(colors[2], "#58d8d0"),
    heading: productTitle || "Sign in",
    email: "Email address",
    password: "••••••••",
    variant
  };
}

function previewMarkup(type, palette, productTitle, slug = "", category = "") {
  const d = getPreviewData(type, palette, productTitle, slug, category);
  const title = escapeHtml(d.heading);
  const email = escapeHtml(d.email);
  const password = escapeHtml(d.password);
  const form = '<div class="preview-form"><div class="preview-label">EMAIL</div><div class="mini-field"><span class="field-icon">✉</span><span>' + email + '</span></div>' +
    '<div class="preview-label">PASSWORD</div><div class="mini-field"><span class="field-icon">⌑</span><span>' + password + '</span></div>' +
    '<div class="mini-button">CONTINUE <span>↗</span></div></div>';
  const layouts = [
    '<div class="layout-hero">01 / MEMBER ACCESS</div><div class="layout-display">A quieter<br>kind of login.</div>' + form,
    '<div class="layout-rail"><b>LF</b><span>01</span><span>02</span><span>03</span></div><div class="layout-main"><div class="preview-brand">ATELIER / PRIVATE</div><div class="phone-title">' + title + '</div>' + form + '</div>',
    '<div class="layout-banner">SECURE<br>YOUR SPACE</div><div class="layout-panel">' + form + '</div>',
    '<div class="layout-kicker">SYSTEM ACCESS // 07</div><div class="layout-code">AUTH<br><b>IDENTITY</b><br>REQUIRED_</div>' + form,
    '<div class="layout-orbit"><span>✳</span></div><div class="layout-float"><div class="phone-title">' + title + '</div>' + form + '</div>',
    '<div class="layout-side-art"><span>✦</span><b>GOOD<br>TO SEE<br>YOU.</b></div><div class="layout-side-form">' + form + '</div>',
    '<div class="layout-number">0' + ((hashText(slug)%9)+1) + '</div><div class="layout-heading">THE NEXT<br>CHAPTER.</div>' + form,
    '<div class="layout-topline"><span>LOGINFORGE</span><span>EST. 2026</span></div><div class="layout-editorial">' + title + '</div><div class="layout-rule"></div>' + form,
    '<div class="layout-grid"><i>✦</i><i>◌</i><i>▧</i><i>↗</i></div><div class="phone-title">' + title + '</div>' + form,
    '<div class="layout-stamp">VERIFIED<br>ACCESS</div><div class="layout-center"><div class="phone-title">' + title + '</div>' + form + '</div>',
    '<div class="layout-tabs"><b>01 ACCESS</b><span>02 PROFILE</span></div><div class="phone-title">' + title + '</div><div class="layout-subline">Your account, in focus.</div>' + form,
    '<div class="layout-vertical">SIGN IN / MEMBER PORTAL / PRIVATE AREA</div><div class="layout-vertical-content"><div class="phone-title">' + title + '</div>' + form + '</div>',
    '<div class="layout-bento"><b>01</b><span>WELCOME<br>BACK</span><i>✧</i></div><div class="phone-title">' + title + '</div>' + form,
    '<div class="layout-terminal"><span>● ONLINE</span><span>ENCRYPTION ACTIVE</span></div><div class="layout-terminal-title">> AUTH_USER</div>' + form,
    '<div class="layout-ticket"><span>MEMBER PASS</span><b>ACCESS<br>GRANTED?</b><i>✳</i></div>' + form,
    '<div class="layout-arch"><div class="layout-arch-inner">LF</div></div><div class="phone-title">' + title + '</div>' + form,
    '<div class="layout-quote">“Make room<br>for what<br>matters.”</div><div class="layout-form-card">' + form + '</div>',
    '<div class="layout-split-head"><span>HELLO.</span><b>01—26</b></div><div class="layout-split-body"><div class="phone-title">' + title + '</div>' + form + '</div>',
    '<div class="layout-rings"><i></i><i></i><i></i></div><div class="phone-title">' + title + '</div>' + form,
    '<div class="layout-masthead">THE PRIVATE<br>COLLECTION</div><div class="layout-mini-meta">MEMBER LOGIN · ISSUE Nº 01</div>' + form
  ];
  const content = layouts[hashText(slug || productTitle) % layouts.length];
  return '<div class="phone phone--' + d.variant + '" style="--bg:' + d.bg + ';--accent:' + d.accent + ';--accent2:' + d.accent2 + '">' +
    '<div class="phone-top"></div>' + content + '</div>';
}

function renderCard(product) {
  return '<article class="card">' +
    '<a class="preview" href="producto.html?style=' + encodeURIComponent(product.slug) + '" aria-label="Ver vista previa de ' + escapeHtml(product.title) + '">' +
    previewMarkup(product.preview, product.palette, product.title, product.slug, product.category) + '</a>' +
    '<div class="card-body"><div class="meta"><span>' + escapeHtml(product.category) + '</span><b>' + escapeHtml(product.price) + '</b></div>' +
    '<h3>' + escapeHtml(product.title) + '</h3><p>' + escapeHtml(product.description) + '</p>' +
    '<div class="tags">' + product.features.slice(0,3).map(f=>'<span>' + escapeHtml(f) + '</span>').join("") + '</div>' +
    '<a class="button small" href="producto.html?style=' + encodeURIComponent(product.slug) + '">Explorar diseño</a></div></article>';
}

function renderCatalog() {
  const root = document.getElementById("catalog");
  if (!root) return;
  const filters = document.getElementById("filters");
  const search = document.getElementById("catalog-search");
  const count = document.getElementById("catalog-count");
  const prev = document.getElementById("catalog-prev");
  const next = document.getElementById("catalog-next");
  const categories = ["Todos", ...new Set(CATALOG.map(p=>p.category))];
  let active = "Todos";
  let query = "";

  function updateCounter() {
    const cards = [...root.children];
    if (!cards.length) {
      count.textContent = "Sin resultados";
      return;
    }
    const first = Math.round(root.scrollLeft / Math.max(1, cards[0].getBoundingClientRect().width + 18)) + 1;
    const visible = Math.min(cards.length, first);
    count.textContent = visible + " / " + cards.length;
  }

  function draw() {
    const normalized = query.trim().toLocaleLowerCase("es");
    const products = CATALOG.filter(p =>
      (active === "Todos" || p.category === active) &&
      (!normalized || [p.title,p.description,p.category,...p.features].join(" ").toLocaleLowerCase("es").includes(normalized))
    );
    root.innerHTML = products.length ? products.map(renderCard).join("") :
      '<div class="empty-state"><strong>No encontramos ese diseño.</strong><span>Prueba con otro nombre o categoría.</span></div>';
    filters.innerHTML = categories.map(c=>'<button class="chip ' + (c===active?"active":"") + '" data-category="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>').join("");
    filters.querySelectorAll(".chip").forEach(btn => btn.addEventListener("click", () => {
      active = btn.dataset.category;
      root.scrollTo({left:0,behavior:"smooth"});
      draw();
    }));
    updateCounter();
  }

  search?.addEventListener("input", () => {
    query = search.value;
    root.scrollTo({left:0,behavior:"smooth"});
    draw();
  });
  prev?.addEventListener("click", () => root.scrollBy({left:-root.clientWidth * .82,behavior:"smooth"}));
  next?.addEventListener("click", () => root.scrollBy({left:root.clientWidth * .82,behavior:"smooth"}));
  root.addEventListener("scroll", updateCounter, {passive:true});
  root.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") root.scrollBy({left:300,behavior:"smooth"});
    if (event.key === "ArrowLeft") root.scrollBy({left:-300,behavior:"smooth"});
  });
  draw();
}

function renderProduct() {
  const root = document.getElementById("product");
  if (!root) return;
  const slug = new URLSearchParams(location.search).get("style");
  const p = productBySlug(slug) || CATALOG[0];

  root.innerHTML =
    '<section class="product-hero">' +
      '<div class="product-preview">' + previewMarkup(p.preview, p.palette, p.title, p.slug, p.category) +
        '<button class="product-nav product-nav--prev" type="button" aria-label="Diseño anterior" title="Diseño anterior">‹</button>' +
        '<button class="product-nav product-nav--next" type="button" aria-label="Siguiente diseño" title="Siguiente diseño">›</button></div>' +
      '<div class="product-copy"><div class="eyebrow">' + escapeHtml(p.category) + ' / FLUTTER UI</div>' +
      '<h1>' + escapeHtml(p.title) + '</h1><p class="lead">' + escapeHtml(p.description) + '</p>' +
      '<div class="price">' + escapeHtml(p.price) + '</div>' +
      '<div class="actions"><button class="button primary" disabled>Disponible próximamente</button></div>' +
      '<p class="note">Vista conceptual de la interfaz basada en la identidad visual de esta plantilla. No es una captura del render Flutter. La compra y descarga aún no están habilitadas; la autenticación real requiere integración.</p></div>' +
    '</section>' +
    '<section class="product-info"><div><div class="eyebrow">INCLUYE</div><h2>Características</h2></div>' +
    '<div class="feature-list">' + p.features.map(f=>'<div>✓ <span>' + escapeHtml(f) + '</span></div>').join("") + '</div></section>' +
    '';

  const currentIndex = Math.max(0, CATALOG.findIndex(item => item.slug === p.slug));
  const navigate = offset => {
    const nextIndex = (currentIndex + offset + CATALOG.length) % CATALOG.length;
    location.href = 'producto.html?style=' + encodeURIComponent(CATALOG[nextIndex].slug);
  };
  root.querySelector(".product-nav--prev").addEventListener("click", () => navigate(-1));
  root.querySelector(".product-nav--next").addEventListener("click", () => navigate(1));
}

renderCatalog();
renderProduct();
