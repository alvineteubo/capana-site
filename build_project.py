#!/usr/bin/env python3
"""Convert monolithic CAPANA HTML prototype to multi-page static site."""
import re
from pathlib import Path

SRC = Path(r"c:\Users\ADVANCE-IT\Downloads\CAPANA_Site_Complet (1).html")
ROOT = Path(r"c:\Users\ADVANCE-IT\Downloads\CAPANA")

PAGES = {
    "index": {"file": "index.html", "title": "Accueil", "desc": "CAPANA — Apiculture moderne à Bangangté. Miel 100 % naturel et traçable, formations apicoles, équipements et services agro-pastoraux."},
    "a-propos": {"file": "a-propos.html", "title": "À propos", "desc": "Découvrez l'histoire de CAPANA, fondée en 2026 par M. Mbiagni Valéry à Bangangté."},
    "produits": {"file": "produits.html", "title": "Produits de la ruche", "desc": "Miel local, cire d'abeille et propolis — produits 100 % naturels du rucher CAPANA à Bangangté."},
    "equipements": {"file": "equipements.html", "title": "Équipements apicoles", "desc": "Vente et location de ruches modernes, ruches colonisées, enfumoirs et tenues apicoles."},
    "formations": {"file": "formations.html", "title": "Formations apicoles", "desc": "Formations pratiques en apiculture sur rucher opérationnel à Bangangté."},
    "services": {"file": "services.html", "title": "Services agro-pastoraux", "desc": "Rédaction, formation et suivi de projets agro-pastoraux par CAPANA."},
    "contact": {"file": "contact.html", "title": "Contact", "desc": "Contactez CAPANA — téléphone, e-mail, formulaire et localisation à Bangangté."},
}

NAV_ITEMS = [
    ("index", "Accueil"),
    ("a-propos", "À propos"),
    ("produits", "Produits de la ruche"),
    ("equipements", "Équipements"),
    ("formations", "Formations"),
    ("services", "Services"),
    ("contact", "Contact"),
]

PAGE_CSS_MAP = {
    "index": "home",
    "a-propos": "about",
    "produits": "products",
    "equipements": "equipments",
    "formations": "formations",
    "services": "services",
    "contact": "contact",
}


def page_href(slug: str) -> str:
    return "index.html" if slug == "index" else f"{slug}.html"


def convert_links(html: str) -> str:
    html = re.sub(
        r'href="#" onclick="navigate\(\'([^\']+)\'\);return false;"',
        lambda m: f'href="{page_href(m.group(1))}"',
        html,
    )
    html = re.sub(
        r"href=\"#\" onclick=\"navigate\('([^']+)'\);return false;\"",
        lambda m: f'href="{page_href(m.group(1))}"',
        html,
    )
    # Internal anchors on index stay as index.html#anchor
    for slug in PAGES:
        if slug == "index":
            continue
        html = html.replace(f'href="#', 'href="index.html#')
    # Fix double index.html on non-index pages - revert contact-band etc
    html = re.sub(r'href="index\.html#(contact-band|produits|equipements|formations|services|mission)"', r'href="#\1"', html)
    # produits page anchors
    html = html.replace('href="index.html#miel"', 'href="#miel"')
    html = html.replace('href="index.html#cire"', 'href="#cire"')
    html = html.replace('href="index.html#propolis"', 'href="#propolis"')
    html = html.replace('href="index.html#inscription"', 'href="#inscription"')
    return html


def build_head(slug: str, extra_scripts: str = "") -> str:
    info = PAGES[slug]
    active_path = page_href(slug)
    return f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{info['title']} — CAPANA | Apiculture moderne à Bangangté</title>
