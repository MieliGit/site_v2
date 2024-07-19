// Задание 1 (тайминг 30 минут)
// Работа с BOM
// 1. Определение текущего размера окна браузера:
// ○ Напишите функцию, которая будет выводить текущую
// ширину и высоту окна браузера при его изменении.

// const widthBom = window.innerWidth;
// const heightBom = window.innerHeight;
// const resultEl = document.querySelector(".params");

// resultEl.innerHTML = `ширина: ${widthBom} высота ${heightBom}`;
// window.addEventListener("resize", () => {
//   resultEl.innerHTML = `ширина:${window.innerWidth} высота:${window.innerHeight}`;
// });
// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);

////

// Задание 2
// Даны html и css:

// Необходимо создать страницу, в которой будут работать
// все три кнопки.
// - При нажатии на кнопку "Добавить элемент" на страницу
// добавляется новый квадратный элемент (<div>) с размерами
// 100x100 пикселей. Этот элемент должен иметь класс .box
// и содержать текст, указывающий порядковый номер элемента
// (1, 2, 3 и так далее).

// const addButEl = document.querySelector("#addButton");
// const containEl = document.querySelector("#container");

// addButEl.addEventListener("click", () => {
//   const lengthBoxEl = containEl.querySelectorAll(".box").length;
//   containEl.insertAdjacentHTML(
//     "beforeend",
//     `<div class="box">${lengthBoxEl + 1}</div>`
//   );
// });

// - При нажатии на кнопку "Удалить элемент" удаляется
// последний добавленный элемент, если таковой имеется.

// const removeButEl = document.querySelector("#removeButton");

// removeButEl.addEventListener("click", () => {
//   containEl.lastElementChild?.remove();
// });
// - При нажатии на кнопку "Клонировать элемент" создается
// копия последнего добавленного элемента и добавляется на
// страницу. Если последнего добавленного элемента нет на
// странице, необходимо вывести сообщение в alert, с надписью
// о невозможности клонирования, так как клонировать нечего.

// const cloneButEl = document.querySelector("#cloneButton");

// cloneButEl.addEventListener("click", () => {
//   const cloneEl = containEl.lastElementChild?.cloneNode(true);
//   if (containEl.lastElementChild) {
//     containEl.appendChild(cloneEl);
//   } else {
//     alert("Копировать нечего");
//   }
// });

////////

// Задание 3.
// Необходимо создать страницу со списком статей.
// Каждая статья состоит из id, заголовка, текста статьи.
// id - будем брать из unix timestamp.
// Необходимо подготовить список статей в JSON-формате,
// которые будут выводиться на странице при первом ее
// открытии.
// Необходимо реализовать возможность удаления статьи.
// Необходимо реализовать возможность добавления статьи.
// Необходимо реализовать возможность изменения статьи,
// ввод данных можно реализовать через prompt.
// Статьи должны сохраняться в локальное хранилище
// браузера, и должны быть доступны после перезагрузки
// страницы.

const bdJson = `[
  {
    "id": 1721052259017,
    "title": "Заголовок 1",
    "text": "текст 1"
  },
  {
    "id": 1721052259018,
    "title": "Заголовок 2",
    "text": "текст 2"
  }
]`;

const key = "articles";
const containEl = document.querySelector(".container");

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, bdJson);
}
const articles = JSON.parse(localStorage.getItem(key));

articles.forEach((article) => {
  containEl.insertAdjacentHTML("beforeend", createArticleHtml(article));
});

containEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("removeArticule")) {
    return;
  }
  const articleEl = e.target.closest(".article");

  const articleIndex = articles.findIndex(
    (article) => article.id === +articleEl.getAttribute("data-id")
  );
  articles.splice(articleIndex, 1);
  ///--- запись в local storage---//
  localStorage.setItem(key, JSON.stringify(articles));
  articleEl.remove();
});

const addNewArticleEl = document.querySelector(".addNewArticle");
addNewArticleEl.addEventListener("click", () => {
  const id = Date.now();
  const title = prompt("Введите заголовок");
  const text = prompt("Введите текст");

  const article = {
    id,
    title,
    text,
  };

  articles.push(article);
  localStorage.setItem(key, JSON.stringify(articles));
  containEl.insertAdjacentHTML("beforeend", createArticleHtml(article));
});

// const updateArticleEl = document.querySelector(".updateButton");
containEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("updateButton")) {
    return;
  }
  const articleEl = e.target.closest(".article");

  const article = articles.find(
    (article) => article.id === +articleEl.getAttribute("data-id")
  );

  article.title = prompt("Введите заголовок");
  article.text = prompt("Введите текст");

  localStorage.setItem(key, JSON.stringify(articles));
  articleEl.querySelector(".title").innerHTML = article.title;
  articleEl.querySelector(".text").innerHTML = article.text;
});

function createArticleHtml(article) {
  return `<div class="article" data-id ="${article.id}">
    <span class="title">${article.title}</span>
    <div class="text">${article.text}</div>
    <button class="removeArticule">Удалить</button>
    <button class="updateButton">Редактировать</button>
  </div>`;
}
