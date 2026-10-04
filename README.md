# Siro Leon di Menna — Portfolio

Portfolio personale **professionale** (stile moderno, tema chiaro/scuro), statico (nessun build,
nessuna dipendenza) e **bilingue IT/EN**.

> Application Consultant IT · PLM/PDM · PRO.FILE · BOM · Integrazione CAD · SQL

---

## 🚀 Anteprima locale

Doppio click su `index.html`, oppure avvia un server locale (consigliato):

```bash
npx serve .
# oppure
python -m http.server 8080
```

Poi apri http://localhost:8080

---

## 📁 Struttura

```
siro-portfolio/
├── index.html      # markup + contenuti (IT di default)
├── style.css       # tema chiaro/scuro, responsive, accessibilità, stile stampa/CV
├── script.js       # i18n IT/EN, toggle tema, menu mobile, animazioni
├── favicon.svg     # icona del sito
└── README.md       # questo file
```

---

## ✨ Cosa c'è dentro

- 🎨 **Stile professionale** chiaro di default + **dark mode** opzionale (toggle in alto, ricorda la scelta)
- 🌍 **Bilingue IT/EN** con toggle (ricorda la scelta, rileva la lingua del browser)
- 🧭 **Menu mobile** a tendina
- 🧱 Sezioni: **Chi sono · Percorso · Progetti · Competenze · Contatti**
- 🌟 **Progetto in evidenza**: Unique Beauty Lab (sito + prenotazioni online, Next.js)
- 🔗 Link a **LinkedIn**, **GitHub**, **Mirve**
- 🖨️ **CV in PDF**: i pulsanti "Scarica CV" aprono la stampa con uno **stile dedicato pulito** (Ctrl+P → Salva come PDF)
- ♿ Accessibilità: skip link, focus visibile, `aria-*`, rispetto di `prefers-reduced-motion`
- 🔎 SEO: meta description, Open Graph, Twitter Card, **JSON-LD Person**, `canonical`, `favicon`

---

## ✏️ Come aggiornarlo

### Aggiungere/modificare un progetto in evidenza
In `index.html` cerca `<!-- Featured real project -->`.
Per aggiungerne un secondo, duplica il blocco `<article class="featured-project">…</article>`.

### Aggiungere una voce al percorso
In `index.html` cerca `<div class="timeline">` e duplica un `<article class="timeline-item">…</article>`.

### Modificare i testi tradotti
I testi tradotti stanno in `script.js`, oggetto `I18N` → `it` e `en`.
**Regola:** ogni chiave `data-i18n="..."` / `data-i18n-html="..."` in `index.html` deve esistere in
**entrambe** le lingue, altrimenti in inglese resta il testo italiano.

### Cambiare i colori
In `style.css`:
- blocco `:root` → tema **chiaro**
- blocco `[data-theme="dark"]` → tema **scuro**
- variabile chiave: `--accent` (indaco)

---

## 🌐 Pubblicare gratis

Il repo si chiama `siro-portfolio` → l'indirizzo è:
**https://sdimenna.github.io/siro-portfolio/**

### GitHub Pages
1. Push su GitHub
2. Repo → **Settings** → **Pages**
3. Source: `Deploy from a branch` → Branch: `main` / root → **Save**
4. Dopo 1-2 minuti il sito è online

### Alternative
- **Netlify**: drag & drop della cartella su https://app.netlify.com/drop
- **Vercel**: `npx vercel` nella cartella

> Se usi un dominio diverso, aggiorna `<link rel="canonical">` e i meta `og:url` in `index.html`.

### og:image (opzionale)
Per una bella anteprima quando condividi il link, crea un PNG 1200×630 e aggiungi in `<head>`:
```html
<meta property="og:image" content="https://sdimenna.github.io/siro-portfolio/og-image.png" />
```

---

## 📝 Da personalizzare

- **Date reali** nel percorso (`exp.role1.period`, `exp.edu1.period`, …) e nome dell'università (`exp.edu1.org`)
- Eventuali **altri progetti** nella sezione Progetti
- **og:image** (vedi sopra)

---

## ⚠️ Nota importante (lavoro dipendente)

Il portfolio è una **vetrina professionale**. Se il tuo contratto prevede clausole di
**esclusiva**, **autorizzazione per attività extra** o un **patto di non concorrenza**,
valuta con un consulente del lavoro cosa puoi pubblicare.
Evita di offrire servizi che possano sovrapporsi al business del datore di lavoro o ai suoi clienti:
meglio progetti in **settori/ambiti diversi** (come Unique Beauty Lab).
