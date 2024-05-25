// Создать класс "Товар" с приватными полями "название", "цена" и "количество". 
// Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", 
// которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. 
// Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара 
// для всех создаваемых объектов.


class Product{

    #name;
    #price;
    #count;
    static maxCount = 20;
    constructor(name, price, count){
        this.#name = name;
        this.#price = price;
        this.#count = count;

        if(count > Product.maxCount){
            throw new Error('колличество привышает допустимое')
        }
    }

    setName(newName){
        this.#name = newName;
    }

    setPrice(newPrice){
        this.#price = newPrice;
    }

    setCount(newCount){
        if(count > Product.maxCount){
            throw new Error('колличество привышает допустимое')
        }
        this.#count = newCount;
    }

    getInfo(){
        console.log(`Название товара: ${this.#name}\nЦена: ${this.#price}\nКолличество: ${this.#count}`);
    }
}


const phone = new Product('Dayomi', 15000, 15);
phone.getInfo();
