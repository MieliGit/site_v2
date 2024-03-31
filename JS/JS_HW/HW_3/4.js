"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sum(numFour, numFive) {
    return numFour + numFive;
}

function dif(numFour, numFive) {
    if(numFour > numFive){
        return numFour - numFive;
    }else{
        return numFive - numFour;
    }
}

function div(numFour, numFive) {
    return numFour/numFive;
}

function multi(numFour, numFive) {
    return numFour*numFive;
}

let userNumFour = Number(prompt('Введите первое число для проведение операций'));
let userNumFive = Number(prompt('Введите второе число для проведение операций'));

console.log(sum(userNumFour, userNumFive));
console.log(dif(userNumFour, userNumFive));
console.log(div(userNumFour, userNumFive));
console.log(multi(userNumFour, userNumFive));