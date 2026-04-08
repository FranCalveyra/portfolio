document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initHeaderScroll();
  initMobileMenu();
  initScrollAnimations();
});

function initTypingEffect() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const titles = JSON.parse(el.dataset.titles);
  let titleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = titles[titleIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx >= current.length) {
        setTimeout(() => { deleting = true; tick(); }, 2000);
        return;
      }
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx <= 0) {
        deleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
      }
    }
    setTimeout(tick, deleting ? 50 : 100);
  }

  tick();
}

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  const openIcon = document.getElementById('menu-open');
  const closeIcon = document.getElementById('menu-close');

  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    openIcon.style.display = isOpen ? 'none' : 'block';
    closeIcon.style.display = isOpen ? 'block' : 'none';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      openIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
