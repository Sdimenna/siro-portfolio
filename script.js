/* ============================================
   SIRO LEON DI MENNA — Portfolio v3.0
   Bilingual (IT/EN) · accessible · no dependencies
   ============================================ */

/* ---------------- i18n DICTIONARY ---------------- */
const I18N = {
  it: {
    metaTitle: `Siro Leon di Menna — Application Consultant PLM/PDM · PRO.FILE`,
    metaDesc: `Application Consultant PLM/PDM specializzato in PRO.FILE. Background in informatica e studi in ingegneria aerospaziale. BOM, anagrafiche tecniche, integrazioni CAD, workflow e SQL per il manifatturiero.`,
    roles: [
      `Consulente Applicativo`,
      `Specialista PLM/PDM`,
      `Esperto PRO.FILE`,
      `Gestione BOM & Anagrafiche`,
      `Integrazione CAD`,
      `SQL & Reporting`,
      `Studente di Ing. Aerospaziale`
    ],
    "a11y.skip": `Vai al contenuto`,
    "boot.skip": `[ premi per saltare ]`,
    "nav.about": `chi sono`,
    "nav.experience": `esperienza`,
    "nav.projects": `progetti`,
    "nav.skills": `competenze`,
    "nav.contact": `contatti`,
    "nav.status": `aperto a opportunità`,
    "hero.badge": `APPLICATION CONSULTANT · PLM/PDM · @ MIRVE`,
    "hero.desc": `Consulente applicativo <span class="hl">PLM/PDM</span> con background in <span class="hl-2">informatica</span> e studi in <span class="hl-2">ingegneria aerospaziale</span>. Aiuto le aziende manifatturiere a digitalizzare i processi tecnici — distinte base (BOM), anagrafiche, integrazioni CAD e workflow PLM — con solide basi di SQL e IT.`,
    "hero.cta1": `Parliamone`,
    "hero.cta2": `Vedi esperienza`,
    "hero.cta3": `CV in PDF`,
    "fact.formation.label": `Formazione`,
    "fact.formation.value": `Informatica · Ing. Aerospaziale`,
    "fact.focus.label": `Focus`,
    "fact.focus.value": `PLM/PDM · PRO.FILE`,
    "fact.data.label": `Dati`,
    "fact.data.value": `SQL · Reporting`,
    "fact.lang.label": `Lingue`,
    "fact.lang.value": `Italiano · English`,
    "about.title": `<span class="keyword">class</span> <span class="class-name">ChiSono</span> {`,
    "about.p1": `Sono un <span class="hl">Application Consultant</span> specializzato in soluzioni <span class="hl">PLM/PDM</span>, con un focus deciso su <span class="hl-2">PRO.FILE</span> e il settore manifatturiero.`,
    "about.p2": `Supporto le aziende nell'ottimizzazione dei processi tecnici: dalla <span class="keyword">gestione delle anagrafiche</span> e delle <span class="keyword">distinte base (BOM)</span> alla <span class="keyword">configurazione di workflow</span> e alle <span class="keyword">integrazioni CAD</span>.`,
    "about.p3": `Vengo da un percorso in <span class="hl-2">informatica</span> e sto proseguendo gli studi in <span class="hl-2">ingegneria aerospaziale</span>: questo mix mi permette di parlare sia la lingua dell'IT (SQL, dati, integrazioni) sia quella dell'ufficio tecnico (BOM, CAD, processi).`,
    "about.p4": `Attualmente opero come <span class="hl">Application Consultant</span> presso <a href="https://www.mirve.it" target="_blank" rel="noopener" class="external-link">Mirve</a>, dove mi occupo dell'implementazione di PRO.FILE per supportare le aziende manifatturiere nella digitalizzazione dei processi tecnici.`,
    "about.cardTitle": `Attualmente`,
    "about.li1": `Application Consultant @ Mirve`,
    "about.li2": `Consulenza su progetti PLM/PDM`,
    "about.li3": `Configurazione ambienti PRO.FILE`,
    "about.li4": `Progettazione integrazioni CAD`,
    "about.li5": `Report e analisi dati con SQL`,
    "about.li6": `Laurea in Ing. Aerospaziale (in corso)`,
    "exp.title": `<span class="keyword">class</span> <span class="class-name">Percorso</span> {`,
    "exp.role1.title": `Application Consultant — PLM/PDM`,
    "exp.role1.period": `in corso`,
    "exp.role1.place": `Italia (ibrido)`,
    "exp.role1.b1": `Implementazione e configurazione di ambienti PRO.FILE per aziende manifatturiere.`,
    "exp.role1.b2": `Gestione di distinte base (BOM), anagrafiche e classificazione articoli.`,
    "exp.role1.b3": `Progettazione e setup di integrazioni tra PLM e sistemi CAD.`,
    "exp.role1.b4": `Configurazione di workflow di approvazione, rilascio e gestione modifiche (ECM).`,
    "exp.role1.b5": `Report ed estrazioni dati su SQL a supporto dell'ufficio tecnico.`,
    "exp.edu1.title": `Laurea in Ingegneria Aerospaziale`,
    "exp.edu1.period": `in corso`,
    "exp.edu1.org": `Università · Italia`,
    "exp.edu1.desc": `Meccanica del volo, aerodinamica, strutture, sistemi.`,
    "exp.edu2.title": `Percorso in Informatica`,
    "exp.edu2.period": `completato`,
    "exp.edu2.desc": `Basi di programmazione, database, sistemi e reti — la solida base tecnica dietro il lavoro su PLM e dati.`,
    "exp.lang.title": `Lingue`,
    "exp.lang.desc": `Italiano (madrelingua) · Inglese (tecnico/professionale)`,
    "proj.title": `<span class="keyword">const</span> <span class="class-name">aree</span> = [`,
    "proj.note": `Aree di intervento su cui lavoro ogni giorno. Alcuni dettagli sono coperti da riservatezza: referenze e casi concreti disponibili su richiesta.`,
    "proj.fp.eyebrow": `Progetto in evidenza`,
    "proj.fp.title": `Unique Beauty Lab — sito + prenotazioni online`,
    "proj.fp.desc": `Sito web e sistema di prenotazione per un centro estetico: catalogo trattamenti con durata e prezzo, scelta di giorno e ora sulle disponibilità reali, conferma e aggiunta al calendario. Sviluppato end-to-end e online in produzione.`,
    "proj.fp.b1": `Frontend Next.js responsive, da mobile a desktop.`,
    "proj.fp.b2": `Prenotazioni con slot realmente liberi, senza doppie prenotazioni.`,
    "proj.fp.b3": `Catalogo di 23 trattamenti divisi in 5 categorie.`,
    "proj.fp.b4": `Contatto rapido via WhatsApp e integrazione con il calendario.`,
    "proj.fp.cta": `Visita il sito`,
    "proj.c1.title": `Implementazione PRO.FILE`,
    "proj.c1.desc": `Setup e configurazione completa di ambienti PRO.FILE su misura: parametrizzazione, migrazione dati, test e go-live.`,
    "proj.c2.title": `BOM & Anagrafiche`,
    "proj.c2.desc": `Strutture distinte base, codifica articoli, classificazione e governance delle anagrafiche tecniche.`,
    "proj.c3.title": `Integrazione CAD–PLM`,
    "proj.c3.desc": `Connettori e sincronizzazione tra PRO.FILE e sistemi CAD: metadati, check-in/out e gestione versioni sempre coerenti.`,
    "proj.c4.title": `Workflow & ECM`,
    "proj.c4.desc": `Workflow personalizzati per approvazioni, rilasci e gestione delle modifiche tecniche, con tracciabilità end-to-end.`,
    "proj.c5.title": `SQL & Reporting`,
    "proj.c5.desc": `Query, viste e report personalizzati su database PLM per estrarre dati affidabili e supportare le decisioni.`,
    "proj.c6.title": `Supporto & Troubleshooting`,
    "proj.c6.desc": `Analisi incidenti, root cause, documentazione e supporto continuativo su ambienti PLM/PDM e IT correlati.`,
    "skills.title": `<span class="keyword">const</span> <span class="class-name">competenze</span> = {`,
    "skills.plm.1": `Processi PLM`,
    "skills.plm.2": `Workflow & ECM`,
    "skills.plm.3": `Gestione modifiche`,
    "skills.plm.4": `Configurazione`,
    "skills.data.1": `Modellazione dati`,
    "skills.data.2": `Reporting`,
    "skills.data.3": `Analisi dati`,
    "skills.data.4": `Estrazione dati`,
    "skills.eng.1": `Integrazione CAD`,
    "skills.eng.2": `Gestione BOM`,
    "skills.eng.3": `Anagrafiche tecniche`,
    "skills.eng.4": `Classificazione`,
    "skills.it.1": `Troubleshooting`,
    "skills.it.2": `System administration`,
    "skills.it.3": `Problem solving`,
    "skills.it.4": `Inglese tecnico`,
    "skills.it.5": `Documentazione`,
    "contact.title": `<span class="keyword">function</span> <span class="class-name">contattami</span>() {`,
    "contact.text": `Hai un progetto PLM/PDM, un ruolo da coprire o semplicemente vuoi confrontarti? Scrivimi.`,
    "contact.tag": `Parliamone.`,
    "contact.cta": `Salva il CV in PDF`,
    "contact.company": `azienda`,
    "contact.zone": `zona`,
    "contact.zoneValue": `Italia · Disponibile in remoto`,
    "footer.note": `echo "Costruito con codice & caffè"`,
    "console.who": `Consulente Applicativo · PLM/PDM`,
    "console.cta": `Cerchi collaborazione?`
  },

  en: {
    metaTitle: `Siro Leon di Menna — PLM/PDM Application Consultant · PRO.FILE`,
    metaDesc: `PLM/PDM Application Consultant specialised in PRO.FILE, with a computer-science background and ongoing aerospace engineering studies. BOM, master data, CAD integrations, workflows and SQL for manufacturing.`,
    roles: [
      `Application Consultant`,
      `PLM/PDM Specialist`,
      `PRO.FILE Expert`,
      `BOM & Master Data`,
      `CAD Integration`,
      `SQL & Reporting`,
      `Aerospace Engineering Student`
    ],
    "a11y.skip": `Skip to content`,
    "boot.skip": `[ click to skip ]`,
    "nav.about": `about`,
    "nav.experience": `experience`,
    "nav.projects": `work`,
    "nav.skills": `skills`,
    "nav.contact": `contact`,
    "nav.status": `open to opportunities`,
    "hero.badge": `APPLICATION CONSULTANT · PLM/PDM · @ MIRVE`,
    "hero.desc": `PLM/PDM application consultant with a background in <span class="hl">computer science</span> and ongoing studies in <span class="hl-2">aerospace engineering</span>. I help manufacturing companies digitalise their technical processes — bills of materials (BOM), master data, CAD integrations and PLM workflows — backed by solid SQL and IT skills.`,
    "hero.cta1": `Let's talk`,
    "hero.cta2": `View experience`,
    "hero.cta3": `CV as PDF`,
    "fact.formation.label": `Education`,
    "fact.formation.value": `Computer Science · Aerospace Eng.`,
    "fact.focus.label": `Focus`,
    "fact.focus.value": `PLM/PDM · PRO.FILE`,
    "fact.data.label": `Data`,
    "fact.data.value": `SQL · Reporting`,
    "fact.lang.label": `Languages`,
    "fact.lang.value": `Italian · English`,
    "about.title": `<span class="keyword">class</span> <span class="class-name">AboutMe</span> {`,
    "about.p1": `I am an <span class="hl">Application Consultant</span> specialised in <span class="hl">PLM/PDM</span> solutions, with a strong focus on <span class="hl-2">PRO.FILE</span> and the manufacturing industry.`,
    "about.p2": `I help companies optimise their technical processes: from <span class="keyword">master data</span> and <span class="keyword">bills of materials (BOM)</span> to <span class="keyword">workflow configuration</span> and <span class="keyword">CAD integrations</span>.`,
    "about.p3": `I come from a <span class="hl-2">computer science</span> background and I am continuing my studies in <span class="hl-2">aerospace engineering</span>: this mix lets me speak both the language of IT (SQL, data, integrations) and that of the engineering office (BOM, CAD, processes).`,
    "about.p4": `I currently work as an <span class="hl">Application Consultant</span> at <a href="https://www.mirve.it" target="_blank" rel="noopener" class="external-link">Mirve</a>, where I implement PRO.FILE to support manufacturing companies in digitalising their technical processes.`,
    "about.cardTitle": `Currently`,
    "about.li1": `Application Consultant @ Mirve`,
    "about.li2": `Consulting on PLM/PDM projects`,
    "about.li3": `PRO.FILE environment configuration`,
    "about.li4": `CAD integration design`,
    "about.li5": `Reporting and data analysis with SQL`,
    "about.li6": `Aerospace Engineering degree (ongoing)`,
    "exp.title": `<span class="keyword">class</span> <span class="class-name">Background</span> {`,
    "exp.role1.title": `Application Consultant — PLM/PDM`,
    "exp.role1.period": `current`,
    "exp.role1.place": `Italy (hybrid)`,
    "exp.role1.b1": `Implementation and configuration of PRO.FILE environments for manufacturing companies.`,
    "exp.role1.b2": `Management of bills of materials (BOM), master data and part classification.`,
    "exp.role1.b3": `Design and setup of integrations between PLM and CAD systems.`,
    "exp.role1.b4": `Configuration of approval, release and engineering change (ECM) workflows.`,
    "exp.role1.b5": `SQL reporting and data extraction to support the engineering office.`,
    "exp.edu1.title": `BSc in Aerospace Engineering`,
    "exp.edu1.period": `ongoing`,
    "exp.edu1.org": `University · Italy`,
    "exp.edu1.desc": `Flight mechanics, aerodynamics, structures, systems.`,
    "exp.edu2.title": `Computer Science studies`,
    "exp.edu2.period": `completed`,
    "exp.edu2.desc": `Programming fundamentals, databases, systems and networks — the solid technical base behind my PLM and data work.`,
    "exp.lang.title": `Languages`,
    "exp.lang.desc": `Italian (native) · English (technical/professional)`,
    "proj.title": `<span class="keyword">const</span> <span class="class-name">work</span> = [`,
    "proj.note": `Areas I work on every day. Some details are confidential: references and concrete case studies available on request.`,
    "proj.fp.eyebrow": `Featured project`,
    "proj.fp.title": `Unique Beauty Lab — website + online booking`,
    "proj.fp.desc": `Website and booking system for a beauty salon: treatment catalogue with duration and price, day and time selection based on real availability, confirmation and calendar sync. Built end-to-end and live in production.`,
    "proj.fp.b1": `Responsive Next.js frontend, from mobile to desktop.`,
    "proj.fp.b2": `Bookings with genuinely free slots, no double bookings.`,
    "proj.fp.b3": `Catalogue of 23 treatments across 5 categories.`,
    "proj.fp.b4": `Quick contact via WhatsApp and calendar integration.`,
    "proj.fp.cta": `Visit the website`,
    "proj.c1.title": `PRO.FILE Implementation`,
    "proj.c1.desc": `Full setup and configuration of tailor-made PRO.FILE environments: parametrisation, data migration, testing and go-live.`,
    "proj.c2.title": `BOM & Master Data`,
    "proj.c2.desc": `Bill-of-materials structures, part coding, classification and governance of technical master data.`,
    "proj.c3.title": `CAD–PLM Integration`,
    "proj.c3.desc": `Connectors and synchronisation between PRO.FILE and CAD systems: metadata, check-in/out and consistent version management.`,
    "proj.c4.title": `Workflow & ECM`,
    "proj.c4.desc": `Custom workflows for approvals, releases and engineering change management, with end-to-end traceability.`,
    "proj.c5.title": `SQL & Reporting`,
    "proj.c5.desc": `Queries, views and custom reports on PLM databases to extract reliable data and support decisions.`,
    "proj.c6.title": `Support & Troubleshooting`,
    "proj.c6.desc": `Incident analysis, root cause, documentation and ongoing support on PLM/PDM and related IT environments.`,
    "skills.title": `<span class="keyword">const</span> <span class="class-name">skills</span> = {`,
    "skills.plm.1": `PLM processes`,
    "skills.plm.2": `Workflow & ECM`,
    "skills.plm.3": `Change management`,
    "skills.plm.4": `Configuration`,
    "skills.data.1": `Data modelling`,
    "skills.data.2": `Reporting`,
    "skills.data.3": `Data analysis`,
    "skills.data.4": `Data extraction`,
    "skills.eng.1": `CAD integration`,
    "skills.eng.2": `BOM management`,
    "skills.eng.3": `Technical master data`,
    "skills.eng.4": `Classification`,
    "skills.it.1": `Troubleshooting`,
    "skills.it.2": `System administration`,
    "skills.it.3": `Problem solving`,
    "skills.it.4": `Technical English`,
    "skills.it.5": `Documentation`,
    "contact.title": `<span class="keyword">function</span> <span class="class-name">contactMe</span>() {`,
    "contact.text": `Got a PLM/PDM project, a role to fill, or just want to connect? Drop me a line.`,
    "contact.tag": `Let's talk.`,
    "contact.cta": `Save CV as PDF`,
    "contact.company": `company`,
    "contact.zone": `location`,
    "contact.zoneValue": `Italy · Available remotely`,
    "footer.note": `echo "Built with code & coffee"`,
    "console.who": `Application Consultant · PLM/PDM`,
    "console.cta": `Looking to collaborate?`
  }
};

