export default function fadeInDirective(element: HTMLElement) {
  // Check if this element is the hash target
  const isHashTarget = () => {
    const hash = window.location.hash.substring(1);
    return hash && element.id === hash;
  };

  // If this is the hash target, show it immediately
  if (isHashTarget()) {
    element.classList.add('fade-in-visible');
    element.classList.add('fade-in-no-animation'); // Skip animation
    return; // Don't set up observer for this element
  }

  element.classList.add('fade-in-hidden');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: window.innerWidth < 768 ? '0px 0px -100px 0px' : '0px 0px -300px 0px',
      threshold: 0,
    }
  );

  observer.observe(element);
}

// Handle hash changes during navigation
export function handleHashNavigation() {
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const targetElement = document.getElementById(hash);
    if (targetElement && targetElement.hasAttribute('data-fade-in')) {
      // Temporarily disable animation for smooth scroll
      targetElement.classList.add('fade-in-no-animation');
      targetElement.classList.add('fade-in-visible');
      targetElement.classList.remove('fade-in-hidden');

      // Re-enable animation after scroll is complete
      setTimeout(() => {
        targetElement.classList.remove('fade-in-no-animation');
      }, 100);
    }
  });
}
