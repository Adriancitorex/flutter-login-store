const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const catalog = fs.readFileSync(path.join(root, 'assets', 'catalog.js'), 'utf8');
const preview = fs.readFileSync(path.join(root, 'assets', 'preview.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'assets', 'site.css'), 'utf8');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const productHtml = fs.readFileSync(path.join(root, 'producto.html'), 'utf8');
const errors = [];
const expected = 101;

function readStringField(field) {
  const patterns = [
    new RegExp('\\\\b' + field + ':\\\\s*"([^"]+)"', 'g'),
    new RegExp('"' + field + '":\\\\s*"([^"]+)"', 'g')
  ];
  return patterns.flatMap(pattern => [...catalog.matchAll(pattern)].map(match => match[1]));
}

function checkUnique(name, values) {
  if (values.length !== expected) errors.push(name + ': se esperaban ' + expected + ' valores y hay ' + values.length);
  if (new Set(values).size !== values.length) errors.push(name + ': contiene valores duplicados');
}

const slugs = readStringField('slug');
const files = readStringField('file');
const compositions = readStringField('composition');
const motifs = readStringField('signatureMotif');
const typography = readStringField('typography');
const artDirections = readStringField('artDirection');

checkUnique('slugs', slugs);
checkUnique('archivos', files);
checkUnique('direcciones de arte', artDirections);
for (const [name, values] of [
  ['composiciones', compositions],
  ['motivos', motifs],
  ['tipografías', typography]
]) {
  if (values.length !== expected) errors.push(name + ': faltan metadatos en una o más fichas');
}
if (/Motivo gráfico propio|Sistema tipográfico distintivo|Composición exclusiva, no centrada/i.test(catalog)) {
  errors.push('hay metadatos genéricos pendientes de definir');
}

const layoutBlock = preview.match(/const layouts = \\[([\\s\\S]*?)\\n  \\];/);
const layoutCount = layoutBlock ? (layoutBlock[1].match(/'<div class="layout-/g) || []).length : 0;
if (layoutCount !== 22) errors.push('el catálogo de vistas previas debe tener 22 composiciones; detectadas: ' + layoutCount);
const cssLayouts = [...new Set([...css.matchAll(/\\.phone--layout-(\\d+)/g)].map(match => Number(match[1])))];
for (let i = 0; i < layoutCount; i++) {
  if (!cssLayouts.includes(i)) errors.push('falta el sistema visual CSS layout-' + i);
}

const motifTokens = [
  'botánica', 'topografía', 'collage', 'ondas y espectro', 'arcos arquitectónicos',
  'constelación', 'pista deportiva', 'trama textil', 'circuito electrónico',
  'relieve cerámico', 'escultura de metal'
];
for (const token of motifTokens) {
  if (!preview.includes('motif.includes("' + token + '")')) {
    errors.push('la vista previa no reconoce el motivo ' + token);
  }
}

const navigationChecks = [
  ['enlace de ficha desde el catálogo', /producto\\.html\\?style=/],
  ['búsqueda de producto por slug', /productBySlug\\(slug\\)/],
  ['navegación anterior y siguiente', /product-nav--prev[\\s\\S]*product-nav--next/],
  ['cambio de producto', /location\\.href = 'producto\\.html\\?style='/],
  ['aviso de vista conceptual', /Vista conceptual de la interfaz/],
  ['aviso de que no es captura Flutter', /No es una captura del render Flutter/]
];
for (const [name, pattern] of navigationChecks) {
  if (!pattern.test(preview)) errors.push('falta ' + name);
}
if (!indexHtml.includes('assets/catalog.js') || !indexHtml.includes('assets/preview.js')) {
  errors.push('la portada no carga el catálogo y las vistas previas');
}
if (!productHtml.includes('assets/catalog.js') || !productHtml.includes('assets/preview.js')) {
  errors.push('la ficha de producto no carga el catálogo y las vistas previas');
}

console.log('LoginForge: ' + slugs.length + '/' + expected + ' fichas; ' + new Set(slugs).size + ' slugs únicos; ' + new Set(files).size + ' archivos únicos.');
console.log('Direcciones de arte únicas: ' + new Set(artDirections).size + '/' + expected + '.');
console.log('Composiciones de vista previa: ' + layoutCount + '; estilos CSS disponibles: ' + cssLayouts.length + '.');
if (errors.length) {
  for (const error of errors) console.error('❌ ' + error);
  process.exitCode = 1;
} else {
  console.log('✅ Catálogo, metadatos, motivos, navegación y vistas conceptuales validados.');
}
