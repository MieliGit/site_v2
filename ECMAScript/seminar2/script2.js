// Задание 2 (20минут)
// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

const Animal = {
    name: "Cat",
    food: "Fish",
    voice: "Meow",

    eat() {
        return `${this.name} eat ${this.food}`;
    }
}

const Dog = {
    name: "Dog",
    food: "Meat",
    voice: "Wow",

    bark() {
        return `Dog bark is ${this.voice}`;
    }
}

Dog.eat = Animal.eat;
console.log(Dog.eat());