import { resetAvatar } from './avatar.js';
import { formPriceInput } from './validation.js';
const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const adFormElements = Array.from(adForm.children);
const mapFilterElements = Array.from(mapFilter.children);

const enableForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => (element.disabled = true));

  mapFilter.classList.add('map__filters--disabled');
  mapFilterElements.forEach((element) => (element.disabled = true));
};

const disableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => (element.disabled = false));

  mapFilter.classList.remove('map__filters--disabled');
  mapFilterElements.forEach((element) => (element.disabled = false));
};

const toggleForm = (value) => {
  if (value) {
    enableForm();
  } else {
    disableForm();
  }
};

const formReset = () => {
  formPriceInput.placeholder = 0;
  adForm.reset();
  mapFilter.reset();
  resetAvatar();
};

export { toggleForm, adForm, formReset };
