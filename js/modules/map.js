import { toggleForm } from './form.js';
import { arrayOffers } from './test-data.js';
import { getCard } from './card.js';
const TEST_MARKERS = 10;
const TOKYO_CENTER = {
  lat: 35.68941,
  lng: 139.69232,
};
const inputAddress = document.querySelector('#address');
toggleForm(true);
const map = L.map('map-canvas')
  .on('load', () => {
    toggleForm(false);
  })
  .setView(TOKYO_CENTER, 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const alterPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(TOKYO_CENTER, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

const searchArea = L.circle(TOKYO_CENTER, {
  color: 'black',
  fillColor: '#7FFFD4',
  fillOpacity: 0.5,
  radius: 12000,
});
searchArea.addTo(map);

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng(TOKYO_CENTER);

  map.setView(TOKYO_CENTER, 11);
  searchArea.remove();
});

mainPinMarker.on('moveend', (evt) => {
  const userCoordinate = evt.target.getLatLng();
  const lat = userCoordinate.lat.toFixed(5);
  const lng = userCoordinate.lng.toFixed(5);
  inputAddress.value = `${lat},  ${lng}`;
});

const testMarkers = arrayOffers(TEST_MARKERS);
const markerTestGroup = L.layerGroup().addTo(map);

const createMarkers = (arr) => {
  arr.forEach((object) => {
    const marker = L.marker(
      {
        lat: object.offer.location.lat,
        lng: object.offer.location.lng,
      },
      { icon: alterPinIcon },
    );

    marker.addTo(markerTestGroup).bindPopup(getCard(object), {
      keepInView: true,
    });
  });
};

export { createMarkers, testMarkers };
