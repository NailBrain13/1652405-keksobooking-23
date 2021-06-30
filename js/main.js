import { createMarkers } from './modules/map.js';

import './modules/validation.js';

const OFFER_COUNT = 5;
fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offers) => {
    createMarkers(offers.slice(0, OFFER_COUNT));
  });
