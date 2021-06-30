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

export { SUCCESS, ERROR, getMessage };
