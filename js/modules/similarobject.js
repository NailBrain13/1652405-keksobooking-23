import { arrayOffers } from '../modules/test-data.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarCardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');

mapCanvas.style.paddingTop = '20px';
mapCanvas.style.display = 'flex';
mapCanvas.style.justifyContent = 'space-around';
mapCanvas.style.height = 'auto';
mapCanvas.style.flexWrap = 'wrap';

const currentOffers = 10;

const newTestArray = arrayOffers(currentOffers);

const similarCard = newTestArray;

const newTypes = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const generateCardList = () => {
  similarCard.forEach((card) => {
    const similarCards = similarCardTemplate.cloneNode(true);
    similarCards.querySelector('.popup__title').textContent = card.offer.title;
    similarCards.querySelector('.popup__text--address').textContent =
      card.offer.address;
    similarCards.querySelector(
      '.popup__text--price',
    ).textContent = `${card.offer.price} ₽/ночь`;
    similarCards.querySelector(
      '.popup__text--capacity',
    ).textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
    similarCards.querySelector(
      '.popup__text--time',
    ).textContent = `Заезд ${card.offer.checkin}, выезд ${card.offer.checkout}`;
    similarCards.querySelector('.popup__description').textContent =
      card.offer.description;

    similarCards.querySelector('.popup__avatar').src = card.author.avatar;
    similarCards.querySelector('.popup__photo').src = card.offer.photos;
    similarCards.querySelector('.popup__type').textContent =
      newTypes[card.offer.type];

    const features = similarCards.querySelector('.popup__features');
    features.innerHTML = '<li class="popup__feature"></li>';
    const featureItem = features.querySelector('.popup__feature');
    featureItem.classList.add(`popup__feature--${card.offer.features}`);

    mapCanvas.appendChild(similarCards);
  });
};

export { generateCardList };
