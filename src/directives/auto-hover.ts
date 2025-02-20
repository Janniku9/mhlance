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
        // Select all elements to check for group-hover classes
        element.querySelectorAll('*').forEach((el) => {
          const classes = Array.from(el.classList);

          // Get classes that start with 'group-hover:'
          const hoverClasses = classes
            .filter((c) => c.startsWith('group-hover:'))
            .map((c) => c.replace('group-hover:', ''));

          // Apply the hover classes
          el.classList.add(...hoverClasses);
        });
      } else {
        element.classList.remove('is-visible');
        // Remove hover classes from all elements
        element.querySelectorAll('*').forEach((el) => {
          const classes = Array.from(el.classList);

          // Get classes that start with 'group-hover:'
          const hoverClasses = classes
            .filter((c) => c.startsWith('group-hover:'))
            .map((c) => c.replace('group-hover:', ''));

          // Remove the hover classes
          el.classList.remove(...hoverClasses);
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: [0.4, 0.6, 0.8, 1], // Added 1 for very small cards
    rootMargin: '-10% 0px', // Small top margin to prevent edge-case triggers
  });

  observer.observe(element);
}
