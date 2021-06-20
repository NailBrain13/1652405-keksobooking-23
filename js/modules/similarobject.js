import { arrayOffers } from '../modules/test-data.js';
import { comparisonTypes } from './util.js';

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

const similarCards = newTestArray;

const generateCardsList = () => {
  similarCards.forEach(({ author, offer }) => {
    const similarCard = similarCardTemplate.cloneNode(true);
    const similarTitle = similarCard.querySelector('.popup__title');
    const similarAddr = similarCard.querySelector('.popup__text--address');
    const similarPrice = similarCard.querySelector('.popup__text--price');
    const similarGuests = similarCard.querySelector('.popup__text--capacity');
    const similarTime = similarCard.querySelector('.popup__text--time');
    const similarDesc = similarCard.querySelector('.popup__description');

    const similarAvatar = similarCard.querySelector('.popup__avatar');
    const similarPhoto = similarCard.querySelector('.popup__photo');
    const similarType = similarCard.querySelector('.popup__type');

    const cardFeautures = similarCard.querySelector('.popup__features');

    Object.keys(offer).forEach(() => {
      if (!offer.title) {
        offer.title = 'Заголовок не указан';
      }
      if (!offer.address) {
        offer.address = 'Аддрес не указан';
      }
      if (!offer.price) {
        similarPrice.classList.add('hidden');
      }
      if (!offer.type) {
        similarType.classList.add('hidden');
      }
      if (!offer.rooms || !offer.guests) {
        similarGuests.classList.add('hidden');
      }
      if (!offer.checkin || !offer.checkout) {
        similarTime.classList.add('hidden');
      }
      if (!offer.description) {
        similarDesc.classList.add('hidden');
      }
      if (!offer.photos) {
        offer.photos = '';
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

    similarTitle.textContent = offer.title;
    similarAddr.textContent = offer.address;
    similarPrice.textContent = `${offer.price} ₽/ночь`;
    similarGuests.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    similarTime.textContent = `Заезд ${offer.checkin}, выезд ${offer.checkout}`;
    similarDesc.textContent = offer.description;
    similarAvatar.src = author.avatar;
    similarPhoto.src = offer.photos;
    similarType.textContent = comparisonTypes(offer);

    mapCanvas.appendChild(similarCard);
  });
};

export { generateCardsList };
