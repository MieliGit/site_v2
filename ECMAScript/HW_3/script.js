// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

class Employee {
    constructor(name){
        this.name = name;
    }

    displayInfo(){
        console.log(`Имя сотрудник ${this.name}`);
    }
}

class Manager extends Employee{
    constructor(name, department){
        super(name);
        this.department = department;
    }

    displayInfo(){
        console.log(`Имя сотрудник ${this.name}\nОтдел: ${this.department}`);
    }
}

const emp = new Employee('Ivan');
emp.displayInfo();

const manager = new Manager('Igor', 'Sales');
manager.displayInfo();


// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600


class Order {
    constructor(orderNumber){
        this.orderNumber = orderNumber;
        this.products = [];
        this.totalPrise = 0;
    }

    addProduct(product) {
        this.products.push(product);
    }
  
    getTotalPrice() {
        for (let value in this.products) {
           this.totalPrise += this.products[value].price;
        }
        return this.totalPrise;
    }
}

class Product {
    constructor(name, price) {
       this.name = name;
       this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600