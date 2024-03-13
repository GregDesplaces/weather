import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.scss'
import createMap from './components/createMap.js'



const buttons = document.querySelectorAll('.btn');
createMap('map')


// for (const button of buttons) {
//   button.addEventListener('click', async function() {
//     // je recupère la valeur de l'argument data-city
//     const response = await useFetchWeather(this.dataset.city)
//     displayWeatherCard(response)
//   })
// }

