# Siro Leon di Menna — Landing Page

Landing page personale in stile **cyberpunk / terminale**, completamente statica (no build, no dipendenze).

## 🚀 Come aprirla
Doppio click su `index.html` → si apre nel browser.

## 📁 Struttura
```
siro-portfolio/
├── index.html      # markup principale
├── style.css       # tema cyberpunk + responsive
├── script.js       # animazioni + interazioni
└── README.md       # questo file
```

## ✨ Features
- ⚡ Boot sequence all'apertura (effetto terminale)
- ⌨️ Typewriter sui ruoli (Application Consultant, PLM/PDM Specialist, ...)
- 📊 Counter animati e skill bars
- 🌈 Gradient orb + grid background animati
- 🥚 **Easter egg**: prova ↑↑↓↓←→←→BA 🎮
- 📺 Scanlines CRT sul terminale
- 📱 Responsive (mobile/tablet/desktop)
- 💻 Console banner "hacker style" (apri DevTools)

## 🛠️ Da personalizzare
In `index.html` cerca e modifica:
- Eventuali progetti da aggiungere nella sezione "Servizi"
- I testi delle varie sezioni in italiano

In `style.css` puoi cambiare i colori base (`:root` in alto):
- `--accent`: cyan (#00d9ff)
- `--accent-2`: viola (#a855f7)
- `--accent-3`: verde (#00ff88)

## 🌐 Pubblicarla gratis
- **GitHub Pages**: push su repo → Settings → Pages → abilita
- **Netlify**: drag & drop della cartella su [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: `npx vercel` nella cartella
