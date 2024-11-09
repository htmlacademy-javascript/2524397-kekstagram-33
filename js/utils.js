const getRandomNumber = function (a, b) {
  const lowerValue = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upperValue = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const resultValue = Math.random() * (upperValue - lowerValue + 1) + lowerValue;
  return Math.floor(resultValue);
};

export { getRandomNumber };
