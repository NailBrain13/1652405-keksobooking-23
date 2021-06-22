const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_ROOM_NUMBER = 100;

const formTitleInput = document.querySelector('#title');
formTitleInput.addEventListener('input', () => {
  const valueLength = formTitleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    formTitleInput.setCustomValidity(
      `Ещё минимум ${MIN_TITLE_LENGTH - valueLength} симв.`,
    );
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formTitleInput.setCustomValidity(
      `Длина заголовка превышает на ${valueLength - MAX_TITLE_LENGTH} симв.`,
    );
  } else {
    formTitleInput.setCustomValidity('');
  }

  formTitleInput.reportValidity();
});

const formPriceInput = document.querySelector('#price');
formPriceInput.addEventListener('input', () => {
  const valuePrice = formPriceInput.value;
  if (valuePrice < MIN_PRICE) {
    formPriceInput.setCustomValidity(`Минимальная цена ${MIN_PRICE} ₽/ночь`);
  } else if (valuePrice > MAX_PRICE) {
    formPriceInput.setCustomValidity(
      `Превышена максимальная цена ${MAX_PRICE} на ${
        valuePrice - MAX_PRICE
      } ₽/ночь`,
    );
  } else {
    formPriceInput.setCustomValidity('');
  }

  formPriceInput.reportValidity();
});

const formRoomsInput = document.querySelector('#room_number');
const formGuestsInput = document.querySelector('#capacity');
const checkCapacity = (input) => {
  if (
    Number(formRoomsInput.value) === MAX_ROOM_NUMBER &&
    Number(formGuestsInput.value) !== 0
  ) {
    input.setCustomValidity(`${MAX_ROOM_NUMBER} комнат не доступно для гостей`);
  } else if (
    Number(formRoomsInput.value) !== MAX_ROOM_NUMBER &&
    Number(formGuestsInput.value) === 0
  ) {
    input.setCustomValidity(
      `не для гостей доступно только ${MAX_ROOM_NUMBER} комнат`,
    );
  } else if (
    Number(formRoomsInput.value) !== MAX_ROOM_NUMBER &&
    Number(formGuestsInput.value) !== 0 &&
    Number(formRoomsInput.value) < Number(formGuestsInput.value)
  ) {
    input.setCustomValidity(
      'Количество гостей не должно превышать количество комнат',
    );
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};

formRoomsInput.addEventListener('change', () => {
  checkCapacity(formRoomsInput);
});
formGuestsInput.addEventListener('change', () => {
  checkCapacity(formGuestsInput);
});