<meta name="description" content="{info['desc']}">
<meta name="author" content="CAPANA">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://capana.cm/{info['file']}">
<meta property="og:type" content="website">
<meta property="og:title" content="{info['title']} — CAPANA">
<meta property="og:description" content="{info['desc']}">
<meta property="og:locale" content="fr_CM">
<meta property="og:site_name" content="CAPANA">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/main.css">
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CAPANA",
  "description": "Apiculture moderne à Bangangté, Cameroun",
  "address": {{
    "@type": "PostalAddress",
    "addressLocality": "Bangangté",
    "addressRegion": "Région de l'Ouest",
    "addressCountry": "CM"
  }},
  "telephone": "+237687088311",
  "email": "leungambiagni@gmail.com",
  "url": "https://capana.cm/{info['file']}"
}}
</script>
{extra_scripts}
</head>
<body data-page="{slug}">"""


def build_topbar() -> str:
    return """<div class="topbar">
  Rucher moderne à Bangangté &nbsp;·&nbsp; Miel 100&nbsp;% naturel et traçable &nbsp;·&nbsp;
  <a href="tel:+237687088311">687 088 311</a>
</div>"""


def build_nav(active: str) -> str:
    links = ""
    for slug, label in NAV_ITEMS:
        cls = ' class="active"' if slug == active else ""
        links += f'      <a href="{page_href(slug)}"{cls}>{label}</a>\n'
    mobile_links = ""
    for slug, label in NAV_ITEMS:
        cls = ' class="active"' if slug == active else ""
        mobile_links += f'  <a href="{page_href(slug)}"{cls}>{label}</a>\n'
    return f"""<nav class="nav" aria-label="Navigation principale">
  <div class="nav-in container" style="max-width:1200px;padding:0 28px">
    <a href="index.html" class="nav-logo" aria-label="CAPANA — Accueil">
      <svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M18 2L31.86 9.75V25.25L18 33L4.14 25.25V9.75Z" stroke="#C88A0A" stroke-width="1.5"/><path d="M18 9.5L24.5 13.2V20.8L18 24.5L11.5 20.8V13.2Z" fill="#C88A0A"/><path d="M18 14L21 15.8V19.2L18 21L15 19.2V15.8Z" fill="#3D5C1E"/></svg>
      <div class="nav-logo-txt"><strong>CAPANA</strong><span>Apiculture moderne</span></div>
    </a>
    <div class="nav-links">
{links}    </div>
    <div class="nav-right">
      <div class="nav-contact-info"><span>Nous appeler</span><strong>687 088 311</strong></div>
      <a href="contact.html" class="btn-devis">Demander un devis</a>
    </div>
    <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav-mobile">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile" aria-hidden="true">
{mobile_links}  <a href="contact.html" class="btn-devis">Demander un devis</a>
</div>"""


def build_footer() -> str:
    return """<footer>
  <div class="container">
    <div class="foot-in">
      <div>
        <div class="foot-logo"><svg viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M18 2L31.86 9.75V25.25L18 33L4.14 25.25V9.75Z" stroke="#C88A0A" stroke-width="1.5"/><path d="M18 9.5L24.5 13.2V20.8L18 24.5L11.5 20.8V13.2Z" fill="#C88A0A"/><path d="M18 14L21 15.8V19.2L18 21L15 19.2V15.8Z" fill="#3D5C1E"/></svg><span class="foot-brand-name">CAPANA</span></div>
        <div class="foot-tag">Apiculture moderne — Bangangté, Région de l'Ouest, Cameroun</div>
        <div class="foot-legal">CAPANA<br>RCCM RC/BGT/2026/A07<br>NUI P010116150583S</div>
      </div>
      <div class="foot-col">
        <h4>Produits</h4>
        <a href="produits.html">Miel local de Bangangté</a>
        <a href="produits.html#cire">Cire d'abeille</a>
        <a href="produits.html#propolis">Propolis</a>
      </div>
      <div class="foot-col">
        <h4>Équipements</h4>
        <a href="equipements.html">Ruches modernes</a>
        <a href="equipements.html">Ruches colonisées</a>
        <a href="equipements.html">Enfumoirs</a>
        <a href="equipements.html">Tenues apicoles</a>
      </div>
      <div class="foot-col">
        <h4>Contact</h4>
        <a href="tel:+237687088311">687 088 311</a>
        <a href="tel:+237681961913">681 961 913</a>
        <a href="tel:+237679931608">679 931 608</a>
        <a href="mailto:leungambiagni@gmail.com">leungambiagni@gmail.com</a>
        <p style="margin-top:6px">Bangangté, Région de l'Ouest</p>
      </div>
    </div>
    <div class="foot-btm">
      <span>© 2026 CAPANA — Tous droits réservés</span>
      <span>RCCM RC/BGT/2026/A07 — NUI P010116150583S</span>
    </div>
  </div>
