// eslint-disable-next-line
'use strict';

const getNumber = (minValue, maxValue, dotValue = 0) => {
  if (maxValue >= minValue && minValue >= 0 && maxValue > 0) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    const randomFloat = Math.random() * (maxValue - minValue) + minValue;
    return randomFloat.toFixed(dotValue);
  }
  return 'error message';
};

/* Структура каждого объекта должна быть следующей:

author, объект — описывает автора. Содержит одно поле:

avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются.
offer, объект — содержит информацию об объявлении. Состоит из полей:

title, строка — заголовок предложения. Придумайте самостоятельно.

address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.

price, число — стоимость. Случайное целое положительное число.

type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

rooms, число — количество комнат. Случайное целое положительное число.

guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

description, строка — описание помещения. Придумайте самостоятельно.

photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

location, объект — местоположение в виде географических координат. Состоит из двух полей:

lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.

*/

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

const LOCATION = {
  lat: getNumber(35.65, 35.7, 5),
  lng: getNumber(139.7, 139.8, 5),
};

const getRandomArrayElement = (element) =>
  element[getNumber(0, element.length - 1)];

const getOffer = () => ({
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
  location: LOCATION,
});

const arrayOffers = new Array(4).fill(null).map(() => getOffer());

// eslint-disable-next-line
console.log(arrayOffers);
