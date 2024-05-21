// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)


function sumDigits(num) {
    if (num < 10){
        return num;
    }
    return sumDigits (Math.floor(num / 10))+ (num % 10);
}

console.log(sumDigits(123)); 
console.log(sumDigits(456789));