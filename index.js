/*
   ДЗ 6.1. Написати функцію видалення масиву символів
   Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
   'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
   Вихідний рядок та символи для видалення задає користувач.
*/

const inputUserString = prompt("Введіть рядок:");
const inputCharsToDelete = prompt("Введіть символи, які потрібно видалити");

removeChars(inputUserString, inputCharsToDelete);


function removeChars(str, charsToRemove) {
  let result = "";
  if (str !== null && str.trim() !== "") {
    const trimmedInput = str.trim();

    if (charsToRemove !== null && charsToRemove.length > 0) {
      const charsArray = charsToRemove.split("");

      for (let i = 0; i < trimmedInput.length; i++) {
        if (!charsArray.includes(trimmedInput[i])) {
          result += trimmedInput[i];
        }
      }
    } else {
      result = trimmedInput;
    }
    alert("Результат: " + result);
  } else {
    alert("Введення скасовано або рядок порожній.");
  }
}