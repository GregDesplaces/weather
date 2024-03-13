import { API_URL } from '../config/env.config.js';

/**
 * Récupère la météo d'une ville en utilisant l'objet XMLHttpRequest
 * 
 * @param {string} endUrl - La ville correspondant à la fin de l'url
 *
 * @returns {void}
 */
export function getWeatherByXHR(endUrl) {
  const weatherRequest = new XMLHttpRequest();

  weatherRequest.addEventListener('readystatechange', function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        // test(response);
        console.log("la valeur de la response", response);
      }else {
        console.error("Il y a eu un problème probablement aver l'url", this.status, this.statusText);
      }
    }
    return false;
  })

  weatherRequest.open('GET', API_URL + endUrl);
  weatherRequest.send();
}