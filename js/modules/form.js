const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const adFormElements = Array.from(adForm.children);
const mapFilterElements = Array.from(mapFilter.children);
// const adFormBtn = adForm.querySelector('.ad-form__submit');

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
const setAdFormSubmint = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(adForm);

    fetch('https://23.javascript.pages.academy/keksobooking', {
      method: 'POST',
      body: formData,
    }).then(() => onSuccess());
  });
};

const successSubmint = () => {
  console.log('Form go away');
};

export { toggleForm, setAdFormSubmint, successSubmint };
