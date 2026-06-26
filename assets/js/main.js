document.addEventListener('DOMContentLoaded', () => {
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
