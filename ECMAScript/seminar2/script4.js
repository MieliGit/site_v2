// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        return `My name is ${this.name} and I'm ${this.age} years old.`;
    }
}

const Pers = new Person('Ivan', 25);
console.log(Pers.introduce());