//  let a = 34;
// a = a + 2;
// console.log(a)
// let b = 20;
// b = b - 5;
// console.log(b)
// let c = '';
// c = c + 'New string';
// console.log(c)

//====================  1  Задача про обчислення премії, оподаткування та балансу на рахунку ============
// let bonus;
// let tax;
// let balance;
// let result;

// let salary = prompt('Add your salary!');
// salary = Number(salary);
// console.log(salary);

//      bonus = salary + (salary * 0.15);
//     let bonusSalary = prompt(`Премія 15%. ` + `На руки  ${bonus} грн.`);
// console.log(bonus);

// tax = Number(salary - (salary * 0.1));
// let taxSalary = prompt(`Податок -10%. ` + `На руки  ${tax} грн.`)
// console.log(tax);
   
// balance = Number(tax - 190);
//   let afterShop = prompt(`Витратив у магазині - 190грн  ` + `На руки ${balance} грн.`)
//    console.log(balance);
//   // const taxSalary = prompt(`Податок -10%. ` + `На руки  ${tax} грн.`)
// result = Number(balance / 2);
// let ownAmount = prompt(`Половину віддав жінці  ` + `Залишок ${result} грн.`)
// console.log(result);



// =============================ЗАДАЧА 2==================================
// Необходимо попросить  пользователя задумать число.
// Затем он должен  умножить это число  на 2 и прибавить к полученному результату 7.
// То, что вышло в итоге, нужно ввести в диалоговом окне prompt().
//  Вы должны выдать пользователю, какое число он задумал.

// let number = prompt('Загадайте число');

//  number = prompt('Помножте загадане число на 2');

// number = prompt('Додайте до отриманого числа цифру 7');

// number = prompt('Введіть отримане число');
// number = Number(number)


//    resultNumber = Number((number - 7) / 2);
// let result = prompt(`Задумане число ` + `${resultNumber}`);
// console.log(resultNumber);

 

// =============================ЗАДАЧА 3===================================


// Решите простую математическую задачу: 3 человека пошли за покупками.
//  Каждый следующий потратил в 5 раз больше предыдущего.Сколько потратил каждый, если все вместе заплатили 24 грн 80 коп ? 186 грн ? 319 грн 30 коп ?

//     Запишите решение в виде функции.Вызовите эту функцию с разными параметрами.
// Выводите информацию в консоль или с помощью document.write().

// Попробуйте возвращать из функции объект с 3-мя значениями.
  

//   let firstPersoneName = prompt('Введіть ваше імя');
    
// if (firstPersoneName === 'Iгор Петров') {
//     console.log(`1. ` + firstPersoneName );
// } else { console.error('Немає такого учасника') };



// let secondPersoneName = prompt('Введіть ваше імя');
  
// if (secondPersoneName === 'Вікторія Селіванова') {
//     console.log(`2. ` + secondPersoneName);
// }
// else { console.error('Немає такого учасника') };


// let thirdPersoneName = prompt('Введіть ваше імя');
 
// if (thirdPersoneName === 'Вікторія Селіванова') {
//     console.log(`3. ` + thirdPersoneName );
// } else { console.error('Немає такого учасника') };



//  function calculateOwnsum(totalSum) {

//       let  firstSum = (totalSum / 31).toFixed(1);
    
//     const secondSum = 5 * firstSum;
//  const  thirdSum = (firstSum * 5) * 5
   

//      return document.write(
//       `1.` + `Iгор Петров  ` + `${ firstSum } грн; `  +
//        `2.` + `Вікторія Селіванова витратила ` + `${secondSum} грн; ` +
//        `3.` + `Дмитро Котел витратив ` + `${ thirdSum } грн; `)
   
//  }

//  console.log(calculateOwnsum(24.80))
//  console.log(calculateOwnsum(80.0))
//  console.log(calculateOwnsum(319.30))


// =============================ЗАДАЧА 4===================================

// Створіть функцію multiplyNumeric(obj),
//    яка примножує всі числові властивості об’єкта obj на 2.



// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };

   
//   function multiplyNumeric(obj) {
//      for (let key in obj) {
    
//       if (typeof obj[key] == 'number') {
         
//       obj[key] *= 2;
//       }
//      }

//   }
// multiplyNumeric(menu)

// console.log(menu)


// =============================ЗАДАЧА 5 ДЗ 1===================================

// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при реєстрації. Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.



// const countries = [
//   "Ukraine",
//   "Poland",
//   "Croatia",
//   "Montenegro",
//   "France",
//   "USA",
// ];


// const countriesPrice = [100, 200, 300, 400, 500, 600];



// // ---------------Реєстрація користувача---------




// let addUserLogin = prompt('Для успішної реєстрації виберіть логін');
// console.log(addUserLogin);

// let addUserPass = prompt('Виберіть пароль');
// console.log(addUserPass);

