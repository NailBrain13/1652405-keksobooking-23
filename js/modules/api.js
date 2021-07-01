import { SUCCESS, ERROR, showAlert } from './messages.js';
import { adForm, formReset } from './form.js';
const fetchData = 'https://23.javascript.pages.academy/keksobooking/data';
const fetchPostData = 'https://23.javascript.pages.academy/keksobookin';

const getData = (onSuccess) => {
  fetch(fetchData)
    .then((response) =>
      response.ok
        ? response.json()
        : showAlert('Не удалось получить данные с сервера.'),
    )
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
          SUCCESS.hidden = false;
          formReset();
        } else {
          ERROR.hidden = false;
        }
      })
      .catch(() => {
        ERROR.hidden = false;
      });
  });
};
export { setAdFormSubmit, getData };
