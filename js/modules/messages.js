import { adForm } from './form.js';
const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.color = '#E20404';
  alertContainer.style.padding = '30px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#353333';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const SUCCESS = document
  .querySelector('#success')
  .content.querySelector('.success')
  .cloneNode(true);
const ERROR = document
  .querySelector('#error')
  .content.querySelector('.error')
  .cloneNode(true);

adForm.insertAdjacentElement('beforeend', SUCCESS);
adForm.insertAdjacentElement('beforeend', ERROR);

SUCCESS.hidden = true;
ERROR.hidden = true;

SUCCESS.addEventListener('click', () => {
  SUCCESS.hidden = true;
});

ERROR.addEventListener('click', () => {
  ERROR.hidden = true;
});

export { SUCCESS, ERROR, showAlert };
