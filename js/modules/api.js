import { SUCCESS, ERROR, getMessage } from './messages.js';
import { adForm, formReset } from './form.js';
const fetchData = 'https://23.javascript.pages.academy/keksobooking/data';
const fetchPostData = 'https://23.javascript.pages.academy/keksobooking';
const getData = (onSuccess) => {
  fetch(fetchData)
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    });
};

const setAdFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(adForm);

    fetch(fetchPostData, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          getMessage(SUCCESS);
          formReset();
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
