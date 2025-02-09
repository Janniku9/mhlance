export default function fadeInDirective(element: HTMLElement) {
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
      rootMargin: '0px 0px -50% 0px',
      threshold: 0,
    }
  );

  observer.observe(element);
}
