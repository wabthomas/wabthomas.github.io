# wabthomas.github.io

Portfolio de **Thomas Zawadi** — React + Vite, déployé sur GitHub Pages.

🌐 [wabthomas.github.io](https://wabthomas.github.io/)

## Stack

- React 18 + Vite
- i18n FR / EN
- GitHub Actions → GitHub Pages

## Développement

```bash
npm install
npm run dev
```

Build local :

```bash
npm run build
npm run preview
```

## Personnalisation

- Textes / traductions : `src/i18n/translations.js`
- E-mail contact (`mailto`) : `CONTACT_EMAIL` dans le même fichier
- Styles : `src/styles/style.css`

## Déploiement

Push sur `main` → workflow **Deploy to GitHub Pages** build et publie `dist/`.

Dans les réglages du repo : **Pages** → Source = **GitHub Actions**.

---

© Thomas Zawadi · WabCompany LTD
