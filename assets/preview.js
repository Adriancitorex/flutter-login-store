function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}

function previewMarkup(type) {
  const data = {
    pastel: ["#f8f9fa","#c9ccd5","#b8c0ff","Bienvenido","Correo electrónico","Contraseña"],
    aurora: ["#10101b","#8c63ff","#ff70b7","Welcome back","you@example.com","••••••••"],
    corporate: ["#f8fafc","#1e3a8a","#64748b","Iniciar Sesión","nombre@empresa.com","••••••••"],
    vibrant: ["#11101b","#ff4f9a","#6d5dfc","Hola de nuevo","Correo electrónico","Contraseña"],
    cyber: ["#070810","#00f0ff","#ff0055","NIGHT_CITY","NETRUNNER_NAME","••••••••"],
    liquid: ["#0a1420","#9be7ff","#d39bff","Welcome back","you@example.com","••••••••"],
    "dark-glass": ["#090b12","#9b8cff","#00c2ff","Welcome back","Email","••••••••"],
    fintech: ["#f4f7f5","#123b2a","#5c8d73","Secure access","you@example.com","••••••••"],
    "gradient-flow": ["#5b5fef","#ff6b9d","#b84dff","Hello again!","Email address","••••••••"],
    "minimal-pro": ["#ffffff","#111111","#777777","Welcome back","Email address","••••••••"],
    neon: ["#07090d","#53f6c7","#26313d","Access terminal","EMAIL","••••••••"],
    "split-modern": ["#111111","#343434","#777777","Sign in","Email","••••••••"]
  }[type] || ["#10131c","#8c63ff","#ff70b7","Sign in","Email","Password"];

  return '<div class="phone" style="--bg:'+data[0]+';--accent:'+data[1]+';--accent2:'+data[2]+'">'+
    '<div class="phone-top"></div><div class="mini-icon">✦</div>'+
    '<div class="phone-title">'+escapeHtml(data[3])+'</div>'+
    '<div class="phone-sub">Sign in to continue</div>'+
    '<div class="mini-field">◉ <span>'+escapeHtml(data[4])+'</span></div>'+
    '<div class="mini-field">▣ <span>'+escapeHtml(data[5])+'</span></div>'+
    '<div class="mini-button">SIGN IN</div>'+
    '<div class="mini-link">Forgot password?</div></div>';
}

function renderCard(product) {
  return '<article class="card">'+
    '<a class="preview" href="producto.html?style='+encodeURIComponent(product.slug)+'">'+previewMarkup(product.preview)+'</a>'+
    '<div class="card-body"><div class="meta"><span>'+escapeHtml(product.category)+'</span><b>'+escapeHtml(product.price)+'</b></div>'+
    '<h3>'+escapeHtml(product.title)+'</h3><p>'+escapeHtml(product.description)+'</p>'+
    '<div class="tags">'+product.features.slice(0,3).map(f=>'<span>'+escapeHtml(f)+'</span>').join("")+'</div>'+
    '<a class="button small" href="producto.html?style='+encodeURIComponent(product.slug)+'">Ver plantilla</a></div></article>';
}

function renderCatalog() {
  const root = document.getElementById("catalog");
  if (!root) return;
  const filters = document.getElementById("filters");
  const categories = ["Todos", ...new Set(CATALOG.map(p=>p.category))];
  let active = "Todos";

  function draw() {
    root.innerHTML = CATALOG.filter(p=>active==="Todos" || p.category===active).map(renderCard).join("");
    filters.innerHTML = categories.map(c=>'<button class="chip '+(c===active?"active":"")+'" data-category="'+escapeHtml(c)+'">'+escapeHtml(c)+'</button>').join("");
    filters.querySelectorAll(".chip").forEach(btn => btn.addEventListener("click", () => {
      active = btn.dataset.category;
      draw();
    }));
  }
  draw();
}

function renderProduct() {
  const root = document.getElementById("product");
  if (!root) return;
  const slug = new URLSearchParams(location.search).get("style");
  const p = productBySlug(slug) || CATALOG[0];

  root.innerHTML =
    '<section class="product-hero">'+
      '<div class="product-preview">'+previewMarkup(p.preview)+'</div>'+
      '<div class="product-copy"><div class="eyebrow">'+escapeHtml(p.category)+'</div>'+
      '<h1>'+escapeHtml(p.title)+'</h1><p class="lead">'+escapeHtml(p.description)+'</p>'+
      '<div class="price">'+escapeHtml(p.price)+'</div>'+
      '<div class="actions"><button class="button primary" disabled>Comprar — próximamente</button></div>'+
      '<p class="note">Incluye la interfaz Flutter y los archivos de la plantilla descritos en cada producto.</p></div>'+
    '</section>'+
    '<section class="product-info"><div><div class="eyebrow">INCLUYE</div><h2>Lo que recibes</h2></div>'+
    '<div class="feature-list">'+p.features.map(f=>'<div>✓ <span>'+escapeHtml(f)+'</span></div>').join("")+'</div></section>';
}

renderCatalog();
renderProduct();
