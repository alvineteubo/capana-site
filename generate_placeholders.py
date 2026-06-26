#!/usr/bin/env python3
"""
Génère les images SVG placeholder pour CAPANA.
Chaque image reproduit la palette graphique du site et indique
clairement le sujet photographique à venir.
"""

import os, math

BASE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "images")

# ── Hexgrid texture ───────────────────────────────────────────────────────────
def hexgrid(w, h, r=55, op=0.05):
    rh = r * math.sqrt(3)
    s = f'<g stroke="rgba(255,255,255,{op})" stroke-width="1" fill="none">'
    for row in range(-1, int(h / rh) + 3):
        for col in range(-1, int(w / (r * 1.5)) + 3):
            cx = col * r * 1.5
            cy = row * rh + (col % 2) * rh / 2
            pts = " ".join(
                f"{cx + r*math.cos(i*math.pi/3):.1f},{cy + r*math.sin(i*math.pi/3):.1f}"
                for i in range(6)
            )
            s += f'<polygon points="{pts}"/>'
    s += '</g>'
    return s

# ── SVG wrapper ───────────────────────────────────────────────────────────────
def make_svg(w, h, c1, c2, icon_svg, title, subtitle=""):
    cx, cy = w // 2, h // 2
    grid = hexgrid(w, h, r=max(38, min(w, h) // 8))
    fs = max(10, min(14, w // 85))
    ty = h - (36 if h > 250 else 20)
    sub = (
        f'<text x="{w//2}" y="{ty + fs + 5}" text-anchor="middle" '
        f'font-family="Georgia,serif" font-size="{max(9, fs-2)}" '
        f'fill="rgba(255,255,255,0.28)" letter-spacing="2">{subtitle.upper()}</text>'
        if subtitle else ""
    )
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">
<defs>
  <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="{c1}"/>
    <stop offset="100%" stop-color="{c2}"/>
  </linearGradient>
</defs>
<rect width="{w}" height="{h}" fill="url(#g)"/>
{grid}
<g transform="translate({cx},{cy})">{icon_svg}</g>
<text x="{w//2}" y="{ty}" text-anchor="middle"
  font-family="Georgia,Times New Roman,serif" font-size="{fs}"
  fill="rgba(255,255,255,0.45)" letter-spacing="2">{title.upper()}</text>
{sub}
</svg>"""

def write(folder, fname, *args):
    path = os.path.join(BASE, folder, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(make_svg(*args))
    print(f"  OK  {folder}/{fname}")

# ── Icon SVG snippets (centred at 0,0) ───────────────────────────────────────

W = "rgba(255,255,255,0.55)"   # white medium
WL = "rgba(255,255,255,0.22)"  # white low
WH = "rgba(255,255,255,0.75)"  # white high
GOLD_SVG = "rgba(200,138,10,0.65)"

HIVE = f"""
<polygon points="0,-34 29.4,-17 29.4,17 0,34 -29.4,17 -29.4,-17"
  fill="{WL}" stroke="{W}" stroke-width="2.5"/>
<polygon points="0,-16 13.8,-8 13.8,8 0,16 -13.8,8 -13.8,-8"
  fill="{WL}" stroke="{WH}" stroke-width="2"/>
<line x1="0" y1="-34" x2="0" y2="-52" stroke="{W}" stroke-width="2"/>
<circle cx="0" cy="-56" r="5" fill="{W}"/>
<circle cx="-24" cy="20" r="4" fill="{W}" opacity="0.6"/>
<circle cx="24" cy="20" r="4" fill="{W}" opacity="0.6"/>
<circle cx="0" cy="38" r="3" fill="{W}" opacity="0.4"/>
"""

JAR = f"""
<rect x="-23" y="-44" width="46" height="11" rx="5"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="-17" y="-35" width="34" height="9" rx="3"
  fill="{WL}" stroke="{W}" stroke-width="1"/>
<rect x="-30" y="-26" width="60" height="62" rx="11"
  fill="{WL}" stroke="{W}" stroke-width="2"/>
<rect x="-20" y="-16" width="40" height="38" rx="7"
  fill="{GOLD_SVG}"/>
<text x="0" y="12" text-anchor="middle"
  font-family="Georgia,serif" font-size="11"
  fill="rgba(255,255,255,0.8)" font-weight="700" letter-spacing="1">MIEL</text>
"""

PERSON = f"""
<circle cx="0" cy="-50" r="19" fill="{WL}" stroke="{W}" stroke-width="2"/>
<circle cx="0" cy="-50" r="27" fill="none" stroke="{WL}" stroke-width="2.5"/>
<rect x="-24" y="-29" width="48" height="54" rx="11"
  fill="{WL}" stroke="{W}" stroke-width="2"/>
<rect x="-44" y="-23" width="20" height="13" rx="7"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="24" y="-23" width="20" height="13" rx="7"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
"""

ROWS_HIVES = f"""
<rect x="-72" y="-14" width="30" height="38" rx="4"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="-72" y="-28" width="30" height="12" rx="3"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="-35" y="-18" width="34" height="42" rx="4"
  fill="{WL}" stroke="{WH}" stroke-width="2"/>
<rect x="-35" y="-32" width="34" height="12" rx="3"
  fill="{WL}" stroke="{WH}" stroke-width="2"/>
<rect x="6" y="-14" width="30" height="38" rx="4"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="6" y="-28" width="30" height="12" rx="3"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="42" y="-10" width="28" height="34" rx="4"
  fill="{WL}" stroke="{W}" stroke-width="1"/>
<rect x="42" y="-22" width="28" height="10" rx="3"
  fill="{WL}" stroke="{W}" stroke-width="1"/>
<line x1="-82" y1="28" x2="82" y2="28" stroke="{W}" stroke-width="2"/>
<circle cx="-14" cy="-6" r="3" fill="{WH}"/>
<circle cx="18" cy="-22" r="3" fill="{WH}"/>
<circle cx="-50" cy="-20" r="2.5" fill="{W}" opacity="0.7"/>
"""

HARVEST = f"""
<circle cx="0" cy="0" r="36" fill="{WL}" stroke="{W}" stroke-width="2"/>
<rect x="-13" y="-26" width="26" height="52" rx="4"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<path d="M38,-22 Q46,-8 42,10 Q38,22 44,36"
  stroke="{GOLD_SVG}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M46,-16 Q54,-4 50,14" stroke="{GOLD_SVG}"
  stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
<rect x="30" y="38" width="24" height="30" rx="7"
  fill="{GOLD_SVG}" stroke="rgba(200,138,10,0.8)" stroke-width="1.5"/>
<rect x="32" y="28" width="20" height="12" rx="4"
  fill="{GOLD_SVG}"/>
"""

WAX = f"""
<rect x="-44" y="-18" width="88" height="40" rx="9"
  fill="{WL}" stroke="{W}" stroke-width="2"/>
<polygon points="-44,-18 44,-18 30,-38 -58,-38"
  fill="{WL}" stroke="{W}" stroke-width="1.5" opacity="0.7"/>
<polygon points="44,-18 44,22 58,8 58,-32"
  fill="{WL}" stroke="{W}" stroke-width="1" opacity="0.5"/>
<circle cx="0" cy="2" r="12" fill="{WL}" stroke="{W}" stroke-width="1"/>
<circle cx="-22" cy="2" r="7" fill="{WL}" stroke="{W}" stroke-width="1" opacity="0.7"/>
<circle cx="22" cy="2" r="7" fill="{WL}" stroke="{W}" stroke-width="1" opacity="0.7"/>
"""

PROPOLIS = f"""
<ellipse cx="-16" cy="-12" rx="28" ry="18"
  fill="{WL}" stroke="{W}" stroke-width="1.5"
  transform="rotate(-18,-16,-12)"/>
<ellipse cx="22" cy="8" rx="22" ry="14"
  fill="{WL}" stroke="{W}" stroke-width="1.5"
  transform="rotate(12,22,8)"/>
<ellipse cx="-6" cy="28" rx="17" ry="11"
  fill="{WL}" stroke="{W}" stroke-width="1.5"
  transform="rotate(-6,-6,28)"/>
<ellipse cx="4" cy="0" rx="9" ry="6"
  fill="{WH}" opacity="0.2"/>
"""

EQUIP_ALL = f"""
<rect x="-68" y="-12" width="30" height="40" rx="4"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="-68" y="-25" width="30" height="11" rx="3"
  fill="{WL}" stroke="{W}" stroke-width="1"/>
<circle cx="0" cy="12" r="28" fill="{WL}" stroke="{W}" stroke-width="2"/>
<path d="M0,-4 Q10,-16 0,-28 Q-10,-16 0,-4"
  fill="{W}" opacity="0.4" stroke="none"/>
<path d="M14,2 Q24,-8 22,-22" stroke="{W}" stroke-width="2"
  fill="none" stroke-linecap="round" opacity="0.6"/>
<rect x="45" y="-22" width="24" height="56" rx="5"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<ellipse cx="57" cy="36" rx="16" ry="10"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
"""

SUIT = f"""
<ellipse cx="0" cy="-46" rx="19" ry="21"
  fill="{WL}" stroke="{W}" stroke-width="2"/>
<ellipse cx="0" cy="-46" rx="13" ry="15"
  fill="rgba(0,0,0,0.2)"/>
<rect x="-25" y="-23" width="50" height="60" rx="11"
  fill="{WL}" stroke="{W}" stroke-width="2"/>
<rect x="-46" y="-17" width="21" height="15" rx="7"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="25" y="-17" width="21" height="15" rx="7"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="-19" y="38" width="15" height="22" rx="6"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="4" y="38" width="15" height="22" rx="6"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
"""

SMOKER = f"""
<rect x="-17" y="-8" width="34" height="48" rx="7"
  fill="{WL}" stroke="{W}" stroke-width="2"/>
<ellipse cx="25" cy="24" rx="17" ry="12"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="-15" y="-32" width="24" height="26" rx="5"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<path d="M2,-36 Q-7,-50 2,-62 Q11,-50 20,-62 Q11,-72 7,-82"
  stroke="{W}" stroke-width="2" fill="none"
  stroke-linecap="round" opacity="0.55"/>
"""

DOC = f"""
<rect x="-30" y="-44" width="60" height="76" rx="4"
  fill="{WL}" stroke="{W}" stroke-width="2"/>
<polygon points="14,-44 30,-44 30,-28 14,-28"
  fill="{WL}" stroke="{W}" stroke-width="1" opacity="0.6"/>
<line x1="-18" y1="-24" x2="8" y2="-24" stroke="{W}" stroke-width="1.5"/>
<line x1="-18" y1="-14" x2="18" y2="-14" stroke="{W}" stroke-width="1.5"/>
<line x1="-18" y1="-4"  x2="18" y2="-4"  stroke="{W}" stroke-width="1.5"/>
<line x1="-18" y1="6"   x2="12" y2="6"   stroke="{W}" stroke-width="1.5"/>
<line x1="-18" y1="16"  x2="18" y2="16"  stroke="{W}" stroke-width="1"/>
<path d="M10,26 L24,12 L28,16 L14,30 Z"
  fill="{GOLD_SVG}"/>
"""

PEOPLE = f"""
<circle cx="-30" cy="-42" r="13" fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="-43" y="-27" width="26" height="40" rx="7"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<circle cx="0" cy="-46" r="15" fill="{WL}" stroke="{WH}" stroke-width="2"/>
<rect x="-15" y="-29" width="30" height="44" rx="8"
  fill="{WL}" stroke="{WH}" stroke-width="2"/>
<circle cx="30" cy="-42" r="13" fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="17" y="-27" width="26" height="40" rx="7"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<line x1="-58" y1="18" x2="58" y2="18" stroke="{W}" stroke-width="2"/>
<polygon points="-52,-52 -44,-68 -36,-52" fill="{WL}" stroke="{W}" stroke-width="1" opacity="0.4"/>
"""

AGRO = f"""
<circle cx="-22" cy="-32" r="13" fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="-35" y="-17" width="26" height="38" rx="7"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<circle cx="22" cy="-36" r="13" fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<rect x="9" y="-21" width="26" height="38" rx="7"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<line x1="-8" y1="-26" x2="8" y2="-26"
  stroke="{WH}" stroke-width="2.5" stroke-linecap="round"/>
<rect x="32" y="-52" width="20" height="26" rx="3"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<line x1="35" y1="-46" x2="49" y2="-46" stroke="{W}" stroke-width="1"/>
<line x1="35" y1="-40" x2="49" y2="-40" stroke="{W}" stroke-width="1"/>
<path d="M-58,22 Q-48,4 -38,22 Q-28,4 -18,22"
  stroke="{W}" stroke-width="2" fill="none" opacity="0.5"/>
<path d="M26,22 Q36,4 46,22 Q56,4 66,22"
  stroke="{W}" stroke-width="2" fill="none" opacity="0.5"/>
"""

FIELD = f"""
<circle cx="0" cy="-42" r="15" fill="{WL}" stroke="{WH}" stroke-width="2"/>
<rect x="-17" y="-25" width="34" height="48" rx="9"
  fill="{WL}" stroke="{WH}" stroke-width="2"/>
<line x1="17" y1="-18" x2="44" y2="-34"
  stroke="{WH}" stroke-width="2.5" stroke-linecap="round"/>
<path d="M-62,24 Q-52,6 -42,24 Q-32,6 -22,24"
  stroke="{W}" stroke-width="2" fill="none" opacity="0.5"/>
<path d="M28,24 Q38,6 48,24 Q58,6 68,24"
  stroke="{W}" stroke-width="2" fill="none" opacity="0.5"/>
<rect x="26" y="-42" width="20" height="28" rx="3"
  fill="{WL}" stroke="{W}" stroke-width="1.5"/>
<line x1="29" y1="-36" x2="43" y2="-36" stroke="{W}" stroke-width="1"/>
<line x1="29" y1="-28" x2="43" y2="-28" stroke="{W}" stroke-width="1"/>
"""

# ── Files to generate ─────────────────────────────────────────────────────────
# (folder, filename, w, h, color1, color2, icon, title, subtitle)

FILES = [
    # ── home/ ──────────────────────────────────────────────────────────────────
    ("home", "hero-rucher-bangangte.svg",
     1400, 520, "#2A2318", "#4A3A22", ROWS_HIVES,
     "Rucher de Bangangté · CAPANA", "Photo grand format · À remplacer"),

    ("home", "hero-miel-pots-recolte.svg",
     1400, 520, "#3B2E12", "#5A420E", JAR,
     "Pots de Miel CAPANA · Récolte", "Photo grand format · À remplacer"),

    ("home", "hero-formation-apicole.svg",
     1400, 520, "#1E2A14", "#2E4020", PEOPLE,
     "Formation Apicole · Terrain · Bangangté", "Photo grand format · À remplacer"),

    ("home", "fondateur-mbiagni-valery.svg",
     700, 520, "#C8BFA8", "#A89E80", PERSON,
     "M. Mbiagni Valéry · Fondateur CAPANA", "Portrait · À remplacer"),

    ("home", "rucher-colonies-miel.svg",
     700, 460, "#2A3A1A", "#1E2A12", HIVE,
     "Rucher CAPANA · Colonies · Miel", "Photo rucher · À remplacer"),

    ("home", "vue-rucher-moderne.svg",
     700, 460, "#C0C4B0", "#A4A890", ROWS_HIVES,
     "Vue du Rucher Moderne · Bangangté", "Photo rucher · À remplacer"),

    ("home", "rucher-recolte-miel.svg",
     700, 460, "#C8C0A8", "#AEA88A", HARVEST,
     "Récolte du Miel · Rucher CAPANA", "Photo récolte · À remplacer"),

    # ── products/ ──────────────────────────────────────────────────────────────
    ("products", "miel-local-bangangte.svg",
     400, 200, "#D4BC7A", "#B89A42", JAR,
     "Miel Local · Bangangté", ""),

    ("products", "cire-abeille-capana.svg",
     400, 200, "#C8BF9E", "#A89E7A", WAX,
     "Cire d'Abeille · Naturelle", ""),

    ("products", "propolis-capana.svg",
     400, 200, "#B8A87A", "#9A8E5A", PROPOLIS,
     "Propolis · Brute", ""),

    ("products", "gamme-produits-capana.svg",
     700, 460, "#D4BC7A", "#B89A42", JAR,
     "Gamme Produits CAPANA · Miel · Cire · Propolis", "Photo gamme · À remplacer"),

    ("products", "pot-miel-local-capana.svg",
     700, 480, "#D4BC7A", "#B89A42", JAR,
     "Miel Local de Bangangté · 100% Naturel", "Photo produit · À remplacer"),

    ("products", "cire-abeille-brute.svg",
     700, 480, "#C8BF9E", "#A89E7A", WAX,
     "Cire d'Abeille · Naturelle · Brute", "Photo produit · À remplacer"),

    ("products", "propolis-brute-capana.svg",
     700, 480, "#B8A87A", "#9A8E5A", PROPOLIS,
     "Propolis Brute · CAPANA", "Photo produit · À remplacer"),

    ("products", "equipements-apicoles.svg",
     700, 460, "#D0C4AE", "#B8AA90", EQUIP_ALL,
     "Équipements Apicoles · CAPANA", "Photo matériel · À remplacer"),

    ("products", "ruche-moderne-capana.svg",
     700, 260, "#C8BFA8", "#B0A88C", ROWS_HIVES,
     "Ruche Moderne · CAPANA", "Photo équipement · À remplacer"),

    ("products", "ruche-moderne.svg",
     280, 150, "#C8BFA8", "#B0A88C", ROWS_HIVES,
     "Ruches", ""),

    ("products", "ruches-colonisees-capana.svg",
     700, 260, "#BEB5A0", "#A8A08A", HIVE,
     "Ruches Colonisées · Colonies Actives", "Photo équipement · À remplacer"),

    ("products", "ruches-colonisees.svg",
     280, 150, "#BEB5A0", "#A8A08A", HIVE,
     "Colonisées", ""),

    ("products", "enfumoirs-apicoles.svg",
     700, 260, "#B4AB96", "#9C9480", SMOKER,
     "Enfumoirs Apicoles", "Photo équipement · À remplacer"),

    ("products", "tenues-apicoles-completes.svg",
     700, 260, "#ABA290", "#928A78", SUIT,
     "Tenues Apicoles Complètes", "Photo équipement · À remplacer"),

    ("products", "tenues-apicoles.svg",
     280, 150, "#ABA290", "#928A78", SUIT,
     "Tenues", ""),

    # ── formations/ ────────────────────────────────────────────────────────────
    ("formations", "formation-apicole-terrain.svg",
     700, 460, "#C0C4B0", "#A4A890", PEOPLE,
     "Formation Apicole · Terrain · CAPANA", "Photo formation · À remplacer"),

    ("formations", "participants-formation-rucher.svg",
     700, 380, "#2A3A1A", "#1E2A12", PEOPLE,
     "Participants Formation · Rucher CAPANA", "Photo formation · À remplacer"),

    # ── services/ ──────────────────────────────────────────────────────────────
    ("services", "accompagnement-agro-pastoral.svg",
     700, 460, "#C0C4B0", "#A4A890", AGRO,
     "Accompagnement · Projet Agro-Pastoral", "Photo terrain · À remplacer"),

    ("services", "redaction-projet-agro.svg",
     380, 180, "#C0C4B0", "#A4A890", DOC,
     "Rédaction · Projet Agro", ""),

    ("services", "formation-agro-terrain.svg",
     380, 180, "#C0C4B0", "#A4A890", FIELD,
     "Formation · Terrain", ""),

    ("services", "suivi-projet-terrain.svg",
     380, 180, "#C0C4B0", "#A4A890", FIELD,
     "Suivi · Terrain", ""),
]

# ── Run ───────────────────────────────────────────────────────────────────────
print("Generation des images placeholder CAPANA...\n")
for entry in FILES:
    write(*entry)
print(f"\n[OK] {len(FILES)} images SVG generees.")
