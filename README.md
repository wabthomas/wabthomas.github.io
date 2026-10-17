# wabthomas.github.io

Portfolio personnel de **Thomas Zawadi** — développeur full-stack, blogueur, créateur de contenu et digital marketer basé à Goma, RDC.

🌐 Site : [wabthomas.github.io](https://wabthomas.github.io)

## À propos

Site vitrine bilingue **FR / EN** en one-page :

- **Accueil** — présentation et liens sociaux
- **À propos** — parcours, compétences (front-end, back-end, contenu & marketing)
- **Projets** — Wab Infos, adiong, expérimentations open source
- **Services** — développement web, marketing digital, création de contenu, conseil
- **Blog** — vers [wab-infos.com](https://wab-infos.com)
- **Contact** — formulaire et canaux directs

## Structure

```
index.html        # Page principale
css/style.css     # Styles (thème sombre, dégradés bleu/violet)
js/main.js        # i18n FR/EN, navigation, animations, formulaire
portrait.jpg      # Portrait
favicon.svg       # Favicon
```

## Personnalisation

- **E-mail de contact** : renseignez `CONTACT_EMAIL` dans `js/main.js` pour activer l'envoi direct par e-mail (sinon le message est copié dans le presse-papier).
- **Textes & traductions** : modifiables dans `js/main.js` (objets `translations.fr` / `translations.en`).
- **Couleurs** : variables CSS en tête de `css/style.css` (`--accent-1`, `--accent-2`).

## Développement

Aucune dépendance ni étape de build : ouvrez `index.html` ou servez le dossier avec n'importe quel serveur statique.

```bash
python3 -m http.server 8000
```

---

© Thomas Zawadi · WabCompany LTD
