"use strict";

/*
Повторить то, что было на семинаре или решить следущие задачи
```
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<title>Homework 5</title>
</head>

<body>

[]()
[]()
Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.
[]()

<p class="dropdown">Привет :)</p>
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Dropdown button
</button>
<div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>

<script>
    "use strict";
[]()
[]()
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
[]()
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
[]()
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
[]()
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
[]()
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
[]()
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
[]()
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
 



/*1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.*/

const dropEl = document.querySelectorAll('.dropdown-item');
console.log(dropEl);
dropEl.forEach(element => {
    element.classList.add('super-dropdown');
});
console.log(dropEl);


/*2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.*/

const btnEl = document.querySelector('.btn');
console.log(btnEl);
btnEl.classList.toggle('btn-secondary');
console.log(btnEl);

/*3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".*/

const menuEl = document.querySelector('.menu');
menuEl.classList.remove('dropdown-menu');
console.log(menuEl);

/*4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`*/

const drDownEl = document.querySelectorAll('.dropdown') [1];
drDownEl.insertAdjacentHTML('afterend', `<a href="#">link</a>`);

/* 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".*/

const idEl = document.querySelector('#dropdownMenuButton');
idEl.setAttribute('id', 'superDropdown')
console.log(idEl);


/*6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.*/

const ariaEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
ariaEl.dataset.dd = 3;
console.log(ariaEl);

/*7. Удалите атрибут type у элемента с классом "dropdown-toggle". */

const typeEl = document.querySelector('.dropdown-toggle');
typeEl.removeAttribute('type');
console.log(typeEl);