const SUCCESS = document
  .querySelector('#success')
  .content.querySelector('.success');
const ERROR = document.querySelector('#error').content.querySelector('.error');

const notifeField = document.querySelector('.notice');
const ALERT_SHOW_TIME = 3000;

const getMessage = (value) => {
  const Massege = value.cloneNode(true);

  Massege.style.zIndex = 100;
  Massege.style.position = 'sticky';
  Massege.style.top = 0;
  Massege.style.bottom = 0;

  notifeField.append(Massege);

  setTimeout(() => {
    Massege.remove();
  }, ALERT_SHOW_TIME);
};

export { SUCCESS, ERROR, getMessage };
