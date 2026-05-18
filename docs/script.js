// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.principle-card, .agent-card, .gov-layer, .safety-card, .cmd-card, .research-card, .pipe-step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Stagger animations within grids
document.querySelectorAll('.principles-grid, .agents-grid, .safety-grid, .commands-grid, .research-grid').forEach(grid => {
  const cards = grid.children;
  Array.from(cards).forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });
});

// Pipeline step hover effect
document.querySelectorAll('.pipe-step').forEach(step => {
  step.addEventListener('mouseenter', () => {
    step.querySelector('.pipe-dot').style.transform = 'scale(1.5)';
    step.querySelector('.pipe-dot').style.transition = 'transform 0.2s ease';
  });
  step.addEventListener('mouseleave', () => {
    step.querySelector('.pipe-dot').style.transform = 'scale(1)';
  });
});
