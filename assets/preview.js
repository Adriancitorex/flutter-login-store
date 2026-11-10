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


function motifMarkup(signatureMotif, slug) {
  const motif = String(signatureMotif || "").toLocaleLowerCase("es");
  const slugKey = {
    pastel:"pastel", "aurora-glass":"aurora", corporate:"corporate", vibrant:"vibrant",
    cyberpunk:"cyberpunk", "liquid-glass":"liquid", "dark-glass":"dark", fintech:"fintech",
    "gradient-flow":"gradient", "minimal-pro":"minimal", neon:"neon", "split-modern":"split"
  };
  let key = slugKey[slug] || "minimal";
  if (motif.includes("botánica")) key = "botanical";
  else if (motif.includes("topografía")) key = "topography";
  else if (motif.includes("collage")) key = "collage";
  else if (motif.includes("ondas y espectro")) key = "waveform";
  else if (motif.includes("arcos arquitectónicos")) key = "architecture";
  else if (motif.includes("constelación")) key = "constellation";
  else if (motif.includes("pista deportiva")) key = "sport";
  else if (motif.includes("trama textil")) key = "textile";
  else if (motif.includes("circuito electrónico")) key = "circuit";
  else if (motif.includes("relieve cerámico")) key = "ceramic";
  else if (motif.includes("escultura de metal")) key = "metal";

  const drawings = {
    pastel: '<svg viewBox="0 0 100 100"><path d="M19 83C42 65 48 43 74 15M40 59C25 55 19 44 20 32C34 34 42 43 40 59ZM53 43C51 27 60 18 76 14C78 29 69 40 53 43ZM29 73C15 70 9 61 10 50C24 51 32 59 29 73Z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="82" cy="77" r="7" fill="currentColor" opacity=".3"/><circle cx="68" cy="88" r="3" fill="currentColor"/></svg>',
    aurora: '<svg viewBox="0 0 100 100"><path d="M4 24C25 4 42 47 62 25S88 7 98 16M2 43C23 22 43 65 63 44S88 26 99 35M1 63C24 43 42 84 65 62S88 46 100 54M5 82C28 63 47 99 69 79S91 63 98 70" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M8 17C33 2 45 36 67 18" stroke="currentColor" stroke-width="8" opacity=".12" fill="none"/></svg>',
    corporate: '<svg viewBox="0 0 100 100"><rect x="9" y="12" width="36" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="53" y="12" width="38" height="13" rx="2" fill="currentColor" opacity=".2"/><rect x="53" y="31" width="38" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 76V60H25V76M33 76V49H46V76M54 76V56H67V76M75 76V43H88V76" fill="none" stroke="currentColor" stroke-width="3"/><path d="M9 85H91" stroke="currentColor" stroke-width="2" opacity=".5"/></svg>',
    vibrant: '<svg viewBox="0 0 100 100"><path d="M5 15L42 5L25 48Z" fill="currentColor" opacity=".25"/><path d="M49 6L93 20L60 49Z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M9 62L39 39L52 92Z" fill="currentColor" opacity=".18"/><path d="M57 56L94 43L83 91L46 88Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M4 97L97 4" stroke="currentColor" stroke-width="2" opacity=".7"/></svg>',
    cyberpunk: '<svg viewBox="0 0 100 100"><path d="M5 8H95V92H5Z M5 29H95M5 51H95M5 73H95M27 8V92M51 8V92M75 8V92" stroke="currentColor" stroke-width="1" opacity=".28" fill="none"/><path d="M24 39L14 50L24 61M76 39L86 50L76 61M38 67L62 34" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"/><circle cx="51" cy="50" r="5" fill="currentColor"/></svg>',
    liquid: '<svg viewBox="0 0 100 100"><path d="M18 53C4 31 26 9 47 19C62 1 90 19 79 42C100 60 78 89 55 78C33 96 8 77 18 53Z" fill="currentColor" opacity=".17" stroke="currentColor" stroke-width="2.5"/><path d="M29 53C30 36 44 29 56 34C69 40 69 58 57 67C45 76 28 68 29 53Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="74" cy="18" r="5" fill="currentColor" opacity=".6"/></svg>',
    dark: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M72 22A34 34 0 1 1 28 78A28 28 0 1 0 72 22Z" fill="currentColor" opacity=".3"/><circle cx="78" cy="22" r="3" fill="currentColor"/><path d="M13 83L20 76M79 82L88 73" stroke="currentColor" stroke-width="2"/></svg>',
    fintech: '<svg viewBox="0 0 100 100"><path d="M10 84H92M15 78V57H29V78M39 78V40H53V78M63 78V22H77V78" fill="none" stroke="currentColor" stroke-width="3"/><path d="M12 47L34 35L49 43L84 12" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M73 12H84V23" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="34" cy="35" r="3" fill="currentColor"/></svg>',
    gradient: '<svg viewBox="0 0 100 100"><path d="M4 76C28 72 28 24 54 22S76 48 96 13M4 91C30 86 38 43 60 40S81 62 98 33M7 59C28 55 33 8 58 7S78 31 94 3" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" opacity=".8"/><path d="M10 12L90 90" stroke="currentColor" stroke-width="1.5" opacity=".45"/></svg>',
    minimal: '<svg viewBox="0 0 100 100"><path d="M14 80L50 12L86 80M28 57H72M20 88H80" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M50 12V88M9 94H91" stroke="currentColor" stroke-width="1" opacity=".35"/><circle cx="50" cy="57" r="4" fill="currentColor"/></svg>',
    neon: '<svg viewBox="0 0 100 100"><path d="M9 18H35V42H61V18H91M9 82H35V58H61V82H91M61 42H82V58" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="9" cy="18" r="5" fill="currentColor"/><circle cx="91" cy="18" r="5" fill="currentColor"/><circle cx="9" cy="82" r="5" fill="currentColor"/><circle cx="91" cy="82" r="5" fill="currentColor"/><circle cx="61" cy="50" r="6" fill="currentColor"/></svg>',
    split: '<svg viewBox="0 0 100 100"><path d="M8 8H47V92H8Z" fill="currentColor" opacity=".2"/><path d="M54 8H92V92H54Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M8 50H47M54 50H92" stroke="currentColor" stroke-width="1.5" opacity=".7"/><path d="M62 82V42A12 12 0 0 1 86 42V82" fill="none" stroke="currentColor" stroke-width="3"/></svg>',
    botanical: '<svg viewBox="0 0 100 100"><path d="M50 91C48 68 50 39 70 11M50 65C32 61 19 46 18 28C37 29 50 42 50 65ZM58 45C55 27 65 16 86 12C87 31 75 43 58 45ZM49 78C33 77 23 68 19 54" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M23 31L45 57M70 17L58 40" stroke="currentColor" stroke-width="1.3" opacity=".7"/></svg>',
    topography: '<svg viewBox="0 0 100 100"><path d="M-5 18C17 2 38 3 51 20S79 39 105 16M-5 31C20 13 37 15 51 32S80 51 105 29M-5 45C19 28 38 29 51 46S79 65 105 43M-5 59C20 42 39 43 52 60S80 79 105 57M-5 73C19 56 39 57 52 74S80 93 105 71M-5 87C20 70 39 71 52 88" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
    collage: '<svg viewBox="0 0 100 100"><path d="M8 15L55 7L44 51L6 57Z" fill="currentColor" opacity=".2" stroke="currentColor" stroke-width="2"/><path d="M57 12L94 29L70 61L45 48Z" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M13 63L48 54L61 93L17 88Z" fill="currentColor" opacity=".16"/><path d="M67 65L94 57L88 94L57 91Z" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    waveform: '<svg viewBox="0 0 100 100"><path d="M8 50H17L24 28L31 73L39 12L47 87L55 31L63 68L71 40L78 57H92" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 91H92" stroke="currentColor" stroke-width="1.5" opacity=".4"/></svg>',
    architecture: '<svg viewBox="0 0 100 100"><path d="M12 88V40A18 18 0 0 1 48 40V88M52 88V27A18 18 0 0 1 88 27V88M5 88H95M20 88V53M40 88V53M60 88V40M80 88V40" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M8 21H92" stroke="currentColor" stroke-width="1" opacity=".4"/></svg>',
    constellation: '<svg viewBox="0 0 100 100"><path d="M15 24L42 12L63 43L84 22L75 76L37 85L15 24Z" fill="none" stroke="currentColor" stroke-width="1.4" opacity=".65"/><circle cx="15" cy="24" r="4" fill="currentColor"/><circle cx="42" cy="12" r="3" fill="currentColor"/><circle cx="63" cy="43" r="5" fill="currentColor"/><circle cx="84" cy="22" r="3" fill="currentColor"/><circle cx="75" cy="76" r="4" fill="currentColor"/><circle cx="37" cy="85" r="3" fill="currentColor"/></svg>',
    sport: '<svg viewBox="0 0 100 100"><path d="M12 88C12 42 30 12 50 12S88 42 88 88M25 88C25 50 36 29 50 29S75 50 75 88M38 88C38 58 43 44 50 44S62 58 62 88" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="75" cy="20" r="12" fill="none" stroke="currentColor" stroke-width="2"/><path d="M75 20V12M75 20L82 24" stroke="currentColor" stroke-width="2"/></svg>',
    textile: '<svg viewBox="0 0 100 100"><path d="M8 18L92 18M8 38L92 38M8 58L92 58M8 78L92 78M18 8V92M38 8V92M58 8V92M78 8V92" stroke="currentColor" stroke-width="3" opacity=".65"/><path d="M8 18L18 8M28 38L38 28M48 58L58 48M68 78L78 68M18 28L28 18M38 48L48 38M58 68L68 58" stroke="var(--bg)" stroke-width="5"/></svg>',
    circuit: '<svg viewBox="0 0 100 100"><path d="M8 22H33V48H58V22H92M8 78H33V60H72V78H92M58 48H78V60" fill="none" stroke="currentColor" stroke-width="2.7"/><circle cx="8" cy="22" r="5" fill="currentColor"/><circle cx="92" cy="22" r="5" fill="currentColor"/><circle cx="8" cy="78" r="5" fill="currentColor"/><circle cx="92" cy="78" r="5" fill="currentColor"/><rect x="52" y="42" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    ceramic: '<svg viewBox="0 0 100 100"><path d="M13 55C7 32 29 11 49 24C65 5 91 23 82 47C99 65 77 91 55 78C32 95 7 78 13 55Z" fill="currentColor" opacity=".13" stroke="currentColor" stroke-width="2.5"/><path d="M25 55C25 41 37 34 49 41C61 34 75 44 72 57C68 72 49 77 38 67" fill="none" stroke="currentColor" stroke-width="2"/><path d="M34 27L49 41L66 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".7"/></svg>',
    metal: '<svg viewBox="0 0 100 100"><path d="M50 7L86 29L77 75L43 93L13 61L20 24Z" fill="currentColor" opacity=".12" stroke="currentColor" stroke-width="2.5"/><path d="M50 7L43 93M20 24L86 29M13 61L77 75M20 24L77 75M86 29L43 93" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M50 7L86 29L50 45Z" fill="currentColor" opacity=".28"/></svg>'
  };
  return '<div class="signature-art signature-art--' + key + '" aria-hidden="true">' + drawings[key] + '</div>';
}