</footer>"""


def build_scripts(slug: str) -> str:
    scripts = ['<script src="assets/js/main.js"></script>']
    if slug == "index":
        scripts.append('<script src="assets/js/carousel.js"></script>')
        scripts.append('<script src="assets/js/animations.js"></script>')
    if slug == "contact":
        scripts.append('<script src="assets/js/form.js"></script>')
    return "\n".join(scripts)


def enhance_index(html: str) -> str:
    html = html.replace('href="#produits"', 'href="produits.html"')
    html = html.replace('href="#equipements"', 'href="equipements.html"')
    html = html.replace('href="#formations"', 'href="formations.html"')
    html = html.replace('href="#services"', 'href="services.html"')
    html = html.replace('href="#contact-band"', 'href="contact.html"')
    html = html.replace(
        '<a href="#produits" class="btn-hero-fill">Découvrir nos produits</a>',
        '<a href="produits.html" class="btn-hero-fill">Découvrir nos produits</a>',
    )
    html = html.replace(
        '<a href="#contact-band" class="btn-hero-out">Nous contacter</a>',
        '<a href="contact.html" class="btn-hero-out">Nous contacter</a>',
    )
    html = html.replace('href="#produits" class="btn-hero-fill">Voir nos produits', 'href="produits.html" class="btn-hero-fill">Voir nos produits')
    html = html.replace('href="#contact-band" class="btn-hero-out">Passer commande', 'href="contact.html" class="btn-hero-out">Passer commande')
    html = html.replace('href="#formations" class="btn-hero-fill">Découvrir les formations', 'href="formations.html" class="btn-hero-fill">Découvrir les formations')
    html = html.replace('href="#contact-band" class="btn-hero-out">S\'inscrire', 'href="contact.html" class="btn-hero-out">S\'inscrire')
    html = html.replace('<a href="#produits" class="btn-fill">Nos produits</a>', '<a href="produits.html" class="btn-fill">Nos produits</a>')
    html = html.replace('<a href="#contact-band" class="btn-out">Nous contacter</a>', '<a href="contact.html" class="btn-out">Nous contacter</a>')
    html = html.replace('<a href="#contact-band">Voir tous les produits', '<a href="produits.html">Voir tous les produits')
    html = html.replace('<a href="#contact-band" class="prod-link">', '<a href="contact.html" class="prod-link">')
    html = html.replace('<a href="#contact-band" class="equip-link">', '<a href="contact.html" class="equip-link">')
    html = html.replace('<a href="#contact-band">Demander un devis', '<a href="contact.html">Demander un devis')
    html = html.replace('<a href="#contact-band" class="btn-form">', '<a href="contact.html" class="btn-form">')
    html = html.replace('<a href="mailto:leungambiagni@gmail.com" class="btn-contact-big">', '<a href="contact.html" class="btn-contact-big">')
    # quicknav links
    html = re.sub(r'<a href="#produits" class="qnav-item">', '<a href="produits.html" class="qnav-item">', html)
    html = re.sub(r'<a href="#equipements" class="qnav-item">', '<a href="equipements.html" class="qnav-item">', html)
    html = re.sub(r'<a href="#formations" class="qnav-item">', '<a href="formations.html" class="qnav-item">', html)
    html = re.sub(r'<a href="#services" class="qnav-item">', '<a href="services.html" class="qnav-item">', html)
    return html


def strip_embedded_footer(html: str) -> str:
    return re.sub(r"<footer>.*?</footer>\s*", "", html, flags=re.DOTALL)


def enhance_contact(html: str) -> str:
    html = html.replace(
        '<div class="contact-form-wrap">',
        '<div class="contact-form-wrap"><div class="form-message" id="form-message" role="alert"></div>',
    )
    html = html.replace(
        '<button class="form-submit">Envoyer le message</button>',
        '<button type="submit" class="form-submit" id="form-submit">Envoyer le message</button>',
    )
    html = re.sub(
        r'<div class="contact-form-wrap">.*?<h2>Envoyer un message</h2>',
        lambda m: m.group(0).replace('<div class="contact-form-wrap">', '<form class="contact-form-wrap" id="contact-form" novalidate>'),
        html,
        count=1,
        flags=re.DOTALL,
    )
    html = html.replace(
        '<button type="submit" class="form-submit" id="form-submit">Envoyer le message</button>\n      </div>',
        '<button type="submit" class="form-submit" id="form-submit">Envoyer le message</button>\n      </form>',
    )
    # Add form attributes
    html = html.replace('<label>Nom complet *</label><input type="text"', '<label for="name">Nom complet *</label><input type="text" id="name" name="name" required')
    html = html.replace('<label>Téléphone *</label><input type="tel"', '<label for="phone">Téléphone *</label><input type="tel" id="phone" name="phone" required')
    html = html.replace('<label>Adresse e-mail</label><input type="email"', '<label for="email">Adresse e-mail</label><input type="email" id="email" name="email"')
    html = html.replace('<label>Objet de votre demande *</label>\n          <select>', '<label for="subject">Objet de votre demande *</label>\n          <select id="subject" name="subject" required>')
    html = html.replace('<label>Message *</label><textarea', '<label for="message">Message *</label><textarea id="message" name="message" required')
    # Map embed
    html = html.replace(
        '<div class="map-ph">\n    <svg',
        '<iframe class="map-embed" title="Localisation CAPANA — Bangangté" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=10.48%2C5.08%2C10.58%2C5.14&layer=mapnik&marker=5.11%2C10.53"></iframe>\n  <div class="map-ph" style="display:none">\n    <svg',
    )
    return html


def create_css(content: str) -> None:
    css_match = re.search(r"<style>(.*?)</style>", content, re.DOTALL)
    css = css_match.group(1) if css_match else ""
    css = re.sub(r"\.page\{display:none\}\.page\.active\{display:block\}\s*", "", css)

    sections = re.split(r"/\* --- ([\w-]+) --- \*/", css)
    base_css = sections[0].strip()
    page_css = {}
    for i in range(1, len(sections), 2):
        page_css[sections[i].strip()] = sections[i + 1].strip() if i + 1 < len(sections) else ""

    if "index" in page_css:
        page_css["index"] = re.sub(
            r":root\{[^}]+\}\*[^}]+\}html[^}]+\}body[^}]+\}a[^}]+\}\.container[^}]+\}@media\(prefers-reduced-motion[^}]+\}\s*",
            "",
            page_css["index"],
        )
        page_css["index"] = re.sub(
            r"/\* =+ TOP BAR =+ \*/.*?@media\(max-width:560px\)\{[^}]+\}\s*$",
            "",
            page_css["index"],
            flags=re.DOTALL,
        )

    for d in ["assets/css/pages", "assets/js", "assets/images", "assets/icons"]:
        (ROOT / d).mkdir(parents=True, exist_ok=True)

    vars_match = re.search(r":root\{[^}]+\}", base_css)
    (ROOT / "assets/css/variables.css").write_text((vars_match.group(0) if vars_match else "") + "\n", encoding="utf-8")

    base_parts = """*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--ff-b);color:var(--texte);background:var(--blanc);-webkit-font-smoothing:antialiased;line-height:1.65}
