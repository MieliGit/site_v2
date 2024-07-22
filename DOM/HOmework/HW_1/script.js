// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.

const scheduleList = `
[
  {
    "id": "1",
    "title": "Рисование",
    "time": "8:00 - 9:30",
    "max_participants": "20",
    "actual_participants": "10"

  },
  {
    "id": "2",
    "title": "Пение",
    "time": "9:30 - 11:00",
    "max_participants": "25",
    "actual_participants": "10"

  },
  {
    "id": "3",
    "title": "Игра на гитаре",
    "time": "11:00 - 12:30",
    "max_participants": "20",
    "actual_participants": "5"

  },
  {
    "id": "4",
    "title": "Игра на скрипки",
    "time": "12:30 - 14:00",
    "max_participants": "20",
    "actual_participants": "20"

  },
  {
    "id": "5",
    "title": "Танцы",
    "time": "14:00 - 15:30",
    "max_participants": "30",
    "actual_participants": "20"

  },
  {
    "id": "6",
    "title": "Игра на барабанах",
    "time": "15:30 - 17:00",
    "max_participants": "20",
    "actual_participants": "0"
  }
]`;

const scheduleData = JSON.parse(scheduleList);

creatScheduleList(scheduleData);

function creatScheduleList(scheduleData) {
  const scheduleEl = document.querySelector(".schedule");
  scheduleData.forEach((item) => {
    scheduleEl.insertAdjacentHTML(
      "beforeend",
      ` <div class="schedule__content" id= ${item.title}> 
        <div class="schedule__content-title"> ${item.title}</div>
        <div class="schedule__content-time">Время проведения занятия: ${item.time}</div>
        <div class="schedule__content-maxparticipants">Общее колличество мест: <span class="schedule__span"> ${item.max_participants}</span></div>
        <div class="schedule__content-actualparticipants" data-id=${item.id}>Колличество занятых мест: <span class="schedule__span">${item.actual_participants}</span></div>
        <div class="schedule__button">
          <button class="schedule__button-registration" id= ${item.id}> Записаться</button>
          <button class="schedule__button-cancel disabled" data-id="${item.title}"> Отменить запись </button>
        </div>
      `
    );
    if (Number(item.max_participants) === Number(item.actual_participants)) {
      const regButtonEl = document.getElementById(`${item.id}`);
      regButtonEl.classList.add("disabled");
    }
  });
}
const scheduleEl = document.querySelector(".schedule");

// const regButtonEl = scheduleEl.querySelector(".schedule__button");

// regButtonEl.addEventListener("click", function (e) {
//   if (e.target.classList.contains("schedule__button-registration")) {
//     scheduleData.actual_participants = Number(
//       scheduleData.actual_participants + 1
//     );
//   }
// });

scheduleEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("schedule__button-registration")) {
    scheduleData[e.target.id - 1].actual_participants =
      Number(scheduleData[e.target.id - 1].actual_participants) + 1;
    const actualNumberParticipants = document.querySelector(
      `[data-id="${e.target.id}"]`
    );
    const span = actualNumberParticipants.querySelector(".schedule__span");
    span.textContent = scheduleData[e.target.id - 1].actual_participants;

    const registrationButton = document.getElementById(`${e.target.id}`);
    // if (
    //   Number(scheduleData[e.target.id - 1].actual_participants) ===
    //   Number(scheduleData[e.target.id - 1].max_participants)
    // ) {
    //   registrationButton.classList.add("disabled");
    //   registrationButton.nextElementSibling.classList.remove("disabled");
    // }
    registrationButton.classList.add("disabled");
    registrationButton.nextElementSibling.classList.remove("disabled");
  }
  if (e.target.classList.contains("schedule__button-cancel")) {
    let actualTitle = scheduleData.filter(
      (item) => item.title === e.target.dataset.id
    );
    let index = Number(actualTitle[0].id) - 1;
    scheduleData[index].actual_participants =
      scheduleData[index].actual_participants - 1;

    const actualNumPracticipants = document.querySelector(
      `[data-id="${index + 1}"]`
    );
    const span = actualNumPracticipants.querySelector(".schedule__span");
    span.textContent = scheduleData[index].actual_participants;

    const cancelButton = document.querySelector(
      `[data-id="${e.target.dataset.id}"]`
    );

    //   if (scheduleData[index].actual_participants < 1) {
    //     cancelButton.classList.add("disabled");
    //   }
    //   cancelButton.previousElementSibling.classList.remove("disabled");
    // }

    cancelButton.classList.add("disabled");
    cancelButton.previousElementSibling.classList.remove("disabled");
  }
});