// let result = alert('РЕЄСТРАЦІЮ ЗАВЕРШЕНО! ВВЕДІТЬ ЛОГІН ТА ПАРОЛЬ, ЩОБ ЗДІЙСНИТИ ВХІД!!');


// --------------------ВХІД НА САЙТ ------------


// function enterLogin() {
   
//     let userlogin = prompt('Введіть ваш логін');

//     if (!(userlogin === addUserLogin)) {
//         //  && userPass === addUserPass
//         alert('НЕВІРНИЙ ЛОГІН АБО ПАРОЛЬ!!!!!!! Повторіть спробу!');
//         userlogin = prompt('Введіть ваш логін');
//     }
//     let userPass = prompt('Введіть ваш пароль');
//     userPass === addUserPass;
//     alert('Вітаємо на нашому сайті!');
    
// }



// function enterPass() {
    
//      let userlogin = prompt('Введіть ваш логін');
     
//     if (!(userlogin === addUserLogin)) {
//         //  && userPass === addUserPass
//         alert('НЕВІРНИЙ ЛОГІН АБО ПАРОЛЬ!!!!!!! Повторіть спробу!');
//        userlogin = prompt('Введіть ваш логін');
//     }
//      let userPass = prompt('Введіть ваш пароль');
//     if (!(userPass === addUserPass)) {
// //         //  && userPass === addUserPass
//         alert('НЕВІРНИЙ ЛОГІН АБО ПАРОЛЬ!!!!!!! Повторіть спробу!');
//         userPass = prompt('Введіть ваш пароль');
//     }
//       alert('Вітаємо на нашому сайті!');
// }



// enterPass()
// //  enterLogin()
        

// //-----------УВІД МАКСИМАЛЬНОЇ СУМИ------------------------

// // const  enterMaxPrice = prompt('Введіть максимальну суму!');
// // let minPrice = countriesPrice[0];
// // let maxPrice = countriesPrice[countriesPrice.length - 1];

// // if (enterMaxPrice <= 600) {
// //     const avaliableCountry = alert('Країни, які Ви можете обрати: ' + countries);
// // }

// let enterMaxPrice = Number(prompt('Введіть максимальну суму!'));
 
// let minPrice = countriesPrice[0];
// let maxPrice = countriesPrice[countriesPrice.length - 1];


// function chooseCountry() {
//     if (enterMaxPrice < minPrice) {
//         alert(`Вибачте, на вашому рахунку недостатньо коштів! ` + ` Уведіть іншу суму.` );
//         return;
//     }
//     else {
//         const avaliableCountry = alert('Країни, які Ви можете обрати: ' + countries.join(", "));
    
//     }
// }
// chooseCountry()

//  const addCountry = prompt('Оберіть країну');
// const indexCountry = countries.indexOf(addCountry);
// const indexPrice = countriesPrice.indexOf(enterMaxPrice);

// indexCountry === indexPrice;

// if (countries.includes(addCountry) && enterMaxPrice >= countriesPrice[indexCountry])
// {
//     alert(`Вітаємо! Ви успішно придбали поїздку до ` + addCountry + `. ` + `  Доступний залишок ` + `${enterMaxPrice - countriesPrice[indexCountry]}` + `$`);
// } else {
//     alert('На вашому рахунку недостатньо коштів!');
//     console.error('Недостатньо коштів! Повторіть спробу');
// }






//  function addLogin( ) {
//     let userPass;
//     let userlogin;
//      let result = ''
//     userlogin = prompt('Введіть ваш логін');
// userPass = prompt('Введіть ваш пароль');
     
//      if (userlogin === addUserLogin &&  userPass === addUserPass)
     
//      {
//             //   prompt('Введіть ваш пароль');
//               alert('Вітаємо на нашому сайті!');
//           return;
//      }
//      alert('НЕВІРНИЙ ЛОГІН АБО ПАРОЛЬ!!!!!!! Повторіть спробу!');
    
//          userlogin = prompt('Введіть ваш логін');
//          userPass = prompt('Введіть ваш пароль');
//     return;
    
//  }

// addLogin()


// // Реалізуйте функцію, яка розгладить масив:
// const arr = [1, 2, [3, 4], [5, 6], 7];
//  console.log(foo(arr)); // [1, 2, 3, 4, 5, 6, 7]

// function foo(arr1) {
//     let result = [];
//     for (const element of arr1) {
//         // if (Array.isArray(element)) {
//         //     result.push(...element)
//         // }
//         // else {  result.push(element)

//         // }
//          Array.isArray(element) ? result.push(...element) : result.push(element);
      
//     }
//     return result;
//  }



//=================ЗАДАЧА 6 ===============================
// Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.
// /**
//   * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
//   * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}
// */
// const reverse = (array) => {
//  throw new Error('Напишите здесь свое решение');
// }

// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]




// const data = [1, 2, 3];
// function reverseArray(array) {
//     let result = [];
//     for (let i = array.length - 1; i >= 0; i -= 1){
//         result.push(array[i]);
//     }
//     return result;
// }


