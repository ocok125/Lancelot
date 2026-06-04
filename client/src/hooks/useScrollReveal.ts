import { useEffect, useRef } from 'react';

const REVEAL_CLASSES = [
  '.reveal',
  '.reveal-left',
  '.reveal-right',
  '.reveal-zoom',
  '.reveal-fade',
];

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once revealed, stop observing to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    // Observe all reveal variants within the section
    const selector = REVEAL_CLASSES.join(', ');
    const reveals = el.querySelectorAll(selector);
    reveals.forEach((r) => observer.observe(r));

    // Also observe the section element itself if it carries a reveal class
    REVEAL_CLASSES.forEach((cls) => {
      if (el.classList.contains(cls.slice(1))) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
