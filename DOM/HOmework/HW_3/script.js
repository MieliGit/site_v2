let isFetching = false;

window.addEventListener("load", () => {
  createPhoto();
});

async function getPhoto() {
  const key = "r11C661ys9uhAxrXOU-C-9jZJYiS3EsVI-qslRW53UU";
  try {
    isFetching = true;
    const response = await fetch(`https://api.unsplash.com/photos/random`, {
      headers: {
        Authorization: `Client-ID ${key}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Ошибка, статус сервера ${response.status}`);
    }
    return await response.json();
  } finally {
    isFetching = false;
  }
}

// async function Main() {
//   const data = await getPhoto();
//   let photoHtml = "";
//   data.forEach((element) => {
//     photoHtml += createImg(element);
//   });
//   photoContainerEl.innerHTML = photoHtml;
// }

// function createImg(imgInfo) {
//   return `<div class="photo">
//       <img src="${imgInfo.urls.regular}" alt="">
//     </div>`;
// }

async function createPhoto() {
  const photo = await getPhoto();
  if (photo) {
    const imageBox = document.querySelector(".photoBox__imagebox");
    const img = document.createElement("img");
    img.classList.add("photoBox__imagebox-image");

    img.src = photo.urls.small;
    img.alt = photo.alt_description;
    imageBox.appendChild(img);

    const imagePhotographerNameDiv = document.querySelector(
      ".photoBox__bottom-name"
    );
    imagePhotographerNameDiv.textContent = `${photo.user.name}`;

    const imageLikesCounterSpan = document.querySelector(
      ".photoBox__bottom-counter"
    );
    imageLikesCounterSpan.textContent = `${photo.likes}`;
  }
}

const counterButton = document.querySelector(".photoBox__bottom-likeButton");
counterButton.addEventListener("click", function () {
  increaseCounter();
});

function increaseCounter() {
  const likesCounter = document.querySelector(".photoBox__bottom-counter");
  const currentCounter = parseInt(likesCounter.textContent, 10);
  likesCounter.textContent = currentCounter + 1;
}

// document.addEventListener("DOMContentLoaded", Main);

// let isFetching = false;
// document.addEventListener("scroll", async function () {
//   const page = document.documentElement;
//   // if (page.scrollTop + page.clientHeight >= page.scrollHeight - 100) {
//   if (
//     page.scrollTop + page.clientHeight >= page.scrollHeight - 100 &&
//     !isFetching
//   ) {
//     const data = await fetchPhotosList();
//     let photoHtml = "";
//     data.forEach((element) => {
//       photoHtml += createImg(element);
//     });
//     photoContainerEl.insertAdjacentHTML("beforeend", photoHtml);
//   }
// });

// const photoContainerEl = document.querySelector("#container");
// async function fetchPhotosList() {
//   try {
//     isFetching = true;
//     const response = await fetch(`https://api.unsplash.com//photos/random?`, {
//       headers: {
//         Authorization: "Client-ID r11C661ys9uhAxrXOU-C-9jZJYiS3EsVI-qslRW53UU",
//       },
//     });
//     if (!response.ok) {
//       throw new Error(`Ошибка, статус сервера ${response.status}`);
//     }
//     return await response.json();
//   } finally {
//     isFetching = false;
//   }
// }

// async function Main() {
//   const data = await fetchPhotosList();
//   let photoHtml = "";
//   data.forEach((element) => {
//     photoHtml += createImg(element);
//   });
//   photoContainerEl.innerHTML = photoHtml;
// }

// function createImg(imgInfo) {
//   return `<div class="photo">
//       <img src="${imgInfo.urls.regular}" alt="">
//     </div>`;
// }
