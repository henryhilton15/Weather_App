/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
import './night.jpeg';
import fetchWeatherAPI from './api';

async function loadUI() {
  createHTML();
  const data = await fetchWeatherAPI('Hanover, New Hampshire');
  updateWeatherDisplay(data);
}

function createHTML() {
  const main = document.createElement('div');
  main.className = 'main-container';
  document.body.appendChild(main);

  const header = document.createElement('header');
  main.appendChild(header);

  createForm(header);

  const weatherDisplay = document.createElement('div');
  weatherDisplay.className = 'main-weather-display';
  main.appendChild(weatherDisplay);

  const gif = document.createElement('img');
  gif.className = 'gif';
  main.appendChild(gif);

  createDisplay(weatherDisplay);
}

function createForm(header) {
  const form = document.createElement('form');
  form.addEventListener('submit', handleSubmit);
  header.appendChild(form);

  const formGroup = document.createElement('div');
  formGroup.className = 'form-group';
  form.appendChild(formGroup);

  const submitBtn = document.createElement('button');
  submitBtn.className = 'submit-btn';
  submitBtn.addEventListener('click', handleSubmit);
  formGroup.appendChild(submitBtn);

  const inputSearch = document.createElement('input');
  inputSearch.type = 'text';
  inputSearch.placeholder = 'Search a City';
  formGroup.appendChild(inputSearch);

  const errorMsg = document.createElement('span');
  errorMsg.classList = 'error-msg';
  errorMsg.textContent = "Can't find that city!";
  formGroup.appendChild(errorMsg);

  const searchIcon = document.createElement('p');
  searchIcon.className = 'search-icon';
  searchIcon.textContent = '🔍';
  submitBtn.appendChild(searchIcon);
}

function createDisplay(weatherDisplay) {
  const generalInfo = document.createElement('div');
  generalInfo.className = 'general-info';
  weatherDisplay.appendChild(generalInfo);

  createGeneralInfo(generalInfo);

  const detailInfo = document.createElement('div');
  detailInfo.className = 'weather-details';
  weatherDisplay.appendChild(detailInfo);

  createDetailInfo(detailInfo);
}

function createGeneralInfo(generalInfo) {
  const condition = document.createElement('p');
  condition.className = 'condition';
  generalInfo.appendChild(condition);

  const location = document.createElement('h1');
  location.className = 'location';
  generalInfo.appendChild(location);

  const degrees = document.createElement('span');
  degrees.className = 'degrees';
  generalInfo.appendChild(degrees);
}

function createDetailInfo(detailInfo) {
  const feelsLike = document.createElement('p');
  feelsLike.className = 'feels-like';
  detailInfo.appendChild(feelsLike);

  const wind = document.createElement('p');
  wind.className = 'wind-mph';
  detailInfo.appendChild(wind);

  const humidity = document.createElement('p');
  humidity.className = 'humidity';
  detailInfo.appendChild(humidity);
}

function updateWeatherDisplay(newData) {
  if (newData == null) return;
  const weatherInfo = document.getElementsByClassName('main-weather-display');
  Array.from(weatherInfo).forEach((div) => {
    if (div.classList.contains('fade-in2')) {
      div.classList.remove('fade-in2');
      div.offsetWidth;
      div.classList.add('fade-in2');
    } else {
      div.classList.add('fade-in2');
    }
  });

  document.querySelector('.condition').textContent = newData.condition;
  document.querySelector('.location').textContent = `${newData.location}, ${newData.region}`;
  document.querySelector('.degrees').textContent = newData.currentTemp.f;
  document.querySelector('.feels-like').textContent = `Feels Like: ${newData.feelsLike.f}`;
  document.querySelector('.wind-mph').textContent = `Wind: ${newData.wind} mph`;
  document.querySelector('.humidity').textContent = `Humidity: ${newData.humidity}`;
}

function handleSubmit(e) {
  e.preventDefault();
  fetchWeather();
}

async function fetchWeather() {
  const input = document.querySelector('input[type="text"]');
  const userLocation = input.value;
  const newData = await fetchWeatherAPI(userLocation);
  updateWeatherDisplay(newData);
}

function triggerError() {
  const error = document.querySelector('.error-msg');
  error.style.display = 'block';
  if (error.classList.contains('fade-in')) {
    error.style.display = 'none';
    error.classList.remove('fade-in2');
    error.offsetWidth;
    error.classList.add('fade-in');
    error.style.display = 'block';
  } else {
    error.classList.add('fade-in');
  }
}

function clearError() {
  const error = document.querySelector('.error-msg');
  error.style.display = 'none';
}

export {
  loadUI,
  triggerError,
  clearError,
};
