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

//Задание 5
let d = prompt('Введите первое число');
let e = prompt('Введите второе число');
if (isNaN(d, e)) {
    function printMessage() {
        console.log('Одно или оба значения не являются числом');
    }
} else {
    function printMessage() {
        console.log(d * e);
    }
}

printMessage();

//Задание 6
let f = prompt('Введите любое число');
if (isNaN(f)) {
    function printMessage() {
        console.log('Переданный параметр не является числом');
    }
} else {
    function printMessage() {
        let message = f ** 3;
        console.log(message);
    }
}

printMessage();

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