a{text-decoration:none;color:inherit}
img{display:block;width:100%;height:100%;object-fit:cover}
.container{max-width:1200px;margin:0 auto;padding:0 28px}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.fade-in{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}
.fade-in.visible{opacity:1;transform:translateY(0)}
"""
    (ROOT / "assets/css/base.css").write_text(base_parts, encoding="utf-8")

    comp_end = base_css.find("/* --- index --- */")
    components = base_css[:comp_end] if comp_end != -1 else base_css
    components += """
.nav-toggle{display:none;background:none;border:none;cursor:pointer;padding:8px;margin-left:auto}
.nav-toggle span{display:block;width:22px;height:2px;background:var(--brun);margin:5px 0;transition:transform .2s,opacity .2s}
.nav-toggle[aria-expanded="true"] span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.nav-toggle[aria-expanded="true"] span:nth-child(2){opacity:0}
.nav-toggle[aria-expanded="true"] span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.nav-mobile{display:none;position:fixed;inset:0;top:72px;background:var(--blanc);z-index:190;padding:24px 28px;overflow-y:auto;border-top:1px solid var(--rule)}
.nav-mobile.open{display:block}
.nav-mobile a{display:block;padding:14px 0;font-size:1rem;font-weight:500;color:var(--texte-mid);border-bottom:1px solid var(--rule)}
.nav-mobile a.active{color:var(--sauge);font-weight:600}
.nav-mobile .btn-devis{display:inline-block;margin-top:20px;text-align:center}
.form-message{padding:12px 16px;border-radius:3px;margin-bottom:16px;font-size:.88rem;display:none}
.form-message.success{display:block;background:var(--sauge-light);color:var(--sauge);border:1px solid #c8daa8}
.form-message.error{display:block;background:#fde8e8;color:#9b1c1c;border:1px solid #f5c6c6}
.map-embed{width:100%;height:300px;border:0;display:block}
@media(max-width:860px){
  .nav-toggle{display:block}
  .nav-links,.nav-contact-info{display:none}
}
"""
    (ROOT / "assets/css/components.css").write_text(components.strip() + "\n", encoding="utf-8")

    for k, v in page_css.items():
        fn = PAGE_CSS_MAP.get(k, k)
        if v.strip():
            (ROOT / f"assets/css/pages/{fn}.css").write_text(v.strip() + "\n", encoding="utf-8")

    imports = ["variables.css", "base.css", "components.css"]
    for k in PAGES:
        fn = PAGE_CSS_MAP.get(k, k)
        if (ROOT / f"assets/css/pages/{fn}.css").exists():
            imports.append(f"pages/{fn}.css")
    (ROOT / "assets/css/main.css").write_text("\n".join(f'@import url("{i}");' for i in imports) + "\n", encoding="utf-8")


def create_js() -> None:
    (ROOT / "assets/js/main.js").write_text("""document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.getElementById('nav-mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobile.classList.toggle('open', !open);
      mobile.setAttribute('aria-hidden', String(open));
    });
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        mobile.classList.remove('open');
        mobile.setAttribute('aria-hidden', 'true');
      });
    });
  }

  const params = new URLSearchParams(window.location.search);
  const subject = params.get('objet');
  const subjectSelect = document.getElementById('subject');
  if (subject && subjectSelect) {
    for (const opt of subjectSelect.options) {
      if (opt.text === subject || opt.value === subject) {
        opt.selected = true;
        break;
      }
    }
  }
});
""", encoding="utf-8")

    (ROOT / "assets/js/carousel.js").write_text("""document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const slides = hero.querySelectorAll('.slide');
  const dots = hero.querySelectorAll('.dot');
  const prev = hero.querySelector('.carousel-arrow.prev');
  const next = hero.querySelector('.carousel-arrow.next');
  if (!slides.length) return;

  let cur = 0;
  let timer;

  function goTo(n) {
    slides[cur].classList.remove('active');
    if (dots[cur]) dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    if (dots[cur]) dots[cur].classList.add('active');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(cur + 1), 5000);
  }

  if (prev) prev.addEventListener('click', () => { goTo(cur - 1); startTimer(); });
  if (next) next.addEventListener('click', () => { goTo(cur + 1); startTimer(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.idx); startTimer(); }));

  startTimer();
});
""", encoding="utf-8")

    (ROOT / "assets/js/animations.js").write_text("""document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.mission, .produits, .equipements, .engagement, .stat-item, .prod-card, .equip-card');
  els.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
