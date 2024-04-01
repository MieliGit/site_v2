"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function examinationNum(numFirst, numSecond, numThrid) {
    return Math.max(numFirst, numSecond, numThrid);
}

let numUserFirst = prompt('Введите первое число для сравнения');
let numUserSecond = prompt('Введите второе число для сравнения');
let numUserThrid = prompt('Введите третье число для сравнения');

alert(`Максимальное значение среди чисел ${numUserFirst}, ${numUserSecond}, ${numUserThrid} равно ${examinationNum(numUserFirst, numUserSecond, numUserThrid)}.`);
