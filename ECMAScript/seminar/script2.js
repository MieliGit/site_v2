// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// function getEvenNumbers(array) {
//     return array.filter((elem) => {
//         return elem % 2 === 0;
//     })
// }

const getEvenNumbers = (array) => array.filter((elem) => elem % 2 === 0);


// function calculateAverage(array) {
//     return array.reduce((sum, elem) => (sum + elem)) / array.length;
// }

const calculateAverage = (array) => array.reduce((sum, elem) => (sum + elem)) / array.length;


// function capitalizeFirstLetter(str) {
//     return str.replace(/(^|\s)\S/g, (char) => {
//        return char.toUpperCase();
//     })
// }

const capitalizeFirstLetter = (str) => str.replace(/(^|\s)\S/g, (char) => char.toUpperCase())



console.log(capitalizeFirstLetter("текст для проверки функции"));
console.log(calculateAverage([1, 2, 3, 4, 5, 6]));
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));




