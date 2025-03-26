// Performance Improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounced resize handler
    let resizeTimer;
    window.addEventListener('resize', () => {
      document.body.classList.add('resize-animation-stopper');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
      }, 400);
    });
  });
  
  // Add touch support detection
  if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
  }