/* ---------------- STATE ---------------- */
const SUPPORTED = ['it', 'en'];
function detectLang() {
  const saved = localStorage.getItem('siro-lang');
  if (saved && SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || 'it').slice(0, 2).toLowerCase();
  return nav === 'en' ? 'en' : 'it';
}
let currentLang = detectLang();

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------------- APPLY LANGUAGE ---------------- */
function applyLang(lang, persist = true) {
  if (!I18N[lang]) lang = 'it';
  currentLang = lang;
  const dict = I18N[lang];

  document.documentElement.lang = lang;
  if (dict.metaTitle) document.title = dict.metaTitle;
  const metaDesc = $('meta[name="description"]');
  if (metaDesc && dict.metaDesc) metaDesc.setAttribute('content', dict.metaDesc);

  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });

  $$('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  const toggle = $('#langToggle');
  if (toggle) {
    toggle.textContent = lang === 'it' ? 'EN' : 'IT';
    toggle.setAttribute('aria-label', lang === 'it' ? 'Switch to English' : 'Passa all\'italiano');
  }

  if (persist) localStorage.setItem('siro-lang', lang);

  startTypewriter();
  updateTime();
}

/* ---------------- TYPEWRITER ---------------- */
const roleEl = $('#roleText');
let typeTimer = null;
let roleIdx = 0, charIdx = 0, deleting = false;

