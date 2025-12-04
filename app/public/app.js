// Icon mapping for technologies
const iconMap = {
  'cloud': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>`,
  'code': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>`,
  'git-branch': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="6" y1="3" x2="6" y2="15"/>
    <circle cx="18" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <path d="M18 9a9 9 0 0 1-9 9"/>
  </svg>`,
  'activity': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>`,
  'bar-chart': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </svg>`,
  'package': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>`,
  'box': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>`,
  'check': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>`
};

// Fetch and display project information
async function loadProjectInfo() {
  try {
    const response = await fetch('/api/project-info');
    const data = await response.json();

    // Update architecture descriptions
    document.getElementById('arch-infrastructure').textContent = data.architecture.infrastructure;
    document.getElementById('arch-gitops').textContent = data.architecture.gitops;
    document.getElementById('arch-networking').textContent = data.architecture.networking;
    document.getElementById('arch-monitoring').textContent = data.architecture.monitoring;

    // Render technologies
    renderTechnologies(data.technologies);

    // Render features
    renderFeatures(data.features);

  } catch (error) {
    console.error('Error loading project info:', error);
  }
}

// Render technology cards
function renderTechnologies(technologies) {
  const container = document.getElementById('techGrid');
  container.innerHTML = '';

  technologies.forEach((tech, index) => {
    const card = document.createElement('div');
    card.className = 'tech-card';
    card.style.cssText = `--tech-color: ${tech.color}; animation: fadeInUp 0.6s ease-out ${index * 0.1}s both;`;

    card.innerHTML = `
      <div class="tech-header">
        <div class="tech-icon" style="background: ${tech.color}15; color: ${tech.color};">
          ${iconMap[tech.icon] || iconMap['box']}
        </div>
        <div class="tech-info">
          <div class="tech-name">${tech.name}</div>
          <div class="tech-category">${tech.category}</div>
        </div>
      </div>
      <div class="tech-description">${tech.description}</div>
    `;

    container.appendChild(card);
  });
}

// Render feature cards
function renderFeatures(features) {
  const container = document.getElementById('featuresGrid');
  container.innerHTML = '';

  features.forEach((feature, index) => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;

    card.innerHTML = `
      <div class="feature-icon">
        ${iconMap['check']}
      </div>
      <div class="feature-text">${feature}</div>
    `;

    container.appendChild(card);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadProjectInfo();

  // Add scroll animation observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
  });
});
