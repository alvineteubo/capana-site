// Traite les photos de ressources/photos/ vers public/images/ : recadrage, WebP, plusieurs tailles.
// Les originaux ne sont jamais modifiés. Aucune image n'est agrandie : on ne produit que des
// tailles inférieures ou égales à celle de la source.
// Génère aussi src/data/images.js, le catalogue des images utilisé par le site.
// Usage : npm run images
//
// Les quatre images à filigrane ou appartenant à un tiers (gamme-equipement-apicole,
// redaction-des-projets-agro, suivie-apicole, formation-technique-apicole) sont volontairement
// absentes de cette liste : elles ne doivent pas être utilisées telles quelles (voir CLAUDE.md).
import { mkdir, rm, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const SRC = 'ressources/photos'
const OUT = 'public/images'
const TAILLES = [320, 480, 640, 800, 960, 1280]
const QUALITE = 80

// crop : zone en pixels de la source { left, top, width, height } (sans recadrage si absent).
const IMAGES = [
  // A. Photos réelles de CAPANA
  { id: 'miel-1l', source: 'photo-miel-original.jpeg' },
  // Bocal 0,5 kg : cadré au-dessus du petit texte de l'étiquette, dont la lisibilité est mauvaise.
  // La photo sera à refaire (voir README).
  { id: 'miel-500g', source: 'miel-bocal-demi-litre.jpeg', crop: { left: 50, top: 330, width: 590, height: 772 } },
  { id: 'rucher', source: 'les-ruches.jpeg' },
  { id: 'rucher-paysage', source: 'les-ruches.jpeg', crop: { left: 0, top: 330, width: 768, height: 512 } },
  { id: 'ruches-jaunes', source: 'ruche-colonisee.jpeg' },
  { id: 'ruches-atelier', source: 'ruche-planches-bambou.jpeg' },
  { id: 'cellules-royales', source: 'noeud-abeille.jpeg' },
  { id: 'accompagnement', source: 'accompagner-les-porteurs-projet.jpeg' },
  // B. Illustrations génériques (jamais présentées comme des photos de CAPANA)
  { id: 'illustration-propolis', source: 'propolis.png' },
  { id: 'illustration-cire', source: 'cire-abeille.png' },
  { id: 'illustration-produits-ruche', source: 'produit-de-la-ruche.png' },
  { id: 'illustration-enfumoir', source: 'enfumoir-apicole.png' },
  { id: 'illustration-tenue', source: 'tenue-apicole.png' },
  { id: 'illustration-formation-theorique', source: 'formation-theorique.png' },
  { id: 'illustration-formation-pratique', source: 'formation-apiculture.png' },
]

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

const catalogue = {}

for (const { id, source, crop } of IMAGES) {
  let base = sharp(`${SRC}/${source}`).rotate()
  if (crop) base = base.extract(crop)
  const recadree = await base.toBuffer()
  const { width, height } = await sharp(recadree).metadata()

  const largeurs = [...TAILLES.filter((t) => t < width), width]
  for (const w of largeurs) {
    await sharp(recadree)
      .resize({ width: w, kernel: 'lanczos3', withoutEnlargement: true })
      .webp({ quality: QUALITE })
      .toFile(`${OUT}/${id}-${w}.webp`)
  }
  catalogue[id] = { base: `/images/${id}`, largeurs, largeur: width, hauteur: height }
  console.log(`${id.padEnd(34)} ${width}×${height}  tailles : ${largeurs.join(', ')}`)
}

// Image de partage (Open Graph, 1200×630) : la bouteille 1 L, photo intacte, centrée sur son propre
// arrière-plan flouté et éclairci. L'étiquette n'est ni retouchée ni recréée.
{
  const W = 1200
  const H = 630
  const fond = await sharp(`${SRC}/photo-miel-original.jpeg`)
    .resize(W, H, { fit: 'cover', position: 'centre' })
    .blur(36)
    .modulate({ brightness: 1.05 })
    .composite([{ input: { create: { width: W, height: H, channels: 4, background: '#f8f5ecb3' } } }])
    .toBuffer()
  const premierPlan = await sharp(`${SRC}/photo-miel-original.jpeg`).resize({ height: H }).toBuffer()
  await sharp(fond)
    .composite([{ input: premierPlan, gravity: 'centre' }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`${OUT}/og-miel-du-nde.jpg`)
  console.log('og-miel-du-nde.jpg'.padEnd(34), `${W}×${H}`)
}

const entete = `// Catalogue des images du site. FICHIER GÉNÉRÉ par \`npm run images\` : ne pas modifier à la main.
// Chaque entrée donne le chemin de base, les largeurs disponibles (fichiers <base>-<largeur>.webp)
// et les dimensions de la plus grande version.
`
await writeFile('src/data/images.js', `${entete}export const images = ${JSON.stringify(catalogue, null, 2)}\n`)
