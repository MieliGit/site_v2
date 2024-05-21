// Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(def) {
    return {
        value: def,
        add(num) {
            return (this.value += num);
        },

        subtract(num) {
            return (this.value -+ num);
        }

    };
}

const number = createCalculator(10);
console.log(number.add(5));
console.log(number.subtract(5));