// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;

    }

    displayInfo(){
        console.log(`Название книги ${this.title}, ее автор ${this.author}. Она включает в себя ${this.pages} страниц`); 
    }
}

const book1 = new Book('1984', 'Джордж Оруэлл', 318);
book1.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript


class Student {
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;

    }

    displayInfo(){
        console.log(` Имя студента: ${this.name}\n Возраст студента: ${this.age} лет \n Класс студента: ${this.grade}`); 
    }
}

const student1 = new Student('Иван', 13, 7);
student1.displayInfo();
