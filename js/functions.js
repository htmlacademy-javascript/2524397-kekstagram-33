function lengthString(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

function resultComparison(string, maxLength) {
  return string.length <= maxLength;
}

lengthString('проверяемая строка', 20);
lengthString('проверяемая строка', 18);
lengthString('проверяемая строка', 10);

resultComparison('проверяемая строка', 20);
resultComparison('проверяемая строка', 18);
resultComparison('проверяемая строка', 10);

function isPalindrom(string) {
  string = string.toLowerCase();
  string = string.replaceAll(' ','');
  const reverseString = string.split('').reverse().join('');
  if (reverseString === string) {
    return true;
  }
  return false;
}

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');


// Не получилось
function getNumber (string) {
  for (let i = 0; i < string.length; i++) {
    let resultParse = parseInt(string[i], 10);
    resultParse = (Math.round(resultParse));
  }
}

getNumber('2023 год');
//getNumber('ECMAScript 2022');
//getNumber('1 кефир, 0.5 батона');
//getNumber('агент 007');
//getNumber('а я томат');
