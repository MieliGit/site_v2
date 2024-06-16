// Задание №5 (тайминг 10 минут)
// Основы Node.js
// Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере
// по URL “/” возвращает такую страницу:
// Подсказки:
// - Обязательно импортируйте модуль http для реализации сервера: const http =
// require('http');
// - Используйте метод модуля http .createServer(): http.createServer((req, res) => {});
// - Для запуска сервера не забудьте вызвать метод .listen(): server.listen(3000);
// - Обязательно установите заголовки ответа с помощью метода res.writeHead():
// 'Content-Type': 'text/html; charset=UTF-8'
// - Отправьте HTML код с помощью метода res.end()


// const http = require('http');
// function serverHandler(req, res) {
// if(req.url === "/"){
//     res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
//     res.end('<h1>Hello first server!</h1>');
// }else if(req.url=== "/about"){
//     res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
//     res.end('<h1>Hello first server, page ABOUT</h1>');
// }else {
//     res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
//     res.end('page not found');
// }
// }
// const server = http.createServer(serverHandler);
// server.listen(3000);//1-1000 не желательно (порты) запуск сервера

////////////

const http = require("http");
const server = http.createServer((req, res) => {
    console.log("Запрос получен");

    if (req.url === "/") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`<h1>Мой сервер работает!</h1>`);
    } else if (res.url === "/about") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`<h1>About</h1>`);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end(`Page not found`);
    }
});

const port = '3005';
server.listen('3005');