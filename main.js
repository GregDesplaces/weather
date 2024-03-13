import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.scss'
import createMap from './components/map.js'

createMap('map');


/**
 * Cette partie de code est commentée, car elle est remplacée par le code ci-dessus,
 * elle utilisait les boutons pour afficher les données météo
 */
//const buttons = document.querySelectorAll('.btn');
// for (const button of buttons) {
//   button.addEventListener('click', async function() {
//     // je récupère la valeur de l'argument data-city
//     const response = await useFetchWeather(this.dataset.city)
//     displayWeatherCard(response)
//   })
// }

