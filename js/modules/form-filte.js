import { debounce } from '../utils/debounce.js';
import { getData } from './api.js';
import { createMarkers, markerTestGroup } from './map.js';

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

const OFFERS_VALUE = 10;
const RERENDER_DELAY = 500;

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

const filterMatch = (filterValue, dataField) =>
  filterValue === ANY || String(filterValue) === String(dataField);

const priceMatch = (filterValue, dataField) =>
  filterValue === ANY ||
  (filterValue === PRICE.LOW && dataField < PRICE.MIN) ||
  (filterValue === PRICE.MIDDLE &&
    dataField >= PRICE.MIN &&
    dataField < PRICE.MAX) ||
  (filterValue === PRICE.HIGH && dataField >= PRICE.MAX);

const ifChecked = (checkbox, dataField, fieldValue) =>
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
          ifChecked(wifiFilter, item.offer.features, FEATURES.WIFI) &&
          ifChecked(
            dishwasherFilter,
            item.offer.features,
            FEATURES.DISHWASHER,
          ) &&
          ifChecked(parkingFilter, item.offer.features, FEATURES.PARKING) &&
          ifChecked(washerFilter, item.offer.features, FEATURES.WASHER) &&
          ifChecked(elevatorFilter, item.offer.features, FEATURES.ELEVATOR) &&
          ifChecked(
            conditionerFilter,
            item.offer.features,
            FEATURES.CONDITIONER,
          ),
      );
      createMarkers(obj.slice(0, OFFERS_VALUE));
    }, RERENDER_DELAY);
  })();
};

typeFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.type = evt.target.value;
  markerTestGroup.clearLayers();
  applyFilter();
});

priceFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.price = evt.target.value;
  markerTestGroup.clearLayers();
  applyFilter();
});

roomsFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.rooms = evt.target.value;
  markerTestGroup.clearLayers();
  applyFilter();
});

guestsFilter.addEventListener('change', (evt) => {
  FILTER_VALUE.guests = evt.target.value;
  markerTestGroup.clearLayers();
  applyFilter();
});

wifiFilter.addEventListener('click', () => {
  markerTestGroup.clearLayers();
  applyFilter();
});
dishwasherFilter.addEventListener('click', () => {
  markerTestGroup.clearLayers();
  applyFilter();
});
parkingFilter.addEventListener('click', () => {
  markerTestGroup.clearLayers();
  applyFilter();
});
washerFilter.addEventListener('click', () => {
  markerTestGroup.clearLayers();
  applyFilter();
});
elevatorFilter.addEventListener('click', () => {
  markerTestGroup.clearLayers();
  applyFilter();
});
conditionerFilter.addEventListener('click', () => {
  markerTestGroup.clearLayers();
  applyFilter();
});

export { applyFilter };
