# Nexora Studio : site web (partie 1, front)

React 18 + Vite + React Router + Framer Motion.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère le dossier dist/
```

## Pages

| Route | Fichier |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/services` | `src/pages/Services.jsx` |
| `/methode` | `src/pages/Methode.jsx` |
| `/realisations` | `src/pages/Realisations.jsx` |
| `/realisations/:slug` | `src/pages/RealisationDetail.jsx` |
| `/a-propos` | `src/pages/APropos.jsx` |
| `/contact` | `src/pages/Contact.jsx` |

## À compléter

- `src/config.js` : e-mail et ville (laissés vides, la ligne est masquée tant qu'ils sont vides). Vérifie aussi l'indicatif +237 des numéros.
- `src/data/content.js` : tous les textes, services et réalisations. Ajoute les liens des sites en ligne dans les réalisations quand tu veux.

## Préparé pour le back-office (partie 2)

Les pages ne lisent pas les données directement : elles passent par `src/lib/api.js`
(`useProjects`, `useProject`, `submitLead`). Le back-office remplacera le contenu de ces
trois fonctions par des appels à la base (Firestore ou API) sans toucher aux pages.
Le formulaire de contact appelle déjà `submitLead` pour enregistrer les demandes.

## Déploiement

`vercel.json` et `public/_redirects` gèrent les routes (Vercel et Netlify). Build : `npm run build`, dossier `dist`.