//  console.log(reverseArray(data));



//================================ЗАДАЧА 7==================================
// Compact. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
// /**
//   * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
//   * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}
// */
// const data = [0, 1, false, 2, undefined, '', 3, null];
// const compact = (array) => array.filter(element => Boolean(element) !== false)
//      console.log(compact(data))



//================================ЗАДАЧА 8==================================

//  * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов.
// Первое значение - ключ, второе - зачение.

//   const arr = [['a', 1], ['b', 2]]
//   const fromPairs = (array) => array.reduce((acc, value) => {
//   if (Array.isArray(value)) {
//     acc[value[0]] = value[1];
//   }
//   return acc;
//   }, {});
// console.log(fromPairs(arr)) //{ 'a': 1, 'b': 2 }


//================================ЗАДАЧА 9==================================
// // Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

//  arr1 = [1, 2, 3, 4, 5];
//  arr2 = [4, 5, 6];

// let arr3 = []
// arr1.map((element, index) => {
//   if (arr2[index] === undefined) {
//     arr3.push(element)
//   } else {
//     arr3.push(element + arr2[index])
//   }
// });
 
// console.log(arr3)




// другий спосіб
// let result = arr.map((item, index) => {
// if(isNaN(arr2[index])) return item;
// return item + arr2[index];
// });
//================================ЗАДАЧА 10==================================

// * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]


// Є ТРИ СПОСОБИ ВИРІШЕННЯ ЗАДАЧІ
// 1_Й З ДОПОМОГОЮ МЕТОДУ filter



// function removeElements(array, ...elementsToRemove) {
//   return array.filter(item => !elementsToRemove.includes(item));
// }

// const array = [1, 2, 3, 1, 2];
// const result = removeElements(array, 1, 2);

// console.log(result); // [3]



// 2_Й СПОСІБ МЕТОДОМ reduce

// function removeElements(array, ...elementsToRemove) {
//   return array.reduce((acc, item) => {
//     if (!elementsToRemove.includes(item)) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// }
// console.log(result); // [3]

// 3_Й СПОСІБ ЧЕРЕЗ FOR

// const uniqueElements = (array) => {
//   const uniqueArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (!uniqueArray.includes(array[i])) {
//       uniqueArray.push(array[i]);
//     }
//   }

//   return uniqueArray;
// };


// const result = uniqueElements(array);

// console.log(result); // [1, 2, 3]




//================================ЗАДАЧА 11==================================

//  * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

//  const array = [1, 2, 3, 1, 2];
//  const unique = (array) =>
//   array.filter((element, index) =>
//   array.indexOf(element) === index)
     
//   console.log(unique(array))

// ІНШИЙ СПОСІБ ЧЕРЕЗ NEW SET

// const unique = (array) => Array.from(new Set(array));
//  console.log(unique(array))
//================================ЦіКАВА ЗАДАЧА ЗАДАЧА 12 ==================================

//Одним з простих способів порівняти два масиви є перевірка довжин, якщо вони рівні, і порівняння кожного елементу на відповідних індексах у масивах. Ось один можливий варіант реалізації:


// const isEqual = (firstArray, secondArray) => {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }

//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// const isEqual = (firstArray, secondArray) => {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }

//   const compared = firstArray.map((el, index) => secondArray[index] === el);
  
//   return !compared.includes(false);
// };


// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];

// console.log(isEqual(arr1, arr2)); // true
// console.log(isEqual(arr1, arr3)); // false
// console.log(isEqual(arr1, arr4)); // false
//================================ЦіКАВА ЗАДАЧА ЗАДАЧА 13 ==================================

// // * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
// //   * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
// //   * Сложность задачи: 3 of 5
// //   * @param {Array} array - Глубокий массив
// //   * @returns {Array}

// //  const flatten = (array) => {
// //   let flattenArray = []
// //   array.forEach(element => {
// //     if (Array.isArray(element)) {
// //     flattenArray.push(...flatten(element))
// //     } else { flattenArray.push(element)}
// //   })
// //   return flattenArray
// // }
// // // const data = [1, 2, [3, 4, [5]]];
// // const data = [1, [2], [3, [[4]]],[5,6]];
// //  console.log(flatten(data)); // [1, 2, 3, 4, 5]


// // function countIdentic(arr) {
// //   let totalArray = [];
// //   arr.forEach(function (element, index) {
 
// //     if ( element === arr[index + 1]) {
// //       totalArray.push(element)

// //     }
// //   });
// //     return totalArray.length
  
 
// //================================ЦіКАВА ЗАДАЧА ЗАДАЧА 14 ==================================
// function countIdentic(arr) {
//   arr = arr.sort()
 
