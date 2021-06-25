import { toggleForm } from './form.js';
import { getNumber } from './util.js';
import { generateCardsList } from './similarobject.js';
const latRandom = getNumber(35.65, 35.7, 5);
const lngRandom = getNumber(139.7, 139.8, 5);

generateCardsList(1);

const map = L.map('map-canvas')
  .on('load', () => {
    toggleForm(false);
  })
  .setView(
    {
      lat: 35.6952,
      lng: 139.757,
    },
    10,
  );
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const alterPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6952,
    lng: 139.757,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

const alterPinMarker = L.marker(
  {
    lat: latRandom,
    lng: lngRandom,
  },
  {
    draggable: true,
    icon: alterPinIcon,
  },
);
alterPinMarker.addTo(map);

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.6952,
    lng: 139.757,
  });
  alterPinMarker.remove();
  map.setView(
    {
      lat: 35.68954,
      lng: 139.69171,
    },
    10,
  );
});

// mainPinMarker.on('moveend', (evt) => {
//   console.log(evt.target.getLatLng());
// });

export {};
