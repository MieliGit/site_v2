"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const min = 0;
const max = 9;
let minNum = 9;
let sum = 0;
const arrTwo = [];
const arrThree = [];

for (let index = 0; index < 5; index++) {
    arrTwo.push(Math.floor(Math.random() * (max - min + 1)) + min);
}
for (let i = 0; i < arrTwo.length; i++) {
    sum += arrTwo[i];
    minNum = Math.min(minNum, arrTwo[i]);
    if(arrTwo[i] === 3){
        arrThree.push(i)
    }
}



console.log(arrTwo);
console.log(minNum);
console.log(sum);
console.log(arrThree);
