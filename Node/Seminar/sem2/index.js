// Задание №1
// Необходимо найти, установить и применить библиотеку, которая позволит
// избежать проблем со сложением и умножением чисел с плавающей запятой

const { calculateresultSum } = require("./calcul");

const total = calculateresultSum([12.1, 32.2, 43.1], 0.9);

console.log("Общая стоимость покупок: " + total + " рублей");
