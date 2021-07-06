import { setAdFormSubmit, getData } from './modules/api.js';
import './modules/validation.js';
import './modules/messages.js';
import { applyFilter } from './modules/form-filte.js';
import './modules/avatar.js';

setAdFormSubmit();

getData((offers) => {
  applyFilter(offers);
});
