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

    const cardFeautures = similarCards.querySelector('.popup__features');

    Object.keys(offer).forEach(() => {
      if (!offer.price) {
        similarPrice.classList.add('hidden');
      }
      if (!offer.rooms || !offer.guests) {
        similarGuests.classList.add('hidden');
      }
      if (!offer.checkin || !offer.checkout) {
        similarTime.classList.add('hidden');
      }
      if (!offer.type) {
        similarType.classList.add('hidden');
      }
      if (!offer.description) {
        similarDesc.classList.add('hidden');
      }
      if (!offer.features) {
        cardFeautures.classList.add('hidden');
      } else {
        const featureItem = offer.features.map(
          (feature) => `popup__feature--${feature}`,
        );

        featureItem.forEach(() => {
          cardFeautures.querySelectorAll('.popup__feature').forEach((item) => {
            const elementClass = item.classList[1];
            if (!featureItem.includes(elementClass)) {
              item.remove();
            }
          });
        });
      }
    });

    //const checkKey = (obj) => Object.keys(obj);

    //console.log(checkKey(offer));

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
