//Задача 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задача 2
const b = 2007;
alert(b);

//Задача 3
const c = 'Brendan Eich';
alert(c);

//Задача 4
let d = 10;
let e = 2;
alert(d + e);
alert(d - e);
alert(d * e);
alert(d / e);

//Задача 5
let f = 5;
let result = e ** f;
alert(result);

//Задача 6
let g = 9;
alert(g % e);


//Задача 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num -= 1;
alert(num);

//Задача 8
let age = prompt('Сколько Вам лет?');
alert(age);

//Задача 9
const user = {
    name: 'Kate',
    age: 24,
    isAdmine: true,
    "city of residence": 'Saint-P'
};
user.age = 25;
delete user['city of residence'];
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//Задача 10
let name = prompt('Введите Ваше имя');
alert(`Привет, ${name}!`);