//   let newSortArr = [];
//   arr.forEach((item, index) => {
//     if (arr.indexOf(item) !== index) {
//        newSortArr.push(item)
//     }
//   })
// let result = newSortArr.filter((item, index) => {
//     if (newSortArr.indexOf(item) === index) {  return newSortArr.push(item)}
  
  
//  })
//    console.log(result)
//  return result.length

// }


//   //==================Інший спосіб

// // for (let i = 0; i < arr.length; i++) {
// // if (arr[i] === arr[i + 1]) {
// //   newSortArr.push(arr[i])
// //   console.log(newSortArr)
// // }
// // }
//   // let result = arr.filter((item, index) => {
//   //   if (arr.indexOf(item) === index) {  return newSortArr.push(item)}
//   // return newSortArr.indexOf(item) === index;
  
// // })
// //    console.log(result)
// // return result.length

// console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])) // 4
//  console.log(countIdentic([15,14,13,19,13,14,14,14,7,9,9]))

//================================ЦіКАВА ЗАДАЧА ЗАДАЧА 15 ==================================

// Задача 1а.Используя метод splice(), замените в массиве, состоящем из нескольких строковых переменных, складывающихся в одно предложение,
//   указанное пользователем слово.
//   Например, у нас есть такой массив:

// Массив строкJavaScript
// const poem = ["Мороз","и", "солнце", "день","чудесный"];
// Вам необходимо спросить у пользователя номер слова, которое нужно удалить, а затем, на какое слово нужно заменить.
//  После этого нужно вывести массив в виде цельной фразы с пробелами, используя метод join().Например, так:


// const poem = ["Мороз", "і", "сонце", "день", "чудовий"];

// function enterWordNumber(poem) {
//   const enterNumber = prompt('Введіть номер слова від 1 до ' + poem.length + ', яке потрібно замінити у реченні');
//   if (enterNumber <= poem.length && enterNumber !== 0) {
//     const enterWord = prompt('Введіть слово, на яке хочете замінити');
//     poem.splice(enterNumber - 1, 1, enterWord);
//     const result =alert(poem.join(" "));
//     console.log(result);
//   } else {
//     alert('Ваша цифра більша кількості слів у реченні. Спробуйте вести іншу цифру');
//     enterWordNumber(poem);
//   }
  
// }

// enterWordNumber(poem);
// function replaceWordInSentence(sentence, index, newWord) {
//   sentence.splice(index - 1, 1, newWord);
//   return sentence.join(" ");
// }

// const poem = ["Мороз", "и", "солнце", "день", "чудесный"];
// const index = prompt("Введите номер слова, которое нужно заменить:");
// const newWord = prompt("Введите новое слово:");
// const newSentence = replaceWordInSentence(poem, index, newWord);
// console.log(newSentence);





//===================================ЗАДАЧА 16  =========================================================

//Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num),
// которая принимает число num в качестве аргумента и вставляет двоеточие(: )
//  между двумя нечетными числами.Например, если вводится число 55639217, то на выход должно быть 5: 563: 921: 7.

// const number = prompt('Введите число');


// function addColorOdd(number) {
//   let newArr = [];
// number.split('').forEach((item, i, array) => {
// if(+item%2 && +array[i+1]%2) {
// newArr.push(item + ':');
// } else {
// newArr.push(item);
// }
// })
// console.log(newArr.join(''));
// }
// addColorOdd(number);
 

//===================================ЗАДАЧА  17 =========================================================

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
//     і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// const orderedItems = [5, 15, 30, 34,];


// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach( (element, index) => {
//         totalPrice += orderedItems[index];
          
//     });
//     return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]))
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))




//===================================Задача 18 ========================================
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив,

// в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

    
    
// function filterArray(numbers, value) {
//     let newArray = [];
//    numbers.forEach(function (number, index) {
//         if (numbers[index] > value) {
//             newArray.push(numbers[index]);
//         }
//     })
//     return newArray;
//     }

    
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

//===================================Задача 19 ========================================
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray,
//     і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     let newArray = [];
//     firstArray.forEach(function (element, index) {
//         if (secondArray.includes(firstArray[index])) {
//             newArray.push(firstArray[index])
//         }
//     })
// return newArray;
// }


// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//===================================Задача 20 ========================================
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число,
//     додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers,
//     а створювала, наповнювала і повертала новий масив з оновленими значеннями.
        
        
// const changeEven = (numbers, value) => {
//     const newArray = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             // number += value;
//             newArray.push(number + value);
//         }
//         else { newArray.push(number)}
//     })
//     return newArray;
// }
// const numbers = [1, 2, 3, 4, 5];
// const clearArray = changeEven([2, 8, 3, 7, 4, 6], 10);
// console.log(clearArray);


//===================================Задача 21 ========================================
// 4. Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так,
//     что бы она вернула строку '1*b*1c'

    
// function getString(...args) {
//     let result = [];
//      result = args.slice(1).join(args[0])

//      return   result
//     }
  

//     console.log(getString('*', '1', 'b', '1c'));
//     //   console.log(getString('1*b*1c')