function getPreviewData(type, palette, productTitle, slug, category, composition) {
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
  const compositionTypes = [...new Set(CATALOG.map(item => item.composition).filter(Boolean))];
  const compositionIndex = Math.max(0, compositionTypes.indexOf(composition));
  const variant = "layout-" + compositionIndex;
  if (preset) return { bg:preset[0], accent:preset[1], accent2:preset[2], heading:preset[3], email:preset[4], password:preset[5], variant, compositionIndex };

  const colors = Array.isArray(palette) ? palette : [];

  return {
    bg: safeColor(colors[0], "#111522"),
    accent: safeColor(colors[1], "#9b83ff"),
    accent2: safeColor(colors[2], "#58d8d0"),
    heading: productTitle || "Sign in",
    email: "Email address",
    password: "••••••••",
    variant,
    compositionIndex
  };
}

function previewMarkup(type, palette, productTitle, slug = "", category = "", composition = "", signatureMotif = "") {
  const d = getPreviewData(type, palette, productTitle, slug, category, composition);
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
    '<div class="layout-masthead">THE PRIVATE<br>COLLECTION</div><div class="layout-mini-meta">MEMBER LOGIN · ISSUE Nº 01</div>' + form,
    '<div class="layout-blueprint-head"><span>STUDIO / 22</span><b>01—ACCESS</b></div><div class="layout-blueprint-art"><i></i><i></i><i></i><b>' + title + '</b></div><div class="layout-blueprint-form">' + form + '</div>',
    '<div class="layout-floating-mark"><span>LF</span><i></i><b>WELCOME<br>TO YOUR<br>SPACE.</b></div><div class="layout-floating-form">' + form + '</div>'
  ];
  const content = layouts[d.compositionIndex % layouts.length];
  return '<div class="phone phone--' + d.variant + '" data-composition="' + escapeHtml(composition) + '" data-motif="' + escapeHtml(signatureMotif) + '" style="--bg:' + d.bg + ';--accent:' + d.accent + ';--accent2:' + d.accent2 + '">' +
    '<div class="phone-top"></div>' + motifMarkup(signatureMotif, slug) + content + '</div>';
}

