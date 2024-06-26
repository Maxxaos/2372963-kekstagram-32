const checkStringLength = (string, maxLength) => string.length <= maxLength;

// Строка короче 20 символов
console.log(checkStringLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(checkStringLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(checkStringLength('проверяемая строка', 10)); // false

function isPalindrom(string) {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';

  for (let letter = normalizedString.length - 1; letter >= 0; letter--) {
    reversedString += normalizedString[letter];
  }

  return normalizedString === reversedString;
}

// Строка является палиндромом
console.log(isPalindrom('топот')); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrom('ДовОд'); // true
// Это не палиндром
isPalindrom('Кекс'); // false
// Это палиндром
isPalindrom('Лёша на полке клопа нашёл '); // true

function getNumber(string) {
  const normalizedString = string.toString();
  let result = '';

  for (const element of normalizedString) {
    if (!Number.isNaN(parseInt(element, 10))) {
      result += element;
    }
  }

  return result ? parseInt(result, 10) : NaN;

}

console.log(getNumber('2023 год')); // 2023
console.log(getNumber('ECMAScript 2022')); // 2022
console.log(getNumber('1 кефир, 0.5 батона')); // 105
console.log(getNumber('агент 007')); // 7
console.log(getNumber('а я томат')); // NaN
console.log(getNumber(2023)); // 2023
console.log(getNumber(-1)); // 1
console.log(getNumber(1.5)); // 15