function startTypewriter() {
  if (!roleEl) return;
  clearTimeout(typeTimer);
  roleIdx = 0; charIdx = 0; deleting = false;
  roleEl.textContent = '';
  typeTimer = setTimeout(typeRole, 600);
}

function typeRole() {
  const roles = I18N[currentLang].roles;
  const current = roles[roleIdx % roles.length];
  if (!deleting) {
    roleEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      typeTimer = setTimeout(typeRole, 1600);
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
  typeTimer = setTimeout(typeRole, deleting ? 35 : 70);
}

/* ---------------- BOOT SEQUENCE ---------------- */
function runBoot() {
  const bootScreen = $('#bootScreen');
  const bootText = $('#bootText');
  if (!bootScreen || !bootText) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hide = () => {
    bootScreen.classList.add('hidden');
    setTimeout(() => { bootScreen.style.display = 'none'; }, 700);
  };

  if (prefersReduced) { hide(); return; }

  const lines = [
    '[ OK ] Inizializzazione sistema...',
    '[ OK ] Caricamento moduli profilo...',
    '[ OK ] Montaggio driver PLM/PDM...',
    '[ OK ] Connessione al DB manifatturiero...',
    '[ OK ] Sequenza di avvio completata.',
    '',
    'Benvenuto in siro.profilo — v3.0',
    ''
  ];

  let i = 0;
  (function typeBoot() {
    if (i < lines.length) {
      bootText.textContent += lines[i] + '\n';
      i++;
      setTimeout(typeBoot, 120);
    } else {
      setTimeout(hide, 500);
    }
  })();

  bootScreen.addEventListener('click', hide, { once: true });
  // Failsafe: never block content for more than 2.6s
  setTimeout(hide, 2600);
}

/* ---------------- REVEAL ON SCROLL ---------------- */
function setupReveal() {
  const targets = $$('.section, .hero');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}

/* ---------------- NAV HIGHLIGHT ---------------- */
function setupNavHighlight() {
  const navLinks = $$('.nav-links a');
  const sections = $$('.section, .hero');
  const onScroll = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
    });
    navLinks.forEach(a => {
      const active = a.getAttribute('href') === '#' + current;
      a.style.color = active ? 'var(--accent)' : '';
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------------- MOBILE MENU ---------------- */
function setupMobileMenu() {
  const toggle = $('#navToggle');
  const menu = $('#navMenu');
  if (!toggle || !menu) return;

  const close = () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Apri menu');
  };

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
  });

  menu.addEventListener('click', e => {
    if (e.target.closest('a')) close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) close();
  });
}

