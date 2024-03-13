import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { userLocation } from "../config/env.config.js";
import cityCoordonates from "../data/cityCoordonates.json";
import {useFetchWeather} from "../services/useFetchWeather.js";
import {displayWeatherCard} from "./weatherCard.js";

/**
 * Crée une carte Leaflet et l'ajoute à la div #map
 *
 * @param {String} id - L'id de la div où la carte doit être ajoutée
 *
 * @returns {void}
 *
 */
export default function createMap(id) {

	// console.log(cityCoordonates)

	const map = L.map(id).setView([userLocation.lat, userLocation.lng], 6);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);


	for (const city in cityCoordonates) {
		const tempMarker = L.marker([cityCoordonates[city].lat, cityCoordonates[city].lng]).addTo(map);
		tempMarker.addEventListener('click', async function() {
			const response = await useFetchWeather(city);
			const weatherCard = displayWeatherCard(response)
			this.bindPopup(weatherCard).openPopup()
		})

	}
}