//=================================================Задача=АВТОПЕРЕВІРКА 22 =======================================
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів(властивість friends).
//  У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// const getFriends = (users) => {
//   const friendsArray = users.flatMap(user => user.friends)
//   const uniqueFriendArray = friendsArray.filter((friend, index, array) => array.indexOf(friend) === index);

//     return uniqueFriendArray;
// };

//  console.log(getFriends(users))

//=============================ЗАДАЧА АВТОПЕРЕВІРКА 23 ================================
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх.
//  Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

//  const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players);

// const totalPlayTime = playtimes.reduce((previousValue, value) => { return previousValue + value });
// console.log(totalPlayTime)

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime)


//=============================ЗАДАЧА АВТОПЕРЕВІРКА 24 ================================

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
//   і отримати загальну суму цих значень часу.Розрахувати час для кожного з гравців можна,
//   розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalPlayerTime = players.reduce((total, player) => { return total + (player.playtime / player.gamesPlayed) }, 0);
// console.log(players)
// console.log(totalPlayerTime )

//==============================================ЗАДАЧА АВТОПЕРЕВІРКА 25 ================================
// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// // const sortedByAuthorName = books;
// const sortedByAuthorName =[...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author));


//     // console.log(sortedByAuthorName)

// const sortedByReversedAuthorName =[...books].sort((firstAuthor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAuthor.author));
  
// //  console.log(sortedByReversedAuthorName)


// const sortedByAscendingRating = [...books].sort((firstRating, secondRating) =>
//  secondRating.rating - firstRating.rating);
// // const sortedByAscendingRating = [...books].sort((firstRating, secondRating) =>
// //   firstRating.rating - secondRating.rating);

//  console.log(sortedByAscendingRating)


// const sortedByDescentingRating = [...books].sort((firstRating, secondRating) =>
//   firstRating.rating - secondRating.rating);

// console.log(sortedByDescentingRating)


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

//  const getNamesSortedByFriendCount = users =>{
//  const ffgfgg = [...users].sort((firstFriends, secondFriends) => (firstFriends.friends).length -(secondFriends.friends).length).map(user => user.name)

 
//   // console.log(namesSortedByFriends)
// };
//  const namesSortedByFriends = [...users].sort((firstFriends, secondFriends) => (firstFriends.friends).length - (secondFriends.friends).length).map(user => user.name)
// console.log(namesSortedByFriends)
// const friendsArray = users.flatMap(user => user.friends)
//  console.log(friendsArray)

//  const namesSortedByFriends = friendsArray.filter((friend, index, array) => array.indexOf(friend)===index).sort()

// console.log(namesSortedByFriends)



//=============================ЗАДАЧА АВТОПЕРЕВІРКА 26 ================================

// Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
//   щоб вона повертала загальний баланс користувачів(властивість balance),
//     стать яких(властивість gender) збігається зі значенням параметра gender.


//  const getTotalBalanceByGender = (users, gender) => {
//   // const userGender = users.filter(user => user.gender === gender)
//   //    const userGenderBalance = userGender.reduce((totalbalance, user) => (totalbalance + user.balance), 0);
//   //  return userGenderBalance
   
//    return users.filter(user => user.gender === gender).reduce((totalbalance, user) => (totalbalance + user.balance), 0);
   
// };
// console.log(getTotalBalanceByGender(users, "male"))
// console.log(getTotalBalanceByGender(users, "female"))



//=====================================ЗАДАЧА АВТОПЕРЕВІРКА 27 ================================


// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
//   і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice
//   і повертається як результат роботи функції.


//  const orderedItems = [2, 7, 12, 4, 5]
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
// orderedItems.forEach( function (element, index) {
//      totalPrice += orderedItems[index];
  
// })
  
//   return totalPrice;
// }
// console.log(calculateTotalPrice([2, 7, 12, 4, 5] ))

// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // з індексу 1 видалимо 1 елемент

// console.log( arr ); // ["I", "JavaScript"]





//======================================ЗАДАЧА АВТОПЕРЕВІРКА 28 ================================

// class StringBuilder {
//   constructor (initialValue) {
//     this.initialValue = initialValue
//   }

// getValue() {
//   return this.initialValue;
// }
// padEnd(str) {
//   this.initialValue += str;
//   }
//   padStart(str) {
//     this.initialValue = str + this.initialValue;
//    }
//   padBoth(str) {
//     this.initialValue = str + this.initialValue + str;
//   }
// }
// const builder = new StringBuilder(".");

// console.log(builder.getValue()); // "."
//  builder.padStart("^");
//  console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//================================СПОСОБИ КЛОНУВАННЯ МАСИВУ==========================================

  // const array = [1, 3, 5, 6, 10, 5, 7]
//  console.log(array)


// function returnArray(array) {
//   console.log(array.slice())
//  }
// returnArray(array)

