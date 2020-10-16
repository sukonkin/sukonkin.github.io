'use strict';

const welcome = [
"Привет!",
"Вітання!",
"Salam!",
"Përshëndetje!",
"Hello!",
"Բարեւ Ձեզ!",
"Hallo!",
"Kaixo!",
"Прывітанне!",
"გამარჯობა!",
"Hej!",
"Sawubona!",
"Dia dhuit!",
"Halló!",
"여보세요!",
"Sveiki!",
"Dzień dobry!",
"Olá!",
"Ahoj!",
"Zdravo!",
"Hallå!"
];

const hello = document.querySelector("#greeting");
hello.textContent = welcome[Math.floor(Math.random() * welcome.length)];