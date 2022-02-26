/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import { triggerError, clearError } from './UI';

export default async function fetchWeatherAPI(userLocation) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${userLocation}`, { mode: 'cors' });
    const rawData = await response.json();
    const cleanData = parseJSON(rawData);
    clearError();
    loadGif(cleanData.condition);
    return cleanData;
  } catch {
    triggerError();
    return null;
  }
}

function parseJSON(rawData) {
  // grab all the data i want to display on the page
  const myData = {
    condition: rawData.current.condition.text,
    feelsLike: {
      f: Math.round(rawData.current.feelslike_f),
      c: Math.round(rawData.current.feelslike_c),
    },
    currentTemp: {
      f: Math.round(rawData.current.temp_f),
      c: Math.round(rawData.current.temp_c),
    },
    wind: Math.round(rawData.current.wind_mph),
    humidity: rawData.current.humidity,
    location: rawData.location.name.toUpperCase(),
  };

  // if in the US, add state
  // if not, add country
  if (rawData.location.country === 'United States of America') {
    myData.region = rawData.location.region.toUpperCase();
  } else {
    myData.region = rawData.location.country.toUpperCase();
  }

  return myData;
}

async function loadGif(text) {
  const img = document.querySelector('img');
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=IUtY7B7h0x01MII4L6Kh8lcVyZXfGNFE&s=${text}`, { mode: 'cors' });
  const JSON = await response.json();
  img.src = JSON.data.images.original.url;
}
