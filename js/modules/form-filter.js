import { debounce } from '../utils/debounce.js';
import { getData } from './api.js';
import { createMarkers, markerTestGroup } from './map.js';

const OFFERS_VALUE = 10;

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

const applyFilter = () => {
  debounce(() => {
    markerTestGroup.clearLayers();
    getData((obj) => {
      obj = obj.filter(
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
          selectedFeatures(
            parkingFilter,
            item.offer.features,
            FEATURES.PARKING,
          ) &&
          selectedFeatures(
            washerFilter,
            item.offer.features,
            FEATURES.WASHER,
          ) &&
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
      createMarkers(obj.slice(0, OFFERS_VALUE));
    });
  })();
};

typeFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.type = evt.target.value;
  applyFilter();
});

priceFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.price = evt.target.value;
  applyFilter();
});

roomsFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.rooms = evt.target.value;
  applyFilter();
});

guestsFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.guests = evt.target.value;
  applyFilter();
});

wifiFilter.addEventListener('click', () => {
  applyFilter();
});
dishwasherFilter.addEventListener('click', () => {
  applyFilter();
});
parkingFilter.addEventListener('click', () => {
  applyFilter();
});
washerFilter.addEventListener('click', () => {
  applyFilter();
});
elevatorFilter.addEventListener('click', () => {
  applyFilter();
});
conditionerFilter.addEventListener('click', () => {
  applyFilter();
});

export { applyFilter };
