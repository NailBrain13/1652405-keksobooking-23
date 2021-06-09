import { arrayOffers } from './modules/test-data.js';
import './modules/form.js';
import './modules/map.js';

const currentOffers = 10;

const newTestArray = arrayOffers(currentOffers);

/* eslint-disable */
console.log('массив создан в main', newTestArray);
console.log('вывод самой функции', arrayOffers);
/* eslint-enable */
