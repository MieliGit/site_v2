"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function salaryFix(salary) {
    return salary*0.87;
}

let userSalary = Number(prompt('Введите число от 100 до 300'));

if(userSalary < 100 || userSalary > 300){
    alert('Число введено неверно');
}else{
    console.log(userSalary);
    console.log(`Размер заработной платы за вычетом налогов равен ${salaryFix(userSalary)}`);
}

