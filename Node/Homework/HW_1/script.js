const http = require('http');
let countOne = 0;
let countTwo = 0;

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.writeHead(200, {
         'Content-Type': 'text/html; charset=UTF-8'
      });
      countOne++;
      res.end(
         `<h1>Первая страница</h1>
         <a href="/about">Смена страниц</a>
         <p>Перешел ${countOne} раз </p>
         `
      );
   } else if (req.url === '/about') {
      res.writeHead(200, {
         'Content-Type': 'text/html; charset=UTF-8'
      });
      countTwo++;
      res.end(
         `<h1>Вторая страницы</h1>
         <a href="/">Смена страницы</a>
         <p>Перешел ${countTwo} раз </p>
         `
      );
   } else {
      res.writeHead(404, {
         'Content-Type': 'text/html; charset=UTF-8'
      });
      res.end(
         `<h1>Ошибка 404</h1>
         <p>Страница не существует</p>
         `
      );
   }
});

server.listen('3000');