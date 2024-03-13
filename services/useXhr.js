import { API_URL } from '../config/default.js';

/**
 * Cette fonction récupère les données météorologiques pour une ville donnée en utilisant l'objet XMLHttpRequest.
 * Elle crée un nouvel XMLHttpRequest, et ajoute un écouteur d'événement pour l'événement 'readystatechange'.
 * Lorsque le readyState de la requête est 4 (indiquant que la requête est terminée), elle vérifie le statut de la réponse.
 * Si le statut est 200 (indiquant une réponse réussie), elle analyse le texte de la réponse en tant que JSON et l'affiche dans la console.
 * Si le statut n'est pas 200, elle affiche un message d'erreur dans la console.
 * La fonction ouvre ensuite une requête GET vers l'URL de l'API, en ajoutant le nom de la ville à l'URL, et envoie la requête.
 *
 * @function
 * @param {string} endUrl - Le nom de la ville à ajouter à l'URL de l'API.
 * @returns {void}
 */
export function getWeatherByXHR(endUrl) {
  const weatherRequest = new XMLHttpRequest();

  weatherRequest.addEventListener('readystatechange', function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log("la valeur de la response", response);
      } else {
        console.error("Il y a eu un problème probablement aver l'url", this.status, this.statusText);
      }
    }
    return false;
  })

  weatherRequest.open('GET', API_URL + endUrl);
  weatherRequest.send();
}