// 1.  const returnArray = (array) => {
//   console.log(array.slice(3))
  
// }
// returnArray(array)

//  2.  const returnNewArray = array.map((element) => {element
//   console.log(array)
// })

// 3. const concatarray = (array => { console.log(array.concat())})
 
// concatarray(array)


// 4. const returnCopyArray = ([...array]) => {console.log(array)}
// returnCopyArray(array)


// 5. Перебрати через цикл For
//6. Перебрати через цикл while

// // 7. метод повернення копії через фільтр. не гарантовано повертає масив тієї ж довжини як Map, але якщо повернути тру(тобто при переборі,
//  фільтр перевіряє значення на правдивість і повертає елемент у масив, тимсамим робить копію)
// numbers = [1, 2, 3];
// console.log(numbers)
// numbersCopy = numbers.filter(() => true);
// console.log(numbersCopy)




//=======================================ЗАДАЧА КОДВАРС 29 =======================================
// Напишіть функцію, яка перевірятиме, чи збігаються два наведені символи.

// Якщо один із символів не є літерою, поверніть -1
// Якщо обидва символи мають однаковий регістр, поверніть 1
// Якщо обидва символи є літерами, але не збігаються, поверніть 0

// function sameCase(a, b){
//    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//     return -1}
//    else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//       return 1
//   }else{
//     return 0
//   }
// }
// sameCase("a", "Z")
// sameCase("a", "b")
// console.log(sameCase("X", ""))


//==================ЗАДАЧА КОДВАРС 30 =============================================================
// Вовки були повторно інтродуковані до Великої Британії.Ви займаєтеся вівчарством, і зараз вас мучать вовки, які прикидаються вівцями.
// На щастя, ви добре вмієте їх помічати.

// Попередьте вівцю перед вовком, що її ось-ось з’їдять. Пам’ятайте, що ви стоїте в першій частині черги, яка знаходиться в кінці масиву:

// [вівця, вівця, вівця, вівця, вівця, вовк, вівця, вівця] (ВИ ТУТ НАПЕРЕДІ ЧЕРГИ)
//    7 6 5 4 3 2 1
// Якщо вовк є найближчою до вас твариною, відповідайте «Будь ласка, йди геть і перестань їсти моїх овець».
//  В іншому випадку поверніться "Ой! Вівця номер N! Тебе ось-ось з'їсть вовк!" де N - позиція вівці в черзі.

// Примітка: в масиві завжди буде рівно один вовк.

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"


// function warnTheSheep(queue) {
//   const wolfIndex = queue.indexOf('wolf');
//   const sheepIndex = queue.length - wolfIndex - 1;

//   if (wolfIndex === queue.length - 1) {
//     return 'Pls go away and stop eating my sheep';
//   } else {
//     return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
//   }
// }

// const strictEqual = require('chai').assert.strictEqual;

// function doTest (queue, expected) {
// 	const log = `for queue [${queue.join(', ')}]\n`;
// 	const actual = warnTheSheep(queue);
// 	strictEqual(actual, expected, log);
// }

// describe("Fixed tests", function() {
//   it("Tests", function() {
//     doTest(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
// 		"Oi! Sheep number 2! You are about to be eaten by a wolf!"
// 	);
//     doTest(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
// 		"Oi! Sheep number 5! You are about to be eaten by a wolf!"
// 	);
//     doTest(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
// 		"Oi! Sheep number 6! You are about to be eaten by a wolf!"
// 	);
//     doTest(["sheep", "wolf", "sheep"],
// 		"Oi! Sheep number 1! You are about to be eaten by a wolf!"
// 	);
//     doTest(["wolf"],
// 		"Pls go away and stop eating my sheep"
// 	);
//     doTest(["sheep", "sheep", "wolf"],
// 		"Pls go away and stop eating my sheep"
// 	);
//   });
// });



//==================ЗАДАЧА КОДВАРС 31=====================================================
// Наша футбольна команда завершила чемпіонат.

// Результати матчів нашої команди записуються в колекцію рядків.
//  Кожен матч представлено рядком у форматі «x: y», де x — рахунок нашої команди, а y — рахунок наших суперників.

// Наприклад: ["3:1", "2:2", "0:1", ...]

// Очки нараховуються за кожен матч таким чином:

// якщо x > y: 3 бали (перемога)
// якщо x < y: 0 балів (програш)
// якщо x = y: 1 бал (рівня)
// Нам потрібно написати функцію, яка приймає цю колекцію та повертає кількість очок,
//   які наша команда(x) отримала в чемпіонаті за правилами, наведеними вище.

// Примітки:

// наша команда завжди грає 10 матчів у чемпіонаті
// 0 <= x <= 4
// 0 <= y <= 4
// const games = ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]
// function points(games) {
//    let total = 0;
//   for (let i = 0; i < games.length; i += 1) {
//     const result = games[i].split(':')
//     console.log(result)
//    const x = Number.parseInt(result[0]);
//     console.log(x)
//   const y = Number.parseInt(result[1]);
//     console.log(y)
   
