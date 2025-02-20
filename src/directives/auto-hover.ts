export default function autoHoverDirective(element: HTMLElement) {
  // Only run on mobile devices
  if (window.matchMedia('(max-width: 768px)').matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
            // Add the hover classes
            element.classList.add('is-visible');
            element.querySelectorAll('[class*="group-hover"]').forEach((el) => {
              const hoverClasses = Array.from(el.classList)
                .filter((c) => c.startsWith('group-hover:'))
                .map((c) => c.replace('group-hover:', ''));
              el.classList.add(...hoverClasses);
            });
          } else {
            // Remove the hover classes
            element.classList.remove('is-visible');
            element.querySelectorAll('[class*="group-hover"]').forEach((el) => {
              const hoverClasses = Array.from(el.classList)
                .filter((c) => c.startsWith('group-hover:'))
                .map((c) => c.replace('group-hover:', ''));
              el.classList.remove(...hoverClasses);
            });
          }
        });
      },
      {
        threshold: 0.8,
        rootMargin: '-10% 0px',
      }
    );

    observer.observe(element);
  }
}
