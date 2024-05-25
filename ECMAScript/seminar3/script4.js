// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". 
// Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", 
// которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", 
// которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

class User{
    #name;
    #age;
    #email;
    static #maxAge = 99;

    constructor(name, age, email){
        this.#name =  name;
        this.#age = age;
        this.#email = email;

        if(age > User.#maxAge){
            throw new Error('Возраст превышает максимально доспустимый')
        }
    }

    setName(newName){
        this.#name = newName;
    }
    setAge(newAge){
        if(age > User.#maxAge){
            throw new Error('Возраст превышает максимально доспустимый')
        }
        this.#age = newAge;
    }

    setEmail(newEmail){
        this.#email = newEmail;
    }

    getInfo(){
        console.log(`Имя: ${this.#name}\nВозраст: ${this.#age}\nEmail: ${this.#email}`);
    }
}

const Ivan = new User('Ivan', 20, 'ivanushka2132@mail.ru');
Ivan.getInfo();

const vasya = new User("Vasya", 15, "1234@55.ru");
vasya.getInfo();
vasya.setAge(50);
vasya.getInfo();
vasya.setAge(150);
vasya.getInfo();

const lena = new User("Elena", 150, "123@123");