# Projet d'Utilisation d'une API et de la Librairie Leaflet

Ce projet est le résultat d'un travail pratique (TP) sur l'utilisation d'une API et de la librairie [Leaflet](https://leafletjs.com/) pour apprendre le JavaScript. Il a été développé dans le cadre de la formation DWWM.

## 1. Présentation

Le projet est une application web qui exploite l'[API de prévision météo suisse](https://www.prevision-meteo.ch/services/) pour obtenir des données météorologiques. Ces données sont ensuite visualisables en cliquant sur des marqueurs insérés dans une carte créée avec [Leaflet](https://leafletjs.com/)

### 1.1. Vitejs

L'application est construite avec [ViteJS](https://vitejs.dev/), un outil de build qui offre une expérience de développement rapide et performante.

``` npm create vite@latest ```

La ligne de commande ci-dessus permet de créer un nouveau projet ViteJS. Il faudra répondre à quelques questions pour configurer le projet.

### 1.2. Fonctions asynchrones et des promesses

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

La fonction `fetchData` utilise le mot-clé `async` pour indiquer qu'elle est asynchrone. Elle utilise ensuite le mot-clé `await` pour attendre que la promesse retournée par `fetch` soit résolue. Si une erreur se produit, la fonction `catch` est appelée pour la gérer.

### 1.3. Leaflet

La librairie Leaflet est utilisée pour créer une carte interactive qui affiche les markers. Voici un exemple de code qui crée une carte Leaflet et ajoute un marqueur à celle-ci :

```javascript
let mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(mymap);
L.marker([51.5, -0.09]).addTo(mymap).bindPopup('A pretty CSS3 popup.').openPopup();
```

La fonction `L.map` crée une nouvelle carte Leaflet et la fonction `L.tileLayer` ajoute une couche de tuiles OpenStreetMap à la carte. Enfin, la fonction `L.marker` ajoute un marqueur à la carte.

## 2. Installation

Pour installer le projet en local, suivez les étapes suivantes :

1. Clonez le dépôt GitHub sur votre machine locale.
2. Naviguez jusqu'au dossier du projet.
3. Exécutez `npm install` pour installer les dépendances du projet.

## 3. Utilisation

Pour lancer l'application en local, exécutez 

```
npm install
npm run dev
```

Le commandes ci-dessus permettent d'installer les dépendances et de lancer l'application en mode développement. L'application sera accessible à l'adresse `http://localhost:5173`.

## 4. Version en Production

La version d'exemple en production de l'application est déployée à l'adresse suivante : [https://dwwm.desplaces.net](https://dwwm.desplaces.net)

## 5. Licence

Ce projet est sous licence MIT. Pour plus d'informations.