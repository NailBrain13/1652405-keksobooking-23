// eslint-disable-next-line
'use strict';

const getNumber = (minValue, maxValue, dotValue = 0) => {
  if (maxValue >= minValue && minValue >= 0 && maxValue > 0) {
    const randomFloat = Math.random() * (maxValue - minValue) + minValue;
    return randomFloat.toFixed(dotValue);
  }
  return 'error message';
};

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIME = ['12:00', '13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayElement = (element) =>
  element[getNumber(0, element.length - 1)];

const getOffer = () => ({
  author: {
    avatar: `img/avatars/user/0${getNumber(1, 8)}.png`,
  },
  offer: {
    title: 'Это доступное обьявление по вашим запросам',
    address: `location.x=${getNumber(10, 20)} location.y=${getNumber(10, 20)}`,
    price: getNumber(100, 1000),
    type: getRandomArrayElement(TYPE),
    rooms: getNumber(1, 5),
    guests: getNumber(1, 8),
    checkin: `до ${getRandomArrayElement(TIME)}`,
    checkout: `после ${getRandomArrayElement(TIME)}`,
    features: getRandomArrayElement(FEATURES),
    description: 'Описание',
    photos: getRandomArrayElement(PHOTOS),
    location: {
      lat: getNumber(35.65, 35.7, 5),
      lng: getNumber(139.7, 139.8, 5),
    },
  },
});

const arrayOffers = new Array(4).fill(null).map(() => getOffer());

// eslint-disable-next-line
console.log(arrayOffers);
