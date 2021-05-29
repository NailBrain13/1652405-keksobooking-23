//Задание №1
function getNumber(minValue, maxValue) {
  if (minValue >= 0) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
  return 'error message';
}

getNumber(10, 20);

//Задание №2
function getNumberFloat(minValue, maxValue, dotValue) {
  if (minValue >= 0) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    const randomFloat = Math.random() * (maxValue - minValue) + minValue;
    return randomFloat.toFixed(dotValue);
  }
  return 'error message coordinate';
}

getNumberFloat(10, 20, 2);

//источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Пример со стрелочными функциями
const getNumberArw = (minValue, maxValue) => {
  if (minValue >= 0) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
  return 'error message';
};

getNumberArw(0, 20);
