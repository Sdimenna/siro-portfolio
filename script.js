/* ============================================================
   SIRO LEON DI MENNA — Portfolio v5
   Bilingual IT/EN · no dependencies
   ============================================================ */

const I18N = {
  it: {
    metaTitle: `Siro Leon di Menna — Application Consultant IT · PLM/PDM`,
    metaDesc: `Application Consultant IT specializzato in PLM/PDM e PRO.FILE. Background in informatica, studi in ingegneria aerospaziale. BOM, anagrafiche, integrazioni CAD, workflow e SQL per il manifatturiero.`,
    "a11y.skip": `Vai al contenuto`,

    "nav.about": `Chi sono`,
    "nav.experience": `Percorso`,
    "nav.projects": `Progetti`,
    "nav.skills": `Competenze`,
    "nav.contact": `Contatti`,
    "nav.cv": `Scarica CV`,

    "hero.kicker": `Application Consultant · IT & PLM`,
    "hero.zone": `Italia · remoto/ibrido`,
    "hero.avail": `Disponibile`,
    "hero.role": `Consulente applicativo IT specializzato in PLM/PDM (PRO.FILE).`,
    "hero.desc": `Background in informatica e studi in ingegneria aerospaziale. Aiuto le aziende manifatturiere a digitalizzare i processi tecnici — distinte base (BOM), anagrafiche, integrazioni CAD e workflow PLM — con solide basi di SQL, dati e IT.`,
    "hero.cta1": `Contattami`,
    "hero.cta2": `Scarica CV`,

    "fact.role.label": `Ruolo`,
    "fact.role.value": `Application Consultant`,
    "fact.focus.label": `Focus`,
    "fact.focus.value": `PLM/PDM · PRO.FILE`,
    "fact.edu.label": `Formazione`,
    "fact.edu.value": `Informatica · Ing. Aerospaziale`,
    "fact.lang.label": `Lingue`,
    "fact.lang.value": `Italiano · English`,

    "about.title": `Chi sono`,
    "about.p1": `Sono un <strong>Application Consultant IT</strong> specializzato in soluzioni <strong>PLM/PDM</strong>, con un focus deciso su <strong>PRO.FILE</strong> e il settore manifatturiero.`,
    "about.p2": `Supporto le aziende nell'ottimizzazione dei processi tecnici: dalla gestione delle anagrafiche e delle distinte base (BOM) alla configurazione di workflow e alle integrazioni CAD.`,
    "about.p3": `Vengo da un percorso in <strong>informatica</strong> e sto proseguendo gli studi in <strong>ingegneria aerospaziale</strong>: questo mix mi permette di parlare sia la lingua dell'IT (SQL, dati, integrazioni) sia quella dell'ufficio tecnico (BOM, CAD, processi).`,
    "about.p4": `Attualmente opero come Application Consultant presso <a href="https://www.mirve.it" target="_blank" rel="noopener" class="link">Mirve</a>, dove mi occupo dell'implementazione di PRO.FILE per supportare le aziende manifatturiere nella digitalizzazione dei processi tecnici.`,

    "meta.company": `Azienda`,
    "meta.role": `Ruolo`,
    "meta.focus": `Focus`,
    "meta.data": `Dati`,
    "meta.edu": `Formazione`,
    "meta.eduValue": `Informatica · Ing. Aerospaziale (in corso)`,
    "meta.langs": `Lingue`,
    "meta.zone": `Zona`,
    "meta.zoneValue": `Italia · remoto/ibrido`,

    "exp.title": `Percorso`,
    "exp.role1.period": `in corso`,
    "exp.role1.place": `Italia (ibrido)`,
    "exp.role1.title": `Application Consultant — PLM/PDM`,
    "exp.role1.b1": `Implementazione e configurazione di ambienti PRO.FILE per aziende manifatturiere.`,
    "exp.role1.b2": `Gestione di distinte base (BOM), anagrafiche e classificazione articoli.`,
    "exp.role1.b3": `Progettazione e setup di integrazioni tra PLM e sistemi CAD.`,
    "exp.role1.b4": `Configurazione di workflow di approvazione, rilascio e gestione modifiche (ECM).`,
    "exp.role1.b5": `Report ed estrazioni dati su SQL a supporto dell'ufficio tecnico.`,
    "exp.role1.tags": `PRO.FILE · PLM · PDM · BOM · CAD · SQL · Workflow`,
    "exp.edu1.period": `in corso`,
    "exp.edu1.title": `Laurea in Ingegneria Aerospaziale`,
    "exp.edu1.org": `Università · Italia`,
    "exp.edu1.desc": `Meccanica del volo, aerodinamica, strutture, sistemi.`,
    "exp.edu2.period": `completato`,
    "exp.edu2.title": `Percorso in Informatica`,
    "exp.edu2.desc": `Basi di programmazione, database, sistemi e reti — la solida base tecnica dietro il lavoro su PLM e dati.`,
    "exp.lang.title": `Lingue`,
    "exp.lang.desc": `Italiano (madrelingua) · Inglese (tecnico/professionale)`,

    "proj.title": `Progetti & aree di intervento`,
    "proj.note": `Un progetto reale in evidenza e le aree su cui lavoro ogni giorno. Alcuni dettagli sono coperti da riservatezza: referenze disponibili su richiesta.`,
    "proj.fp.eyebrow": `Progetto in evidenza`,
    "proj.fp.title": `Unique Beauty Lab — sito + prenotazioni online`,
    "proj.fp.desc": `Sito web e sistema di prenotazione per un centro estetico: catalogo trattamenti con durata e prezzo, scelta di giorno e ora sulle disponibilità reali, conferma e aggiunta al calendario. Sviluppato end-to-end e online in produzione.`,
    "proj.fp.b1": `Frontend Next.js responsive, da mobile a desktop.`,
    "proj.fp.b2": `Prenotazioni con slot realmente liberi, senza doppie prenotazioni.`,
    "proj.fp.b3": `Catalogo di 23 trattamenti divisi in 5 categorie.`,
    "proj.fp.b4": `Contatto rapido via WhatsApp e integrazione con il calendario.`,
    "proj.fp.tags": `Next.js · React · Booking · Responsive · SEO`,
    "proj.fp.cta": `Visita il sito`,
    "proj.c1.title": `Implementazione PRO.FILE`,
    "proj.c1.desc": `Setup e configurazione completa di ambienti PRO.FILE su misura: parametrizzazione, migrazione dati, test e go-live.`,
    "proj.c1.tags": `PRO.FILE · Setup · Migrazione · Go-live`,
    "proj.c2.title": `BOM & Anagrafiche`,
    "proj.c2.desc": `Strutture distinte base, codifica articoli, classificazione e governance delle anagrafiche tecniche.`,
    "proj.c2.tags": `BOM · Anagrafiche · Classificazione`,
    "proj.c3.title": `Integrazione CAD–PLM`,
    "proj.c3.desc": `Connettori e sincronizzazione tra PRO.FILE e sistemi CAD: metadati, check-in/out e gestione versioni sempre coerenti.`,
    "proj.c3.tags": `CAD · API · Versioning`,
    "proj.c4.title": `Workflow & ECM`,
    "proj.c4.desc": `Workflow personalizzati per approvazioni, rilasci e gestione delle modifiche tecniche, con tracciabilità end-to-end.`,
    "proj.c4.tags": `Workflow · ECM · Approvazioni`,
    "proj.c5.title": `SQL & Reporting`,
    "proj.c5.desc": `Query, viste e report personalizzati su database PLM per estrarre dati affidabili e supportare le decisioni.`,
    "proj.c5.tags": `SQL · Report · Analytics`,
    "proj.c6.title": `Supporto & Troubleshooting`,
    "proj.c6.desc": `Analisi incidenti, root cause, documentazione e supporto continuativo su ambienti PLM/PDM e IT correlati.`,
    "proj.c6.tags": `Supporto · Debug · IT`,

    "skills.title": `Competenze`,
    "skills.plm.list": `PRO.FILE · Processi PLM · Workflow & ECM · Gestione modifiche · Configurazione`,
    "skills.data.title": `Dati`,
    "skills.data.list": `SQL · Modellazione dati · Reporting · Analisi dati · Estrazione dati`,
    "skills.eng.title": `CAD & Ingegneria`,
    "skills.eng.list": `Integrazione CAD · Gestione BOM · Anagrafiche tecniche · Classificazione`,
    "skills.it.title": `IT & Soft skills`,
    "skills.it.list": `Troubleshooting · System administration · Problem solving · Inglese tecnico · Documentazione`,

    "contact.title": `Contattami`,
    "contact.text": `Hai un progetto IT o PLM/PDM, un ruolo da coprire o semplicemente vuoi confrontarti? Scrivimi.`,
    "contact.zone": `Zona`,
    "contact.zoneValue": `Italia · Disponibile in remoto`,
    "contact.ctaCv": `Salva il CV in PDF`,

    "footer.role": `Application Consultant IT · PLM/PDM`,
    "console.who": `Application Consultant IT · PLM/PDM`,
    "console.cta": `Cerchi collaborazione?`
  },

  en: {
    metaTitle: `Siro Leon di Menna — IT Application Consultant · PLM/PDM`,
    metaDesc: `IT Application Consultant specialised in PLM/PDM and PRO.FILE, with a computer-science background and ongoing aerospace engineering studies. BOM, master data, CAD integrations, workflows and SQL for manufacturing.`,
    "a11y.skip": `Skip to content`,

    "nav.about": `About`,
    "nav.experience": `Experience`,
    "nav.projects": `Work`,
    "nav.skills": `Skills`,
    "nav.contact": `Contact`,
    "nav.cv": `Download CV`,

    "hero.kicker": `Application Consultant · IT & PLM`,
    "hero.zone": `Italy · remote/hybrid`,
    "hero.avail": `Available`,
    "hero.role": `IT application consultant specialised in PLM/PDM (PRO.FILE).`,
    "hero.desc": `Computer-science background and ongoing aerospace engineering studies. I help manufacturing companies digitalise their technical processes — bills of materials (BOM), master data, CAD integrations and PLM workflows — backed by solid SQL, data and IT skills.`,
    "hero.cta1": `Get in touch`,
    "hero.cta2": `Download CV`,

    "fact.role.label": `Role`,
    "fact.role.value": `Application Consultant`,
    "fact.focus.label": `Focus`,
    "fact.focus.value": `PLM/PDM · PRO.FILE`,
    "fact.edu.label": `Education`,
    "fact.edu.value": `Computer Science · Aerospace Eng.`,
    "fact.lang.label": `Languages`,
    "fact.lang.value": `Italian · English`,

    "about.title": `About me`,
    "about.p1": `I am an <strong>IT Application Consultant</strong> specialised in <strong>PLM/PDM</strong> solutions, with a strong focus on <strong>PRO.FILE</strong> and the manufacturing industry.`,
    "about.p2": `I help companies optimise their technical processes: from master data and bills of materials (BOM) to workflow configuration and CAD integrations.`,
    "about.p3": `I come from a <strong>computer science</strong> background and I am continuing my studies in <strong>aerospace engineering</strong>: this mix lets me speak both the language of IT (SQL, data, integrations) and that of the engineering office (BOM, CAD, processes).`,
    "about.p4": `I currently work as an Application Consultant at <a href="https://www.mirve.it" target="_blank" rel="noopener" class="link">Mirve</a>, where I implement PRO.FILE to support manufacturing companies in digitalising their technical processes.`,

    "meta.company": `Company`,
    "meta.role": `Role`,
    "meta.focus": `Focus`,
    "meta.data": `Data`,
    "meta.edu": `Education`,
    "meta.eduValue": `Computer Science · Aerospace Eng. (ongoing)`,
    "meta.langs": `Languages`,
    "meta.zone": `Location`,
    "meta.zoneValue": `Italy · remote/hybrid`,

    "exp.title": `Experience`,
    "exp.role1.period": `current`,
    "exp.role1.place": `Italy (hybrid)`,
    "exp.role1.title": `Application Consultant — PLM/PDM`,
    "exp.role1.b1": `Implementation and configuration of PRO.FILE environments for manufacturing companies.`,
    "exp.role1.b2": `Management of bills of materials (BOM), master data and part classification.`,
    "exp.role1.b3": `Design and setup of integrations between PLM and CAD systems.`,
    "exp.role1.b4": `Configuration of approval, release and engineering change (ECM) workflows.`,
    "exp.role1.b5": `SQL reporting and data extraction to support the engineering office.`,
    "exp.role1.tags": `PRO.FILE · PLM · PDM · BOM · CAD · SQL · Workflow`,
    "exp.edu1.period": `ongoing`,
    "exp.edu1.title": `BSc in Aerospace Engineering`,
    "exp.edu1.org": `University · Italy`,
    "exp.edu1.desc": `Flight mechanics, aerodynamics, structures, systems.`,
    "exp.edu2.period": `completed`,
    "exp.edu2.title": `Computer Science studies`,
    "exp.edu2.desc": `Programming fundamentals, databases, systems and networks — the solid technical base behind my PLM and data work.`,
    "exp.lang.title": `Languages`,
    "exp.lang.desc": `Italian (native) · English (technical/professional)`,

    "proj.title": `Projects & areas of work`,
    "proj.note": `A real project in the spotlight plus the areas I work on every day. Some details are confidential: references available on request.`,
    "proj.fp.eyebrow": `Featured project`,
    "proj.fp.title": `Unique Beauty Lab — website + online booking`,
    "proj.fp.desc": `Website and booking system for a beauty salon: treatment catalogue with duration and price, day and time selection based on real availability, confirmation and calendar sync. Built end-to-end and live in production.`,
    "proj.fp.b1": `Responsive Next.js frontend, from mobile to desktop.`,
    "proj.fp.b2": `Bookings with genuinely free slots, no double bookings.`,
    "proj.fp.b3": `Catalogue of 23 treatments across 5 categories.`,
    "proj.fp.b4": `Quick contact via WhatsApp and calendar integration.`,
    "proj.fp.tags": `Next.js · React · Booking · Responsive · SEO`,
    "proj.fp.cta": `Visit the website`,
    "proj.c1.title": `PRO.FILE Implementation`,
    "proj.c1.desc": `Full setup and configuration of tailor-made PRO.FILE environments: parametrisation, data migration, testing and go-live.`,
    "proj.c1.tags": `PRO.FILE · Setup · Migration · Go-live`,
    "proj.c2.title": `BOM & Master Data`,
    "proj.c2.desc": `Bill-of-materials structures, part coding, classification and governance of technical master data.`,
    "proj.c2.tags": `BOM · Master data · Classification`,
    "proj.c3.title": `CAD–PLM Integration`,
    "proj.c3.desc": `Connectors and synchronisation between PRO.FILE and CAD systems: metadata, check-in/out and consistent version management.`,
    "proj.c3.tags": `CAD · API · Versioning`,
    "proj.c4.title": `Workflow & ECM`,
    "proj.c4.desc": `Custom workflows for approvals, releases and engineering change management, with end-to-end traceability.`,
    "proj.c4.tags": `Workflow · ECM · Approvals`,
    "proj.c5.title": `SQL & Reporting`,
    "proj.c5.desc": `Queries, views and custom reports on PLM databases to extract reliable data and support decisions.`,
    "proj.c5.tags": `SQL · Reporting · Analytics`,
    "proj.c6.title": `Support & Troubleshooting`,
    "proj.c6.desc": `Incident analysis, root cause, documentation and ongoing support on PLM/PDM and related IT environments.`,
    "proj.c6.tags": `Support · Debug · IT`,

    "skills.title": `Skills`,
    "skills.plm.list": `PRO.FILE · PLM processes · Workflow & ECM · Change management · Configuration`,
    "skills.data.title": `Data`,
    "skills.data.list": `SQL · Data modelling · Reporting · Data analysis · Data extraction`,
    "skills.eng.title": `CAD & Engineering`,
    "skills.eng.list": `CAD integration · BOM management · Technical master data · Classification`,
    "skills.it.title": `IT & Soft skills`,
    "skills.it.list": `Troubleshooting · System administration · Problem solving · Technical English · Documentation`,

    "contact.title": `Contact`,
    "contact.text": `Got an IT or PLM/PDM project, a role to fill, or just want to connect? Drop me a line.`,
    "contact.zone": `Location`,
    "contact.zoneValue": `Italy · Available remotely`,
    "contact.ctaCv": `Save CV as PDF`,

    "footer.role": `IT Application Consultant · PLM/PDM`,
    "console.who": `IT Application Consultant · PLM/PDM`,
    "console.cta": `Looking to collaborate?`
  }
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const SUPPORTED = ['it', 'en'];

function detectLang() {
  try {
    const saved = localStorage.getItem('siro-lang');
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch (e) { /* ignore */ }
  const nav = (navigator.language || 'it').slice(0, 2).toLowerCase();
  return nav === 'en' ? 'en' : 'it';
}

let currentLang = detectLang();

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

  if (persist) { try { localStorage.setItem('siro-lang', lang); } catch (e) {} }
  updateTime();
}

function setupReveal() {
  const targets = $$('.section, .hero');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(el => el.classList.add('in'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}

function setupNavHighlight() {
  const navLinks = $$('.nav a');
  const sections = $$('main .section, .hero');
  const onScroll = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function setupMobileMenu() {
  const toggle = $('#navToggle');
  const menu = $('#navMenu');
  const nav = $('.site-nav');
  if (!toggle || !menu || !nav) return;

  const close = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Apri menu');
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
  });

  menu.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 860) close(); });
}

function updateTime() {
  const el = $('#liveTime');
  if (!el) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  el.textContent = currentLang === 'en' ? `Local time ${hh}:${mm}` : `Ora locale ${hh}:${mm}`;
}

function setupPrint() {
  $$('.js-print-cv').forEach(btn => btn.addEventListener('click', () => window.print()));
}

function consoleBanner() {
  const d = I18N[currentLang];
  console.log('%cSiro Leon di Menna — portfolio v5', 'color:#1E3FFF;font-weight:bold;font-size:13px');
  console.log('%c' + d['console.who'], 'color:#111');
  console.log('%c' + d['console.cta'] + '  →  sdimenna01@gmail.com', 'color:#1E3FFF');
}

document.addEventListener('DOMContentLoaded', () => {
  setupReveal();
  setupNavHighlight();
  setupMobileMenu();
  setupPrint();

  const langToggle = $('#langToggle');
  if (langToggle) langToggle.addEventListener('click', () => applyLang(currentLang === 'it' ? 'en' : 'it'));

  applyLang(currentLang, false);
  consoleBanner();
  updateTime();
  setInterval(updateTime, 1000);
});
