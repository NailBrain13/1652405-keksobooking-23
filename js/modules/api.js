import { SUCCESS, ERROR, getMessage } from './messages.js';
import { adForm, formReset } from './form.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    });
};

const setAdFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(adForm);

    fetch('https://23.javascript.pages.academy/keksobooking', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          getMessage(SUCCESS);
        } else {
          getMessage(ERROR);
        }
      })
      .catch(() => {
        getMessage(ERROR);
      });
  });
};
export { setAdFormSubmit, getData };
