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

const controls = [...document.querySelectorAll('[data-video-toggle]')];

function videoFor(control) {
  return control.querySelector('video') || control.closest('.showreel')?.querySelector('video');
}

function start(control) {
  const video = videoFor(control);
  if (!video) return;
  if (!video.src) video.src = video.dataset.src;
  video.play().then(() => {
    video.classList.add('is-playing');
    control.classList.add('is-playing');
  }).catch(() => {});
}

function pause(control) {
  const video = videoFor(control);
  if (!video) return;
  video.pause();
  video.classList.remove('is-playing');
  control.classList.remove('is-playing');
}

controls.forEach((control) => {
  let pinned = false;
  const video = videoFor(control);
  const hoverArea = control.closest('.showreel') || control;

  hoverArea.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch' && !reducedMotion.matches && !pinned) start(control);
  });

  hoverArea.addEventListener('pointerleave', () => {
    if (!pinned) pause(control);
  });

  control.addEventListener('click', () => {
    if (pinned) {
      pinned = false;
      control.setAttribute('aria-pressed', 'false');
      pause(control);
      return;
    }
    pinned = true;
    control.setAttribute('aria-pressed', 'true');
    start(control);
  });

  video.addEventListener('error', () => {
    video.classList.remove('is-playing');
    control.classList.remove('is-playing');
    pinned = false;
    control.setAttribute('aria-pressed', 'false');
  });

  if ('IntersectionObserver' in window) {
    const visibility = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        pinned = false;
        control.setAttribute('aria-pressed', 'false');
        pause(control);
      }
    }, { threshold: 0.08 });
    visibility.observe(hoverArea);
  }
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
      { autoAlpha: 0, y: 34, clipPath: element.classList.contains('film-card') ? 'inset(8% 0 8% 0)' : 'inset(0 0 0 0)' },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: 'inset(0 0 0 0)',
        duration: element.classList.contains('film-card') ? 0.9 : 1,
        delay: element.classList.contains('film-card') ? (index % 2) * 0.12 : 0,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true }
      }
    );
  });
}
