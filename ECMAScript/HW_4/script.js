// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch 
// для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, 
// который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, 
// промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200),
//  функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, 
//  функция отклоняет промис с сообщением об ошибке.


const ID = "https://randomuser.me/api/"

const getUserData = async (id)=>{
    // try {
    //     const res = await fetch(id);
    //     const data = await res.json();
    //     return data;

    // } catch (error) {
    //     console.log(error);
    // }
    const res = await fetch(id).catch((error) => {
        console.log('error', error);
        return {error: true}
    });
    const data = await res.json();
    console.log(data);
};


const data2 = await getUserData(ID);
console.log(data2);


// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch 
// для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены,
//  или отклоняется в случае ошибки.

// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. 
// Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе
//  в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис
//   с сообщени

async function saveUserData(user, url) {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      console.log(response.status);
      throw new Error("Ошибка " + response.status);
    } else {
      console.log(response.status);
    }
  }
  const user = {
    name: "John Smith",
    age: 30,
    email: "john@example.com",
  };
  const url1 = "https://randomuser.me/api/";
  const url2 = "https://jsonplaceholder.typicode.com/users";
  
  saveUserData(user, url1)
    .then(() => {
      console.log("User data saved successfully");
    })
    .catch((error) => {
      console.log(error.message);
    });
  
  saveUserData(user, url2)
    .then(() => {
      console.log("User data saved successfully");
    })
    .catch((error) => {
      console.log(error.message);
    });

// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. 
// Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () => {
  changeStyleDelayed("btn", 1000);
});
function changeStyleDelayed(nameClass, time) {
  const divEl = document.querySelector(`.${nameClass}`);
  setTimeout(() => {
    divEl.classList.toggle("colorChange");
  }, time);
}

console.log(changeStyleDelayed('btn', 2000));