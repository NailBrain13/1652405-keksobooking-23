import { getNumber } from './util.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIMES = ['12:00', '13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Описание №1',
  'Описание №2',
  'Описание №3',
  'Описание №4',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

let avatarImgCount = 1;

const getRandomArrayElement = (elements) =>
  elements[getNumber(0, elements.length - 1)];

const getRandomLength = (array) => array.slice(0, getNumber(1, array.length));

const getOffer = () => ({
  author: {
    avatar:
      avatarImgCount <= 8
        ? `img/avatars/user0${avatarImgCount++}.png`
        : 'img/avatars/default.png',
  },
  offer: {
    title: 'Это доступное обьявление по вашим запросам',
    address: `location.x=${getNumber(10, 20)} location.y=${getNumber(10, 20)}`,
    price: getNumber(100, 1000),
    type: getRandomArrayElement(TYPES),
    rooms: getNumber(1, 5),
    guests: getNumber(1, 8),
    checkin: `до ${getRandomArrayElement(TIMES)}`,
    checkout: `после ${getRandomArrayElement(TIMES)}`,
    features: getRandomLength(FEATURES),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getRandomArrayElement(PHOTOS),
    location: {
      lat: getNumber(35.65, 35.7, 5),
      lng: getNumber(139.7, 139.8, 5),
    },
  },
});

const arrayOffers = (offersCount) =>
  Array(offersCount)
    .fill(null)
    .map(() => getOffer());

export { arrayOffers };
