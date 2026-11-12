// Génère le favicon et les icônes (16, 32, 180, 512 px) à partir du logo officiel sans signature,
// sur fond blanc carré. Rien n'est redessiné : ce sont des recadrages et redimensionnements.
// - 16 et 32 px : le mot « CAPANA » y serait illisible, on utilise donc uniquement un recadrage
//   de l'alvéole jaune supérieure du logo.
// - 180 et 512 px : le logo complet.
// Prérequis : `npm run logo`. Usage : npm run icons
import { writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const LOGO = 'public/logo/capana-logo-480.png'
const BLANC = '#ffffff'
const meta = await sharp(LOGO).metadata()

// Alvéole supérieure : bande centrale, au-dessus du haut des lettres (environ 38 % de la hauteur).
const alveole = await sharp(LOGO)
  .extract({
    left: Math.round(meta.width * 0.31),
    top: 0,
    width: Math.round(meta.width * 0.385),
    height: Math.round(meta.height * 0.376),
  })
  .toBuffer()

async function carre(source, taille, marge) {
  const interieur = Math.round(taille * (1 - 2 * marge))
  const logo = await sharp(source)
    .resize({ width: interieur, height: interieur, fit: 'inside', kernel: 'lanczos3' })
    .toBuffer()
  return sharp({ create: { width: taille, height: taille, channels: 3, background: BLANC } })
    .composite([{ input: logo, gravity: 'centre' }])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

const sorties = {
  'favicon-16.png': await carre(alveole, 16, 0.06),
  'favicon-32.png': await carre(alveole, 32, 0.06),
  'apple-touch-icon.png': await carre(LOGO, 180, 0.1),
  'icon-512.png': await carre(LOGO, 512, 0.1),
}
for (const [nom, tampon] of Object.entries(sorties)) {
  await writeFile(`public/${nom}`, tampon)
  console.log(nom)
}

// favicon.ico : conteneur ICO contenant les PNG 16 et 32 px.
const pngs = [sorties['favicon-16.png'], sorties['favicon-32.png']]
const tailles = [16, 32]
const entete = Buffer.alloc(6 + 16 * pngs.length)
entete.writeUInt16LE(0, 0)
entete.writeUInt16LE(1, 2)
entete.writeUInt16LE(pngs.length, 4)
let decalage = entete.length
pngs.forEach((png, i) => {
  const o = 6 + 16 * i
  entete.writeUInt8(tailles[i], o)
  entete.writeUInt8(tailles[i], o + 1)
  entete.writeUInt16LE(1, o + 4)
  entete.writeUInt16LE(32, o + 6)
  entete.writeUInt32LE(png.length, o + 8)
  entete.writeUInt32LE(decalage, o + 12)
  decalage += png.length
})
await writeFile('public/favicon.ico', Buffer.concat([entete, ...pngs]))
console.log('favicon.ico')
