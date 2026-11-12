// Génère les versions web du logo officiel à partir des JPEG de ressources/logo/.
// Traitement purement technique : recadrage des marges blanches et fond blanc rendu
// transparent. Formes, couleurs et proportions restent celles du logo d'origine.
// Usage : npm run logo
import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const SOURCES = [
  { input: 'ressources/logo/capana-logo.jpeg', name: 'capana-logo', widths: [160, 320, 480] },
  {
    input: 'ressources/logo/capana-logo-signature.jpeg',
    name: 'capana-logo-signature',
    widths: [240, 480],
  },
]
const OUT_DIR = 'public/logo'
// En dessous de ce seuil d'opacité, le pixel est considéré comme du fond (bruit JPEG).
// Les sources font environ 594 px et 479 px de large : inutile de générer plus grand.
const NOISE_FLOOR = 0.06

// « Blanc vers alpha » : on retrouve la couleur et l'opacité qui, posées sur du blanc,
// redonnent exactement le pixel d'origine. Les bords lissés deviennent semi-transparents
// au lieu de garder un liseré blanc sur fond crème ou vert.
function whiteToAlpha(rgb, pixels) {
  const out = Buffer.alloc(pixels * 4)
  for (let i = 0; i < pixels; i++) {
    const r = rgb[i * 3] / 255
    const g = rgb[i * 3 + 1] / 255
    const b = rgb[i * 3 + 2] / 255
    let a = 1 - Math.min(r, g, b)
    if (a < NOISE_FLOOR) a = 0
    const unmix = (c) => (a === 0 ? 0 : Math.round(Math.min(1, Math.max(0, (c - (1 - a)) / a)) * 255))
    out[i * 4] = unmix(r)
    out[i * 4 + 1] = unmix(g)
    out[i * 4 + 2] = unmix(b)
    out[i * 4 + 3] = Math.round(a * 255)
  }
  return out
}

await mkdir(OUT_DIR, { recursive: true })

for (const { input, name, widths } of SOURCES) {
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true })
  const rgba = whiteToAlpha(data, info.width * info.height)
  const trimmed = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .png()
    .toBuffer()
  const meta = await sharp(trimmed).metadata()
  console.log(`${name} : ${meta.width} × ${meta.height} px après recadrage`)

  for (const width of widths) {
    const resized = sharp(trimmed).resize({ width, kernel: 'lanczos3' })
    await resized.clone().png({ compressionLevel: 9 }).toFile(`${OUT_DIR}/${name}-${width}.png`)
    await resized.clone().webp({ quality: 92, alphaQuality: 100 }).toFile(`${OUT_DIR}/${name}-${width}.webp`)
  }
}
