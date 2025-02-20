export default function autoHoverDirective(element: HTMLElement) {
  if (!window.matchMedia('(max-width: 768px)').matches) return;

  // Get the element's height and adjust threshold accordingly
  // Taller cards need less visibility to trigger
  const getThreshold = () => {
    const height = element.getBoundingClientRect().height;
    if (height > 500) return 0.4; // Very tall cards (40% visible)
    if (height > 300) return 0.6; // Medium cards (60% visible)
    return 0.8; // Small cards (80% visible)
  };

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (entry.isIntersecting && entry.intersectionRatio >= getThreshold()) {
        element.classList.add('is-visible');
        element.querySelectorAll('[class*="group-hover"]').forEach((el) => {
          const hoverClasses = Array.from(el.classList)
            .filter((c) => c.startsWith('group-hover:'))
            .map((c) => c.replace('group-hover:', ''));
          el.classList.add(...hoverClasses);
        });
      } else {
        element.classList.remove('is-visible');
        element.querySelectorAll('[class*="group-hover"]').forEach((el) => {
          const hoverClasses = Array.from(el.classList)
            .filter((c) => c.startsWith('group-hover:'))
            .map((c) => c.replace('group-hover:', ''));
          el.classList.remove(...hoverClasses);
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: [0.4, 0.6, 0.8], // Match our possible thresholds
    rootMargin: '-10% 0px', // Small top margin to prevent edge-case triggers
  });

  observer.observe(element);
}
