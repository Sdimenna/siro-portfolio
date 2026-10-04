# Siro Leon di Menna — Portfolio

Portfolio personale statico (nessun build, nessuna dipendenza), **trilingue IT / EN / ES**.

> Application Consultant IT · PLM/PDM · PRO.FILE · SQL Server & C# · BOM · Integrazione CAD

---

## 🎨 Direzione di design

Recipe **`pentagram`** (Paula Scher), scuola *Information Architecture*:

```yaml
Design Read:
  artifact: portfolio one-page
  audience: hiring manager / tech lead di aziende IT (B2B)
  visual-language: "pentagram — type-as-image, flat color, strict grid"
  mode: redesign-overhaul
  visual-variance: 7 · motion: 2 · density: 4 · asset-dependence: 4 · brand-fidelity: 4
```

**Design system**
- **Palette**: ground crema `#F4F1E7` · ink `#111111` · un solo accento cobalto `#1E3FFF` (usato con parsimonia)
- **Tipografia**: una sola famiglia grottesca, **Archivo** (400–900)
- **Griglia**: 12 colonne, gutter 32px · **Radius 0** · **nessuna ombra**
- **Motion**: solo tipografico, rispetta `prefers-reduced-motion`
- **Signature moves**: nome a scala gigante · blocchi cobalto con numero di sezione · regole 1px full-width · metadata in micro-tipo

---

## 📁 Struttura

```
siro-portfolio/
├── index.html                      # markup + contenuti (IT di default)
├── style.css                       # design system + responsive + stile stampa
├── script.js                       # i18n IT/EN/ES, selettore lingua, menu mobile, reveal
├── favicon.svg
├── assets/
│   ├── uniquebl.png                # screenshot reale del progetto Unique Beauty Lab
│   └── CV-Siro-Leon-di-Menna.pdf   # CV scaricabile
└── README.md
```

---

## 🚀 Anteprima locale

```bash
npx serve .
# oppure
python -m http.server 8080
```

---

## ✨ Feature

- 🌍 **Trilingue IT / EN / ES** — selettore con 3 pulsanti, ricorda la scelta, rileva la lingua del browser
- 📄 **CV scaricabile** — i pulsanti "Scarica CV" puntano al PDF reale (`assets/CV-Siro-Leon-di-Menna.pdf`)
- 🖼️ **Progetto reale in evidenza** con screenshot vero (non finto con CSS)
- 🧭 **Menu mobile** a tendina + navigazione con stato attivo
- ♿ Accessibilità: skip link, focus visibile, `aria-*`, `alt`, reduced-motion
- 🔎 SEO: meta, Open Graph, Twitter Card, **JSON-LD Person**, canonical, favicon

---

## ✏️ Come aggiornarlo

- **Testi tradotti** → `script.js`, oggetto `I18N` (`it`, `en`, `es`). Ogni chiave `data-i18n`/`data-i18n-html` in `index.html` deve esistere in **tutte e tre** le lingue.
- **CV** → sostituisci `assets/CV-Siro-Leon-di-Menna.pdf` (stesso nome) e i link si aggiornano da soli.
- **Screenshot progetto** → sostituisci `assets/uniquebl.png` (idealmente 16:10).
- **Percorso** → in `index.html` duplica un `<article class="row">` in `#experience`.
- **Aree di intervento** → duplica un `<li class="area">` in `#projects`.
- **Colori** → `style.css`, blocco `:root` (`--ground`, `--ink`, `--cobalt`).

---

## 🌐 Pubblicare

Repo `siro-portfolio` → **https://sdimenna.github.io/siro-portfolio/**

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root → Save.
Alternative: Netlify (drag & drop), Vercel (`npx vercel`).

Se cambi dominio, aggiorna `canonical` e `og:url` in `index.html`.

### og:image (opzionale)
```html
<meta property="og:image" content="https://sdimenna.github.io/siro-portfolio/og-image.png" />
```

---

## ⚠️ Nota (lavoro dipendente)

Vetrina professionale. Se il contratto prevede **esclusiva**, **autorizzazione attività extra** o **patto di non concorrenza**, verifica con un consulente del lavoro cosa puoi pubblicare. Meglio progetti in settori diversi dal business del datore (come Unique Beauty Lab).
