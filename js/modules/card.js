import { comparisonTypes } from './util.js';
const similarCardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');
const WIDTH = 70;
const HEIGHT = 40;
const getCard = ({ author, offer }) => {
  const similarCard = similarCardTemplate.cloneNode(true);
  const similarTitle = similarCard.querySelector('.popup__title');
  const similarAddr = similarCard.querySelector('.popup__text--address');
  const similarPrice = similarCard.querySelector('.popup__text--price');
  const similarGuests = similarCard.querySelector('.popup__text--capacity');
  const similarTime = similarCard.querySelector('.popup__text--time');
  const similarDesc = similarCard.querySelector('.popup__description');
  const similarAvatar = similarCard.querySelector('.popup__avatar');
  const similarType = similarCard.querySelector('.popup__type');
  const cardFeautures = similarCard.querySelector('.popup__features');
  const photoList = similarCard.querySelector('.popup__photos');
  photoList.innerHTML = '';

  const fillPhotoList = () => {
    if (offer.photos) {
      offer.photos.forEach((value) => {
        const photoItem = document.createElement('img');
        photoItem.classList.add('popup__photo');
        photoItem.src = value;
        photoItem.width = WIDTH;
        photoItem.height = HEIGHT;
        photoItem.alt = offer.title;
        photoList.appendChild(photoItem);
      });
    }
  };
  fillPhotoList();

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
  similarType.textContent = comparisonTypes(offer);

  return similarCard;
};

export { getCard };
