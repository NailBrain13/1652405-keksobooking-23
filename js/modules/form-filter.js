import { debounce } from '../utils/debounce.js';
import { getData } from './api.js';
import { createMarkers, markerTestGroup } from './map.js';

const OFFERS_VALUE = 10;
const RENDER_DELAY = 500;

const FEATURES = {
  WIFI: 'wifi',
  DISHWASHER: 'dishwasher',
  PARKING: 'parking',
  WASHER: 'washer',
  ELEVATOR: 'elevator',
  CONDITIONER: 'conditioner',
};

const ANY = 'any';

const FILTER_VALUE = {
  type: ANY,
  price: ANY,
  rooms: ANY,
  guests: ANY,
};

const PRICE = {
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
  MIN: 10000,
  MAX: 50000,
};

const mapFilters = document.querySelector('.map__filters');
const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');
const wifiFilter = mapFilters.querySelector('#filter-wifi');
const dishwasherFilter = mapFilters.querySelector('#filter-dishwasher');
const parkingFilter = mapFilters.querySelector('#filter-parking');
const washerFilter = mapFilters.querySelector('#filter-washer');
const elevatorFilter = mapFilters.querySelector('#filter-elevator');
const conditionerFilter = mapFilters.querySelector('#filter-conditioner');

const filterMatch = (filterValue, dataField) =>
  filterValue === ANY || String(filterValue) === String(dataField);

const priceMatch = (filterValue, dataField) =>
  filterValue === ANY ||
  (filterValue === PRICE.LOW && dataField < PRICE.MIN) ||
  (filterValue === PRICE.MIDDLE &&
    dataField >= PRICE.MIN &&
    dataField < PRICE.MAX) ||
  (filterValue === PRICE.HIGH && dataField >= PRICE.MAX);

const selectedFeatures = (checkbox, dataField, fieldValue) =>
  checkbox.checked === false ||
  (dataField && dataField.find((value) => value === fieldValue));

let obtainedData = [];
getData((obj) => {
  obtainedData = obj;
  createMarkers(obj.slice(0, OFFERS_VALUE));
});

const applyFilter = () => {
  markerTestGroup.clearLayers();
  let filteredData = [...obtainedData];
  filteredData = filteredData.filter(
    (item) =>
      filterMatch(FILTER_VALUE.type, item.offer.type) &&
      priceMatch(FILTER_VALUE.price, item.offer.price) &&
      filterMatch(FILTER_VALUE.rooms, item.offer.rooms) &&
      filterMatch(FILTER_VALUE.guests, item.offer.guests) &&
      selectedFeatures(wifiFilter, item.offer.features, FEATURES.WIFI) &&
      selectedFeatures(
        dishwasherFilter,
        item.offer.features,
        FEATURES.DISHWASHER,
      ) &&
      selectedFeatures(parkingFilter, item.offer.features, FEATURES.PARKING) &&
      selectedFeatures(washerFilter, item.offer.features, FEATURES.WASHER) &&
      selectedFeatures(
        elevatorFilter,
        item.offer.features,
        FEATURES.ELEVATOR,
      ) &&
      selectedFeatures(
        conditionerFilter,
        item.offer.features,
        FEATURES.CONDITIONER,
      ),
  );
  createMarkers(filteredData.slice(0, OFFERS_VALUE));
};

const updateFilters = debounce(applyFilter, RENDER_DELAY);

typeFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.type = evt.target.value;
  updateFilters();
});

priceFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.price = evt.target.value;
  updateFilters();
});

roomsFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.rooms = evt.target.value;
  updateFilters();
});

guestsFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.guests = evt.target.value;
  updateFilters();
});

wifiFilter.addEventListener('click', () => {
  updateFilters();
});
dishwasherFilter.addEventListener('click', () => {
  updateFilters();
});
parkingFilter.addEventListener('click', () => {
  updateFilters();
});
washerFilter.addEventListener('click', () => {
  updateFilters();
});
elevatorFilter.addEventListener('click', () => {
  updateFilters();
});
conditionerFilter.addEventListener('click', () => {
  updateFilters();
});

export { applyFilter };