""", encoding="utf-8")

    (ROOT / "assets/js/form.js").write_text("""document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-message');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('#name');
    const phone = form.querySelector('#phone');
    const subject = form.querySelector('#subject');
    const message = form.querySelector('#message');

    if (!name.value.trim() || !phone.value.trim() || !subject.value || !message.value.trim()) {
      msg.textContent = 'Veuillez remplir tous les champs obligatoires.';
      msg.className = 'form-message error';
      return;
    }

    const email = form.querySelector('#email').value.trim();
    const body = [
      'Nom : ' + name.value.trim(),
      'Téléphone : ' + phone.value.trim(),
      email ? 'E-mail : ' + email : '',
      '',
      message.value.trim()
    ].filter(Boolean).join('\\n');

    const mailto = 'mailto:leungambiagni@gmail.com'
      + '?subject=' + encodeURIComponent('[CAPANA] ' + subject.options[subject.selectedIndex].text)
      + '&body=' + encodeURIComponent(body);

    window.location.href = mailto;

    msg.textContent = 'Votre client e-mail va s\\'ouvrir. Si ce n\\'est pas le cas, écrivez-nous à leungambiagni@gmail.com';
    msg.className = 'form-message success';
  });
});
""", encoding="utf-8")


def create_sitemap_robots() -> None:
    urls = "\n".join(
        f"  <url><loc>https://capana.cm/{info['file']}</loc><changefreq>monthly</changefreq><priority>{'1.0' if s == 'index' else '0.8'}</priority></url>"
        for s, info in PAGES.items()
    )
    (ROOT / "sitemap.xml").write_text(f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}
</urlset>
""", encoding="utf-8")

    (ROOT / "robots.txt").write_text("""User-agent: *
Allow: /

Sitemap: https://capana.cm/sitemap.xml
""", encoding="utf-8")


