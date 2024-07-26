// Задание 2.

// Создайте простое модальное окно, которое появляется при клике
// на кнопку "Открыть модальное окно" и закрывается при клике на
// кнопку "Закрыть". Модальное окно должно содержать заголовок
// "Модальное окно" и кнопку для закрытия. Модальное окно должно
// плавно появляться и исчезать при открытии и закрытии.

const containerEl = document.querySelector(".container");

const openButtonEl = containerEl.querySelector(".openButton");
const windowEl = document.querySelector(".window");

openButtonEl.addEventListener("click", (e) => {
  windowEl.style.display = "block";
});

const closeButtonEl = containerEl.querySelector(".closeButton");
closeButtonEl.addEventListener("click", (e) => {
  windowEl.style.display = "none";
});
