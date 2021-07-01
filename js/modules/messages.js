const ALERT_SHOW_TIME = 5000;
const SUCCESS = document
  .querySelector('#success')
  .content.querySelector('.success');
const ERROR = document.querySelector('#error').content.querySelector('.error');
const notifeField = document.querySelector('.notice');

const getMessage = (value) => {
  const messagePopUp = value.cloneNode(true);

  messagePopUp.style.zIndex = 100;
  messagePopUp.style.position = 'sticky';
  messagePopUp.style.top = 0;
  messagePopUp.style.bottom = 0;

  notifeField.append(messagePopUp);

  document.body.addEventListener('click', () => {
    messagePopUp.remove();
  });
  document.body.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      messagePopUp.remove();
    }
  });
};

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

export { SUCCESS, ERROR, getMessage, showAlert };
