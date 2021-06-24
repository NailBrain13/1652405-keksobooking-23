const getNumber = (minValue, maxValue, dotValue = 0) => {
  if (maxValue >= minValue && minValue >= 0 && maxValue > 0) {
    const randomFloat = Math.random() * (maxValue - minValue) + minValue;
    return randomFloat.toFixed(dotValue);
  }
  return 'error message';
};

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

export { getNumber, comparisonTypes, setSameValue };
