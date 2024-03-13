# Projet d'Utilisation d'une API et de la Librairie Leaflet

Ce projet est le résultat d'un travail pratique (TP) sur l'utilisation d'une API et de la librairie Leaflet pour des apprendre le JavaScript. Il a été développé dans le cadre de la formation DWWM.

## Présentation

Le projet est une application web qui exploite une [API](https://www.prevision-meteo.ch/services/) pour obtenir des données météorologiques. Ces données sont ensuite visualisables en cliquant sur des marqueurs insérés dans une carte créée avec [Leaflet](https://leafletjs.com/)

L'application est construite avec [ViteJS](https://vitejs.dev/), un outil de build qui offre une expérience de développement rapide et performante.

Un aspect important du projet est l'utilisation de fonctions asynchrones et de promesses pour gérer les requêtes à l'API. Voici un exemple de fonction asynchrone qui utilise une promesse pour récupérer des données de l'API :

```javascript
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur :', error);
  }
}
```

## Installation

Pour installer le projet en local, suivez les étapes suivantes :

1. Clonez le dépôt GitHub sur votre machine locale.
2. Naviguez jusqu'au dossier du projet.
3. Exécutez `npm install` pour installer les dépendances du projet.

## Utilisation

Pour lancer l'application en local, exécutez `npm run dev` dans le terminal. L'application sera accessible à l'adresse `http://localhost:5173`.

## Version en Production

La version d'exemple en production de l'application est déployée à l'adresse suivante : [https://dwwm.gregdesplaces.com](https://dwwm.gregdesplaces.com)

## Licence

Ce projet est sous licence MIT. Pour plus d'informations.