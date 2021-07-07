const comparisonTypes = (obj) => {
  switch (obj.type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};

const setSameValue = (currentValue, changeableValue) => {
  changeableValue.value = currentValue.value;
};

export { comparisonTypes, setSameValue };
