const SUCCESS = document
  .querySelector('#success')
  .content.querySelector('.success');
const ERROR = document.querySelector('#error').content.querySelector('.error');

const notifeField = document.querySelector('.notice');
const ALERT_SHOW_TIME = 3000;

const getMessage = (value) => {
  const messagePopUp = value.cloneNode(true);

  messagePopUp.style.zIndex = 100;
  messagePopUp.style.position = 'sticky';
  messagePopUp.style.top = 0;
  messagePopUp.style.bottom = 0;

  notifeField.append(messagePopUp);

  setTimeout(() => {
    messagePopUp.remove();
  }, ALERT_SHOW_TIME);
};

export { SUCCESS, ERROR, getMessage };
