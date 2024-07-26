// Задача 2.

// Бесконечная лента фотографий
// Для создания бесконечной ленты с фотографиями с использованием
// Unsplash API, выполните следующие шаги:
// 1. Зарегистрируйтесь на Unsplash:
// ○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// ○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
// ○ Войдите в свой аккаунт Unsplash.

// 2. Создайте приложение:
// ○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
// (https://unsplash.com/developers).
// ○ Нажмите на кнопку "Your apps".
// ○ Нажмите "New Application" (Новое приложение).
// ○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
// использовать http://localhost для тестового сайта).
// ○ После заполнения информации, нажмите "Create Application" (Создать приложение).

// 3. Получите API-ключ:
// ○ После создания приложения, вы получите API-ключ. Этот ключ будет
// отображаться в вашей панели управления приложением.
// ○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
// Скопируйте его.
// 4. Измените код HTML и JavaScript:
// ○ Откройте вашу HTML-страницу в текстовом редакторе или
// интегрированной среде разработки.
// ○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
// API-ключ.

// 5. Реализуйте загрузку фотографий при открытии страницы.

// 6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.

/// Application ID 637056
/// Secret key OGj9pJYGNwMIKY-mu37d9xmqcoPMWAJ7v4nT3hnf6lI
/// Access Key w5eI_wxQ59aszsQgEIZWwgGhKKeiix_wtFZeDpuaJo8
document.addEventListener("DOMContentLoaded", Main);
let counter = 2;
let isFetching = false;
document.addEventListener("scroll", async function () {
  const page = document.documentElement;
  // if (page.scrollTop + page.clientHeight >= page.scrollHeight - 100) {
  if (
    page.scrollTop + page.clientHeight >= page.scrollHeight - 100 &&
    !isFetching
  ) {
    counter++;
    const data = await fetchPhotosList(counter);
    let photoHtml = "";
    data.forEach((element) => {
      photoHtml += createImg(element);
    });
    photoContainerEl.insertAdjacentHTML("beforeend", photoHtml);
  }
});

const photoContainerEl = document.querySelector("#photo-container");
async function fetchPhotosList(page) {
  try {
    isFetching = true;
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}`,
      {
        headers: {
          Authorization:
            "Client-ID w5eI_wxQ59aszsQgEIZWwgGhKKeiix_wtFZeDpuaJo8",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Ошибка, статус сервера ${response.status}`);
    }
    return await response.json();
  } finally {
    isFetching = false;
  }
}

async function Main() {
  const data = await fetchPhotosList(counter);
  let photoHtml = "";
  data.forEach((element) => {
    photoHtml += createImg(element);
  });
  photoContainerEl.innerHTML = photoHtml;
}

function createImg(imgInfo) {
  return `<div class="photo">
      <img src="${imgInfo.urls.regular}" alt="">
    </div>`;
}
