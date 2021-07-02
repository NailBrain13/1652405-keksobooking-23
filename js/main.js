import { createMarkers } from './modules/map.js';
import { setAdFormSubmit, getData } from './modules/api.js';
import './modules/validation.js';
import './modules/messages.js';

const OFFER_COUNT = 5;
getData((offers) => {
  createMarkers(offers.slice(0, OFFER_COUNT));
});

setAdFormSubmit();
