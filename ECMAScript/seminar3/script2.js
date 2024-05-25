// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.


function getPrototypeChain(obj) {
    const zero = [];
    while (obj !== null){
        zero.push(obj);
        obj = Object.getPrototypeOf(obj);
    }

    return zero;
}

console.log(getPrototypeChain({
    a: 1,
    b: 2
}));