function renderCard(product) {
  return '<article class="card">' +
    '<a class="preview" href="producto.html?style=' + encodeURIComponent(product.slug) + '" aria-label="Ver vista previa de ' + escapeHtml(product.title) + '">' +
    previewMarkup(product.preview, product.palette, product.title, product.slug, product.category, product.composition, product.signatureMotif) + '</a>' +
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
      '<div class="product-preview">' + previewMarkup(p.preview, p.palette, p.title, p.slug, p.category, p.composition, p.signatureMotif) +
        '<button class="product-nav product-nav--prev" type="button" aria-label="Diseño anterior" title="Diseño anterior">‹</button>' +
        '<button class="product-nav product-nav--next" type="button" aria-label="Siguiente diseño" title="Siguiente diseño">›</button></div>' +
      '<div class="product-copy"><div class="eyebrow">' + escapeHtml(p.category) + ' / FLUTTER UI</div>' +
      '<h1>' + escapeHtml(p.title) + '</h1><p class="lead">' + escapeHtml(p.description) + '</p>' +
      '<div class="price">' + escapeHtml(p.price) + '</div>' +
      '<div class="actions"><button class="button primary" disabled>Disponible próximamente</button></div>' +
      '<p class="note">Vista conceptual de la interfaz basada en la identidad visual de esta plantilla. No es una captura del render Flutter. La compra y descarga aún no están habilitadas; la autenticación real requiere integración.</p></div>' +
    '</section>' +
    '<section class="art-direction"><div><div class="eyebrow">DIRECCIÓN DE ARTE</div><h2>Una composición propia</h2><p>' + escapeHtml(p.composition || "Composición visual exclusiva") + '</p></div>' +
    '<div class="art-direction-details"><div><span>Motivo protagonista</span><b>' + escapeHtml(p.signatureMotif || "Motivo gráfico propio") + '</b></div><div><span>Sistema tipográfico</span><b>' + escapeHtml(p.typography || "Jerarquía tipográfica propia") + '</b></div></div></section>' +
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
