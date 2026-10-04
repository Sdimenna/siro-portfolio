# Siro Leon di Menna — Portfolio

Portfolio personale in stile **cyberpunk / terminale**, statico (nessun build, nessuna dipendenza)
e **bilingue IT/EN**.

> Application Consultant PLM/PDM · PRO.FILE · BOM · Integrazione CAD · SQL

---

## 🚀 Anteprima locale

Doppio click su `index.html`, oppure avvia un server locale (consigliato, così funzionano le path):

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
├── style.css       # tema, responsive, accessibilità, stile stampa/CV
├── script.js       # i18n IT/EN, menu mobile, animazioni, easter egg
├── favicon.svg     # icona del sito
└── README.md       # questo file
```

---

## ✨ Cosa c'è dentro

- ⚡ **Boot sequence** all'avvio, breve e **saltabile** (si chiude con un click e comunque dopo 2.6s)
- 🌍 **Bilingue IT/EN** con toggle in alto a destra (ricorda la scelta, rileva la lingua del browser)
- ⌨️ **Typewriter** sui ruoli, tradotto per lingua
- 🧭 **Menu mobile** a tendina (prima era nascosto senza alternativa)
- 🧱 Sezioni: **Chi sono · Percorso (esperienza + formazione) · Progetti · Competenze · Contatti**
- 🌟 **Progetto in evidenza**: Unique Beauty Lab (sito + prenotazioni online)
- 🔗 Link a **LinkedIn**, **GitHub**, **Mirve**
- 🖨️ **CV in PDF**: i pulsanti "CV in PDF" aprono la stampa con uno **stile dedicato pulito** (Ctrl+P → Salva come PDF)
- ♿ Accessibilità: skip link, focus visibile, `aria-*`, rispetto di `prefers-reduced-motion`
- 🔎 SEO: meta description, Open Graph, Twitter Card, **JSON-LD Person**, `canonical`, `favicon`
- 🥚 Easter egg: `↑ ↑ ↓ ↓ ← → ← → B A`

---

## ✏️ Come aggiornarlo

### Aggiungere/modificare un progetto in evidenza
In `index.html` cerca `<!-- Featured real project -->`.
Per aggiungerne un secondo, duplica il blocco `<article class="featured-project">…</article>`.

### Aggiungere una voce al percorso
In `index.html` cerca `<div class="timeline">` e duplica un `<article class="timeline-item">…</article>`.

### Modificare i testi tradotti
I testi tradotti stanno in `script.js`, oggetto `I18N` → `it` e `en`.
**Regola:** ogni chiave `data-i18n="..."` in `index.html` deve esistere in **entrambe** le lingue.
Se aggiungi una chiave solo in `it`, in inglese resterà il testo italiano.

### Cambiare i colori
In `style.css`, blocco `:root`:
- `--accent` cyan · `--accent-2` viola · `--accent-3` verde

---

## 🌐 Pubblicare gratis

Il repo si chiama `siro-portfolio` → l'indirizzo sarà:
**https://sdimenna.github.io/siro-portfolio/**

### GitHub Pages
1. Push su GitHub
2. Repo → **Settings** → **Pages**
3. Source: `Deploy from a branch` → Branch: `main` / root → **Save**
4. Dopo 1-2 minuti il sito è online all'indirizzo sopra

### Alternative
- **Netlify**: drag & drop della cartella su https://app.netlify.com/drop
- **Vercel**: `npx vercel` nella cartella

> Dopo la pubblicazione, aggiorna l'URL nel `<link rel="canonical">` e nei meta `og:url` di
> `index.html` se il dominio finale è diverso.

---

## ⚠️ Nota importante (lavoro dipendente)

Il portfolio è una **vetrina professionale**. Se il tuo contratto prevede clausole di
**esclusiva**, **autorizzazione per attività extra** o un **patto di non concorrenza**,
valuta con un consulente del lavoro cosa puoi pubblicare.
In particolare evita di offrire servizi che possano sovrapporsi al business del datore di lavoro
o ai suoi clienti. Meglio puntare su progetti **in settori/ambiti diversi** (come Unique Beauty Lab).
