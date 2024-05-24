// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const calculator = {

    add(num1, num2){
        return num1 + num2;
    },

    subtract(num1, num2){
        return num1 - num2;
    },

    multiply(num1, num2){
        return num1 * num2;
    }
};

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));

const obj = {
    num1: 27,
    num2: 13
}

console.log(calculator.add.call(obj, obj.num1, obj.num2));
console.log(calculator.subtract.apply(obj, [obj.num1, obj.num2]));