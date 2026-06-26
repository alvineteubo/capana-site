document.addEventListener('DOMContentLoaded', () => {
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
