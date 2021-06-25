import { toggleForm } from './form.js';
import { getNumber } from './util.js';
import { arrayOffers } from './test-data.js';

const latRandom = getNumber(35.65, 35.7, 5);
const lngRandom = getNumber(139.7, 139.8, 5);
const inputAddress = document.querySelector('#address');

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
  iconSize: [40, 40],
  iconAnchor: [20, 40],
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
    icon: alterPinIcon,
  },
);
alterPinMarker.addTo(map);

const searchArea = L.circle([35.6952, 139.757], {
  color: 'black',
  fillColor: '#7FFFD4',
  fillOpacity: 0.5,
  radius: 22000,
});
searchArea.addTo(map);

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.6952,
    lng: 139.757,
  });
  map.setView(
    {
      lat: 35.68954,
      lng: 139.69171,
    },
    10,
  );
  alterPinMarker.remove();
  searchArea.remove();
});

mainPinMarker.on('moveend', (evt) => {
  const userCoordinate = evt.target.getLatLng();
  const lat = userCoordinate.lat.toFixed(5);
  const lng = userCoordinate.lng.toFixed(5);
  inputAddress.value = `${lat},  ${lng}`;
});

const testMarkers = arrayOffers(6);
// console.log(testMarkers);

testMarkers.forEach((item) => {
  const marker = L.marker(
    {
      lat: item.offer.location.lat,
      lng: item.offer.location.lng,
    },
    { icon: alterPinIcon },
  );

  marker.addTo(map);
});
export {};