def main() -> None:
    content = SRC.read_text(encoding="utf-8")
    create_css(content)
    create_js()
    create_sitemap_robots()

    for slug in PAGES:
        pattern = rf'<div class="page" id="page-{slug}">(.*?)</div>\s*(?=<div class="page" id="page-|<script>)'
        match = re.search(pattern, content, re.DOTALL)
        if not match and slug == "contact":
            pattern = rf'<div class="page" id="page-{slug}">(.*?)</div>\s*<script>'
            match = re.search(pattern, content, re.DOTALL)
        if not match:
            print(f"WARNING: page {slug} not found")
            continue

        body = match.group(1)
        body = re.sub(r"<script>.*?</script>\s*$", "", body, flags=re.DOTALL)
        body = convert_links(body)
        body = strip_embedded_footer(body)
        if slug == "index":
            body = enhance_index(body)
        if slug == "contact":
            body = enhance_contact(body)

        # Normalize contact band class names (index uses cb-info-item, others cb-info)
        body = body.replace("cb-info-item", "cb-info")

        page_html = (
            build_head(slug)
            + "\n"
            + build_topbar()
            + "\n"
            + build_nav(slug)
            + "\n<main>\n"
            + body.strip()
            + "\n</main>\n"
            + build_footer()
            + "\n"
            + build_scripts(slug)
            + "\n</body>\n</html>"
        )

        out = ROOT / PAGES[slug]["file"]
        out.write_text(page_html, encoding="utf-8")
        print(f"Created {out.name}")

    print("Done!")


if __name__ == "__main__":
    main()
