/*
   ДЗ 6.1. Написати функцію видалення масиву символів
   Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
   'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
   Вихідний рядок та символи для видалення задає користувач.
*/

const inputUserString = prompt("Введіть рядок:");
const inputCharsToDelete = prompt("Введіть символи, які потрібно видалити");
let result = "";

if (inputUserString !== null && inputUserString.trim() !== "") {
  const trimmedInput = inputUserString.trim();

  if (inputCharsToDelete !== null && inputCharsToDelete.length > 0) {
    const charsArray = inputCharsToDelete.split("");

    result = removeChars(trimmedInput, charsArray);
  } else {
    result = trimmedInput;
  }
  alert("Результат: " + result);
} else {
  alert("Введення скасовано або рядок порожній.");
}

function removeChars(str, charsToRemove) {
  let filteredString = "";

  for (let i = 0; i < str.length; i++) {
    if (!charsToRemove.includes(str[i])) {
      filteredString += str[i];
    }
  }
  return filteredString;
}
