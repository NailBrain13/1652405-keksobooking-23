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

const translateTypes = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const generateCardList = () => {
  similarCard.forEach(({ author, offer }) => {
    const similarCards = similarCardTemplate.cloneNode(true);
    const similarTitle = similarCards.querySelector('.popup__title');
    const similarAddr = similarCards.querySelector('.popup__text--address');
    const similarPrice = similarCards.querySelector('.popup__text--price');
    const similarGuests = similarCards.querySelector('.popup__text--capacity');
    const similarTime = similarCards.querySelector('.popup__text--time');
    const similarDesc = similarCards.querySelector('.popup__description');

    const similarAvatar = similarCards.querySelector('.popup__avatar');
    const similarPhoto = similarCards.querySelector('.popup__photo');
    const similarType = similarCards.querySelector('.popup__type');

    const popupFeautures = similarCards.querySelector('.popup__features');
    const feature = offer.features.map(
      (feature) => `popup__feature--${feature}`,
    );

    feature.forEach(() => {
      popupFeautures.querySelectorAll('.popup__feature').forEach((item) => {
        const elementClass = item.classList[1];
        if (!feature.includes(elementClass)) {
          item.remove();
        }
      });
    });

    similarTitle.textContent = offer.title;
    similarAddr.textContent = offer.address;
    similarPrice.textContent = `${offer.price} ₽/ночь`;
    similarGuests.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    similarTime.textContent = `Заезд ${offer.checkin}, выезд ${offer.checkout}`;
    similarDesc.textContent = offer.description;
    similarAvatar.src = author.avatar;
    similarPhoto.src = offer.photos;
    similarType.textContent = translateTypes[offer.type];

    mapCanvas.appendChild(similarCards);
  });
};

export { generateCardList };