//      if (x > y) {
//       total += 3;
//     } else if (x === y) {
//       total += 1;
//     }
//   }
//   return total;
// }
// console.log(points(games));


// function pillars(numPill, dist, width) {
//   let distance = 0;

//   if(numPill>1){
//   return distance = ((numPill-2) *  width) + dist;
//  }
// else {return 0;}
// }

// console.log(pillars(2, 20, 25));


 
// function reverse_a_number(n) {

// 1-й СПОСІБ
  // n = n + "";
  // return n.split("").reverse().join("");

// 2-Й СПОСІБ
  // console.log(n)
  // const a = String(n)
  // console.log(a)
  //   return Number(String(n).split("").reverse().join(""));
// }
      
// console.log(reverse_a_number(258961)); // 169852

// const a = 2948248028
// console.log(a)
// const b = a + ''
// console.log(b)
// const c = b.split()
// console.log(c)
// const e = b.split('')
// console.log(e)
// const j = e.reverse()
// console.log(j)
// const k =Number( j.join(''))
// console.log(k)


//===========================ЗАДАЧА 32========================================================
//  Вернуть переданную строку с буквами в алфавитном порядке
// Напишите функцию alphabet_order(str), которая возвращает переданную строку с буквами в алфавитном порядке.

// Пример строки: 'alphabetical'

// Ожидаемый результат: 'aaabcehillpt'

// function alphabet_order(str) {
// const a = str.split('')
// const  alphabetString = a.sort().join('')
// console.log(alphabetString)

// return alphabetString
// }

// document.writeln(alphabet_order("alphabetical")); // "aaabcehillpt"


//===========================ЗАДАЧА 33================================================================

// Напишите функцию find_longest_word(str), которая принимает строку
//  в качестве параметра и находит самое длинное слово в строке.

// function findLongestWord (str) {
//     const stringSplit = str.split(' ');
//     let longestWord = "";

//     for (const word of stringSplit) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log((findLongestWord('Web Development Tutorial'))); // "Development"


// 2 - Й СПОСІБ

// function findLongestWord(str) {
//   const splitarray = str.split(' ')
//   console.log(splitarray)
//   return splitarray.reduce((a, b) => (b.length > a.length) ? b : a);
// };

// console.log(findLongestWord('Web Development Tutorial'));


//=======================ЗАДАЧА 34===========================================================
// 1-Й СПОСІБ
//  Напишите функцию vowel_count(str), которая принимает строку
// в качестве параметра и подсчитывает количество гласных в строке.
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// function vowelCount(str1) {
//   const splitArray = str1.split('')
//   console.log(splitArray)

//   splitArray.filter(element => vowels.includes(element))
//   return splitArray.filter(element => vowels.includes(element)).length
// }

// console.log((vowelCount('Web Development Tutorial'))); //9



// 2-Й СПОСІБ
// function vowelCount(str1) {
//   const splitArray = str1.split('')
//   console.log(splitArray)

//     let count = splitArray.reduce((acc, element) => {
//     if (vowels.includes(element)) {
//       // acc++;
//       acc++;
//     }
//     return acc;
//   },0);
//   return count;
// }
 


// console.log((vowelCount('Web Development Tutorial'))); //9

//===========================ЗАДАЧА 35=====================================================
// function test_prime(n) {
//   if (n <= 1) { // якщо число менше або дорівнює 1, то воно не є простим
//     return false;
//   } else if (n === 2) { // якщо число дорівнює 2, то воно є простим
//     return true;
//   } else {
//     for (let i = 2; i < n; i++) { // перебираємо числа від 2 до n-1
//       if (n % i === 0) { // якщо число ділиться націло на будь-яке з чисел, то це число не є простим
//         return false;
//       }
//     }
//     return true; // якщо число не ділиться націло на жодне з чисел від 2 до n-1, то воно є простим
//   }
// }

// console.log(test_prime(51)); // false

//=======================ЗАДАЧА   36 =================================
// Напишите функцию detect_data_type(value), которая принимает аргумент и возвращает тип.

// Примечание.Существует шесть возможных значений, которые возвращает typeof:
// объект, логическое значение, функция, число, строка и неопределенное значение.
// function detect_data_type(value) {
//    return typeof(value)
// };

// console.log(detect_data_type(8)); // number
// console.log(detect_data_type('wm-school')); // string
// console.log(detect_data_type(true)); // boolean

// function second_greatest_lowest(arrNum) {
//   let result = []
//   let secondLowest = arrNum[1];
  
//   let secondGreatest = arrNum[arrNum.length - 2];
//   result.push(secondLowest, secondGreatest)
  
//   return result.join(',');
// };

// console.log((second_greatest_lowest([8,9,10,11,12]))); // 9,11




//=========================================ЗАДАЧА 37 ===========================

