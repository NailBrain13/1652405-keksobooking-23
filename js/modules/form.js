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

const ALERT_SHOW_TIME = 3000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'sticky';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.bottom = '50%';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'orangered';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const setAdFormSubmint = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(adForm);

    fetch('https://23.javascript.pages.academy/keksobooking', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          onSuccess('Форма отправлена.');
        } else {
          onSuccess('Не удалось отправить форму. Попробуйте ещё раз');
        }
      })
      .catch(() => {
        onSuccess('Не удалось отправить форму. Попробуйте ещё раз');
      });
  });
};

export { toggleForm, setAdFormSubmint, showAlert };
