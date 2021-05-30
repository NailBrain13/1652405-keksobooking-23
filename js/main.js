// eslint-disable-next-line
'use strict';

const getNumber = (minValue, maxValue, dotValue = 0) => {
  if (maxValue >= minValue && minValue >= 0 && maxValue > 0) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    const randomFloat = Math.random() * (maxValue - minValue) + minValue;
    return randomFloat.toFixed(dotValue);
  }
  return 'error message';
};

getNumber(0, 20, 2);