/* ---------------- LIVE TIME ---------------- */
function updateTime() {
  const el = $('#liveTime');
  if (!el) return;
  const now = new Date();
  const locale = currentLang === 'en' ? 'en-GB' : 'it-IT';
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  el.textContent = currentLang === 'en'
    ? `Local time ${hh}:${mm}:${ss}`
    : `Ora locale ${hh}:${mm}:${ss}`;
  void locale;
}

/* ---------------- PRINT / CV ---------------- */
function setupPrint() {
  $$('.js-print-cv').forEach(btn => {
    btn.addEventListener('click', () => window.print());
  });
}

/* ---------------- KONAMI EASTER EGG ---------------- */
function setupKonami() {
  const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let idx = 0;
  window.addEventListener('keydown', (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (key === konami[idx]) {
      idx++;
      if (idx === konami.length) { activateEasterEgg(); idx = 0; }
    } else {
      idx = 0;
    }
  });
}

function activateEasterEgg() {
  document.body.style.transition = 'filter 0.5s';
  document.body.style.filter = 'hue-rotate(180deg)';
  setTimeout(() => { document.body.style.filter = 'hue-rotate(360deg)'; }, 800);
  setTimeout(() => { document.body.style.filter = ''; document.body.style.transition = ''; }, 2000);
  console.log('%c★ KONAMI CODE ACTIVATED ★', 'color:#00d9ff;font-size:24px;font-weight:bold;text-shadow:0 0 10px #00d9ff');
}

/* ---------------- CONSOLE BANNER ---------------- */
function consoleBanner() {
  const d = I18N[currentLang];
  console.log('%c┌─────────────────────────────────────────┐', 'color:#00d9ff');
  console.log('%c│  SIRO LEON DI MENNA — PORTFOLIO v3.0    │', 'color:#00d9ff;font-weight:bold');
  console.log(`%c│  ${d['console.who'].padEnd(39)}│`, 'color:#a855f7');
  console.log(`%c│  ${d['console.cta'].padEnd(39)}│`, 'color:#00ff88');
  console.log('%c│  → sdimenna01@gmail.com                 │', 'color:#00ff88');
  console.log('%c└─────────────────────────────────────────┘', 'color:#00d9ff');
}

/* ---------------- INIT ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  runBoot();
  setupReveal();
  setupNavHighlight();
  setupMobileMenu();
  setupPrint();
  setupKonami();

  const langToggle = $('#langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLang(currentLang === 'it' ? 'en' : 'it');
    });
  }

  applyLang(currentLang, false);
  consoleBanner();
  setInterval(updateTime, 1000);
});
