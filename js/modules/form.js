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

  mapFilter.classList.remove('ad-form--disabled');
  mapFilterElements.forEach((element) => (element.disabled = false));
};

const toggleForm = (value) => {
  if (value) {
    enableForm();
  } else {
    disableForm();
  }
};

export { toggleForm };
