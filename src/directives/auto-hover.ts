export default function autoHoverDirective(element: HTMLElement) {
  if (!window.matchMedia('(max-width: 768px)').matches) return;

  const getThreshold = () => {
    const height = element.getBoundingClientRect().height;
    if (height > 1000) return 0.05; // Very tall cards (5% visible)
    if (height > 500) return 0.4; // Very tall cards (40% visible)
    if (height > 300) return 0.6; // Medium cards (60% visible)
    if (height > 150) return 0.8; // Small cards (80% visible)
    return 1; // Very small cards (100% visible)
  };

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (entry.isIntersecting && entry.intersectionRatio >= getThreshold()) {
        element.classList.add('is-visible');
        // Handle hover classes for all elements including the container
        [element, ...Array.from(element.querySelectorAll('[class*="hover"]'))].forEach((el) => {
          const classes = Array.from(el.classList);

          // Special handling for shadow classes that work together
          const shadowClasses = classes
            .filter((c) => c.startsWith('hover:shadow-'))
            .map((c) => c.replace('hover:', ''));

          // Regular hover classes
          const otherHoverClasses = classes
            .filter((c) => c.includes('hover:') && !c.startsWith('hover:shadow-'))
            .map((c) => c.split('hover:')[1]);

          // Add all classes
          el.classList.add(...shadowClasses, ...otherHoverClasses);
        });
      } else {
        element.classList.remove('is-visible');
        // Remove hover classes
        [element, ...Array.from(element.querySelectorAll('[class*="hover"]'))].forEach((el) => {
          const classes = Array.from(el.classList);

          // Special handling for shadow classes
          const shadowClasses = classes
            .filter((c) => c.startsWith('hover:shadow-'))
            .map((c) => c.replace('hover:', ''));

          // Regular hover classes
          const otherHoverClasses = classes
            .filter((c) => c.includes('hover:') && !c.startsWith('hover:shadow-'))
            .map((c) => c.split('hover:')[1]);

          // Remove all classes
          el.classList.remove(...shadowClasses, ...otherHoverClasses);
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: [0.05, 0.4, 0.6, 0.8, 1],
    rootMargin: '-10% 0px',
  });

  observer.observe(element);
}
