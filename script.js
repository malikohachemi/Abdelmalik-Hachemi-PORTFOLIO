const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('is-open', !open);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  });
});

if (!reducedMotion.matches && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = window.Lenis ? new Lenis({ anchors: true, smoothWheel: true }) : null;
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  gsap.fromTo('[data-motion-intro] span',
    { autoAlpha: 0, y: 22, filter: 'blur(7px)' },
    { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.16, ease: 'power3.out', delay: 0.12 }
  );

  gsap.utils.toArray('[data-reveal]').forEach((element, index) => {
    gsap.fromTo(element,
      { autoAlpha: 0, y: 34, clipPath: element.classList.contains('film-project') ? 'inset(8% 0 8% 0)' : 'inset(0 0 0 0)' },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: 'inset(0 0 0 0)',
        duration: element.classList.contains('film-project') ? 0.9 : 1,
        delay: element.classList.contains('film-project') ? (index % 2) * 0.12 : 0,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true }
      }
    );
  });
}
