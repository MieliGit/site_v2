// Задание 1 (тайминг 20 минут)
// 1. Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");


const Person = {
    name:"...",
    age: "...",
    gender: "...",

    changeName: function (newName) {
        this.name = newName;
    },

    changeAge: function (newAge) {
        this.age = newAge;
    },
    
    changeGender: function (newGender) {
        this.gender = newGender;
    },

    introduce: function () {
        return `My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`
    }

}



Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.changeName("Mike");

console.log(Person.introduce());