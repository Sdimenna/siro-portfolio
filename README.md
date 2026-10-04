# Siro Leon di Menna — Portfolio

Portfolio personale statico (nessun build, nessuna dipendenza), **bilingue IT/EN**.

> Application Consultant IT · PLM/PDM · PRO.FILE · BOM · Integrazione CAD · SQL

---

## 🎨 Direzione di design

Costruito seguendo la recipe **`pentagram`** (Paula Scher) della scuola *Information Architecture*:

```yaml
Design Read:
  artifact: portfolio one-page
  audience: hiring manager / tech lead di aziende IT (B2B)
  visual-language: "pentagram — type-as-image, flat color, strict grid"
  mode: redesign-overhaul
  visual-variance: 7 · motion: 2 · density: 4 · asset-dependence: 4 · brand-fidelity: 4
```

**Design system**
- **Palette**: ground crema `#F4F1E7` · ink `#111111` · un solo accento cobalto `#1E3FFF`
- **Tipografia**: una sola famiglia grottesca, **Archivo** (400–900). Display gigante, tracking negativo, testo maiuscolo per le etichette
- **Griglia**: 12 colonne, gutter 32px, ritmo 8px
- **Radius**: 0 ovunque · **Ombre**: nessuna
- **Motion**: solo tipografico (slide su baseline), rispetta `prefers-reduced-motion`
- **Signature moves**: nome a scala gigante · blocchi cobalto con numero di sezione · regole 1px full-width · metadata in micro-tipo

Niente Inter/Roboto, niente gradienti viola, niente emoji, niente card arrotondate — gli anti-pattern che rendono un portfolio "generico AI".

---

## 📁 Struttura

```
siro-portfolio/
├── index.html            # markup + contenuti (IT di default)
├── style.css             # design system + responsive + stile stampa/CV
├── script.js             # i18n IT/EN, menu mobile, reveal
├── favicon.svg           # icona
├── assets/
│   └── uniquebl.png      # screenshot reale del progetto Unique Beauty Lab
└── README.md
```

---

## 🚀 Anteprima locale

```bash
npx serve .
# oppure
python -m http.server 8080
```
Poi apri http://localhost:8080

---

## ✨ Feature

- 🌍 **Bilingue IT/EN** (toggle in alto, ricorda la scelta, rileva la lingua del browser)
- 🧭 **Menu mobile** a tendina + **navigazione con stato attivo**
- 🖼️ **Progetto reale in evidenza** con screenshot vero (non finto con CSS)
- 🖨️ **CV in PDF**: i pulsanti aprono la stampa con uno stile dedicato pulito (Ctrl+P → Salva come PDF)
- ♿ Accessibilità: skip link, focus visibile, `aria-*`, `alt`, reduced-motion
- 🔎 SEO: meta, Open Graph, Twitter Card, **JSON-LD Person**, canonical, favicon

---

## ✏️ Come aggiornarlo

- **Testi tradotti** → `script.js`, oggetto `I18N` (`it` / `en`). Ogni chiave `data-i18n`/`data-i18n-html` in `index.html` deve esistere in **entrambe** le lingue.
- **Percorso** → in `index.html` duplica un `<article class="row">` in `#experience`.
- **Aree di intervento** → duplica un `<li class="area">` in `#projects`.
- **Colori** → `style.css`, blocco `:root` (`--ground`, `--ink`, `--cobalt`).
- **Screenshot progetto** → sostituisci `assets/uniquebl.png` (idealmente 16:10).

---

## 🌐 Pubblicare

Repo `siro-portfolio` → **https://sdimenna.github.io/siro-portfolio/**

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root → Save.
Alternative: Netlify (drag & drop), Vercel (`npx vercel`).

Se cambi dominio, aggiorna `canonical` e `og:url` in `index.html`.

### og:image (opzionale)
Per l'anteprima social, crea un PNG 1200×630 e aggiungi in `<head>`:
```html
<meta property="og:image" content="https://sdimenna.github.io/siro-portfolio/og-image.png" />
```

---

## 📝 Da personalizzare

- **Date reali** nel percorso (`exp.role1.period`, `exp.edu1.period`, …) e nome università (`exp.edu1.org`)
- Eventuale **secondo progetto** nella sezione Progetti

---

## ⚠️ Nota (lavoro dipendente)

Vetrina professionale. Se il contratto prevede **esclusiva**, **autorizzazione attività extra** o **patto di non concorrenza**, verifica con un consulente del lavoro cosa puoi pubblicare. Meglio progetti in settori diversi dal business del datore (come Unique Beauty Lab).