// Напишите функцию JavaScript, которая определяет, идеально ли число.

//  в теории чисел идеальное число - это положительное целое число,
//  которое равно сумме своих положительных делителей,
// то есть сумме его положительных делителей, исключая само число(также известное как его аликвота).сумма).
//  Точно так же совершенное число - это число,
// равное половине суммы всех его положительных делителей(включая само себя).Пример : первое совершенное число - 6, потому что 1, 2 и 3 являются его
// собственными положительными делителями, а 1 + 2 + 3 = 6.
//  Эквивалентно число 6 равно половине суммы всех его положительных делителей: (1 + 2 + 3 + 6) / 2 = 6.
//  Следующее совершенное число - 28 = 1 + 2 + 4 + 7 + 14.
//  За ним следуют совершенные числа 496 и 8128.
// function is_perfect(number) {
// let counter = 0;
//    for(let i=1;i<=number/2;i+=1) {
//          if(number%i === 0) {
//             counter += i;
//           }
//      }
  
//      if(counter === number && counter !== 0) {
//        concole.log("Це ідеальне число.");
//         }
//       else {
//       concole.log("Це не ідеальне число.");
//         }
//  }
// is_perfect(28);


//=========================================ЗАДАЧА  38 =============================


// Напишите функцию JavaScript для вычисления множителей положительного целого числа.


// function factors(n) {
//   let newArray = [n];
  
//   for (let i = 1; i <= n / 2; i += 1) {
//     if (n % i === 0){
//       newArray.push(i)
   
//   }
//   }
//   return newArray.sort((a, b) => a-b)
// }

// console.log(factors(18));  // [1,2,3,6,9,18]
//  console.log(factors(19));  // [1,19]
//  console.log(factors(20));  // [1,2,4,5,10,20]


//=====================ЗАДАЧА 39 ========================


// Напишите функцию JavaScript для преобразования суммы в монеты.

// Пример функции : amount_coins(96, [25, 10, 5, 2,1])

// Здесь 96 - сумма, а 25, 10, 5, 2, 1 - монеты.

// Вывод : 25,25,25,10,10,1

// function amount_coins(amount, coins) {
//   let result = []; // масив для зберігання монет
  
//   for (let i = 0; i < coins.length; i++) {
//     while (amount >= coins[i]) {
//       result.push(coins[i]); // додаємо монету до масиву
//       amount -= coins[i]; // зменшуємо суму на значення монети
//     }
//   }
  
//   return result.join(); // повертаємо масив монет, об'єднаний через кому
// }
// console.log(amount_coins(96, [25, 10, 5, 2, 1])); // 25,25,25,10,10,1

//=================================ЗАДАЧА 40 ==============================



// 15. Извлечение уникальных символов из строки
// Напишите функцию JavaScript для извлечения уникальных символов
// из строки.

// function unique_char(str) {
//   const stringArray = [...str]
//   console.log(stringArray)
//   const uniqueArray =  stringArray.filter((letter, index) => stringArray.indexOf(letter) === index);

//    return uniqueArray.join('')
// }
// console.log(unique_char("позволяеткопироватьтекстиз")); // позвляеткираьс






//======================================ЗАДАЧА 41 =====================================



//  Найти элементы массива, которые больше указанного числа
// Напишите функцию JavaScript, которая возвращает элементы массива, которые больше указанного числа.


// const result = [14, 45, 4, 31, 64, 10];
// function BiggerElements(val)  {
//   const filterBigestNumbers = result.filter(num => num > val);
  
//   return filterBigestNumbers.join();
// }

  
// console.log(BiggerElements(18)); // 45,31,64




//===================ФУНКЦІЇ КОЛБЕКИ ЗАДАЧА 42=======================
//  Передать функцию JavaScript в качестве параметра
// Напишите программу JavaScript для передачи "функции JavaScript" в качестве параметра.

// //-------функція вищого порядку-----------
// function addFunc(id, refreshCallback) {
// console.log(id)
// refreshCallback()
// }

// //-----------Колбек функція -----------
// function sayHallo() {
//   console.log( 'Hello everyone')
// }


// addFunc(1, sayHallo);



//=====================================Задача Codewars========================

// Дано ціле невід’ємне число, наприклад 3, поверніть рядок із бурчанням: «1 вівця...2 вівця...3 вівця...».
//  Вхідні дані завжди будуть дійсними, тобто жодних від’ємних чисел.

// const countSheep = function (num) {
//   let counter = 0;
//   let result = [];

// while (counter < num) {
//   counter ++;
//   result.push(`${counter} seep...`)
//   }
//   return result.join("")
// }
// console.log(countSheep(1));



// function drawStairs(n) {
//   return [...Array(n)].map((x, y) =>' '.repeat(y) + 'I').join('\n')
  


// }
// // console.log(drawStairs((6), "I\n I\n  I", "There's something wrong with these 3 steps"))

// 