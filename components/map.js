import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { useLocation } from "../services/useLocation.js";
import cityCoordinates from "../data/cityCoordinates.json";
import { useFetchWeather } from "../services/useFetchWeather.js";
import { displayWeatherCard } from "./weatherCard.js";

/**
 * Cette fonction crée une carte Leaflet et l'ajoute à la div avec l'ID spécifié.
 *
 * Elle utilise d'abord le service useLocation pour obtenir la localisation actuelle de l'utilisateur.
 * Elle crée ensuite une nouvelle carte Leaflet, centrée sur la localisation de l'utilisateur, et l'ajoute à la div.
 * Elle ajoute également une couche de tuiles OpenStreetMap à la carte.
 *
 * Ensuite, pour chaque ville dans le fichier cityCoordinates.json, elle crée un marqueur à la position de la ville et l'ajoute à la carte.
 * Elle ajoute aussi un écouteur d'événements au marqueur, qui, lorsqu'il est cliqué, centre la carte sur le marqueur, récupère les données météorologiques pour la ville, crée une carte météorologique à partir des données, et affiche la carte météorologique dans une fenêtre contextuelle liée au marqueur.
 *
 * @function
 * @param {string} id - L'ID de la div où la carte doit être ajoutée.
 * @returns {Promise<void>} - Une promesse qui se résout une fois que la carte a été créée et ajoutée à la div.
 *
 */
export default async function createMap(id) {
	const location = await useLocation();

	const map = L.map(id).setView([location.lat, location.lng], 10);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);


	for (const city in cityCoordinates) {
		const tempMarker = L.marker([cityCoordinates[city].lat, cityCoordinates[city].lng]).addTo(map);
		tempMarker.addEventListener('click', async function() {
			// Je positionne la carte sur le marqueur et je dézoome
			map.setView([cityCoordinates[city].lat, cityCoordinates[city].lng], 10);
			const response = await useFetchWeather(city);
			const weatherCard = displayWeatherCard(response)
			this.bindPopup(weatherCard).openPopup();
		})

	}
}

