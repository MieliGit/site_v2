// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]
// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

const mergeArrays = (arrayOne, arrayTwo) => [...arrayOne, ...arrayTwo];

console.log(mergeArrays(arrayOne, arrayTwo));

// function mergeArrays(arrayOne, arrayTwo) {
//     return [...arrayOne, ...arrayTwo];
// }

const removeDuplicates = (...params) => [new Set(params)];

// function removeDuplicates(...params) {
//     return new Set(params);
// }

// function removeDuplicates(...params) {
//     return params.filter((elem, id) => {
//         return params.indexOf(elem) === id;
//     })
// }

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));