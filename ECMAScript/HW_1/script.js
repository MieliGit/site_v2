// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать
//  значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а 
//  не напрямую.
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает
//  первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

//1)

const arr = [1, 5, 7, 9]

// function minNum(array) {
//     return Math.min(...array);
// }

const minNum = (array) => Math.min(...array);

console.log(minNum(arr));

//2)

function createCounter(def) {
    return {
        value: def,
        increment() {
            return (this.value += 1);
        },

        decrement() {
            return (this.value -+ 1);
        }

    };
}

const count = createCounter(0);
console.log(count.increment());
console.log(count.decrement());

// 3)

const rootElement = document.querySelector('.container');

function findElementByClass(root, classEl) {
    if (classEl === NaN){
        return 'Класса нет'
    }
    const classElem = document.querySelector(`.${classEl}`);
    console.log(classElem);

}

const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);