//Задание 1
function number(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(number(8, 4));
console.log(number(6, 6));

//Задание 2
let a = prompt('Введите любое число');

function evenNumber() {
    if (a % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(evenNumber());

//Задание 3.1
let b = prompt('Введите любое число');
let square = function () {
    console.log(b ** 2);
}

console.log(square());

//Задание 3.2
let c = prompt('Введите любое число');
let square1 = function () {
    return b ** 2;
}

square1();

//Задание 4
/*
let age = prompt('Сколько Вам лет?');

if (age < 0) {
    function printMessage() {
        console.log('Вы ввели неправильное значение');
    }
} else if (age <= 12) {
    function printMessage() {
        console.log('Привет, друг!');
    }
} else {
    function printMessage() {
        console.log('Добро пожаловать!');
    }
}

printMessage();
*/

function printMessage() {
    let age = prompt('Сколько Вам лет?');
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}

printMessage();

//Задание 5
function mult(d, e) {
    if (isNaN(d) || isNaN(e)) {
        return ('Одно или оба значения не являются числом');
    } else {
        return (d * e);
    }
}

console.log(mult(5, 7));

//Задание 6
function printMessage(f) {
    if (isNaN(f)) {
        return 'Переданный параметр не является числом';
    } else {
        return f ** 3;
    }
}

let f = prompt('Введите любое число');

console.log(printMessage(f));

//Задание 7
function getCircleArea() {
    return this.radius * 2 * 3.14;
}
function getCirclePerimeter() {
    return this.radius ** 2 * 3.14;
}

const circle1 = {
    radius: 10,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

const circle2 = {
    radius: 5,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());