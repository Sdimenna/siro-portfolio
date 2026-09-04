/* ============================================
   SIRO PORTFOLIO — Interactions
   ============================================ */

// ---------- BOOT SEQUENCE ----------
const bootLines = [
  '[ OK ] Inizializzazione sistema...',
  '[ OK ] Caricamento moduli profilo...',
  '[ OK ] Montaggio driver PLM/PDM...',
  '[ OK ] Connessione al DB manifatturiero...',
  '[ OK ] Sequenza di avvio completata.',
  '',
  'Benvenuto in siro.profilo — v2.6.0',
  ''
];

const bootScreen = document.getElementById('bootScreen');
const bootText = document.getElementById('bootText');
let bootIndex = 0;

function typeBoot() {
  if (bootIndex < bootLines.length) {
    bootText.textContent += bootLines[bootIndex] + '\n';
    bootIndex++;
    setTimeout(typeBoot, 140);
  } else {
    setTimeout(() => {
      bootScreen.classList.add('hidden');
    }, 600);
  }
}

// Start boot on load
window.addEventListener('load', () => {
  setTimeout(typeBoot, 300);
});

// ---------- ROLE TYPEWRITER ----------
const roles = [
  'Consulente Applicativo',
  'Specialista PLM/PDM',
  'Esperto PRO.FILE',
  'Architetto BOM',
  'Ingegnere Integrazione CAD',
  'Gestione Dati SQL'
];
let roleIdx = 0, charIdx = 0, deleting = false;
const roleEl = document.getElementById('roleText');

function typeRole() {
  const current = roles[roleIdx];
  if (!deleting) {
    roleEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeRole, 1800);
      return;
    }
  } else {
    roleEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeRole, deleting ? 40 : 80);
}

setTimeout(typeRole, 1800);

// ---------- COUNTER ANIMATION ----------
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target) + '+';
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ---------- STACK BARS ANIMATION ----------
function animateStackBars() {
  const bars = document.querySelectorAll('.stack-level');
  bars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    const fill = bar.querySelector('span');
    if (fill) fill.style.width = level + '%';
  });
}

// ---------- INTERSECTION OBSERVER ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger stack bars when stack section visible
      if (entry.target.closest('#stack')) {
        animateStackBars();
      }
      // Trigger counters when hero visible
      if (entry.target.closest('.hero')) {
        animateCounters();
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .hero').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ---------- LIVE TIME ----------
function updateTime() {
  const el = document.getElementById('liveTime');
  if (!el) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  el.textContent = `Ora locale ${hh}:${mm}:${ss}`;
}
setInterval(updateTime, 1000);
updateTime();

// ---------- SMOOTH NAV HIGHLIGHT ----------
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--accent)';
    }
  });
});

// ---------- KONAMI EASTER EGG ----------
const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;
window.addEventListener('keydown', (e) => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  if (key === konami[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === konami.length) {
      activateEasterEgg();
      konamiIdx = 0;
    }
  } else {
    konamiIdx = 0;
  }
});

function activateEasterEgg() {
  document.body.style.transition = 'filter 0.5s';
  document.body.style.filter = 'hue-rotate(180deg)';
  setTimeout(() => {
    document.body.style.filter = 'hue-rotate(360deg)';
  }, 800);
  setTimeout(() => {
    document.body.style.filter = '';
    document.body.style.transition = '';
  }, 2000);
  console.log('%c★ KONAMI CODE ACTIVATED ★', 'color:#00d9ff;font-size:24px;font-weight:bold;text-shadow:0 0 10px #00d9ff');
}

// ---------- CONSOLE BANNER ----------
console.log('%c┌─────────────────────────────────────┐', 'color:#00d9ff');
console.log('%c│  SIRO LEON DI MENNA — PROFILO v2.6  │', 'color:#00d9ff;font-weight:bold');
console.log('%c│  Consulente Applicativo · PLM/PDM   │', 'color:#a855f7');
console.log('%c│  Cerchi collaborazione?              │', 'color:#00ff88');
console.log('%c│  → sdimenna01@gmail.com              │', 'color:#00ff88');
console.log('%c└─────────────────────────────────────┘', 'color:#00d9ff');
