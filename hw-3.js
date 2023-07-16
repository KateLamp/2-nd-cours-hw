//Задача 1
let password = 'пароль';
let enterPassword = String(prompt('Введите пароль'));
if (enterPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Задача 2
let c = prompt('Введите число');
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задача 3
let d = prompt('Введите первое число');
let e = prompt('Введите второе число');
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задача 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);

//Задача 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('Зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень');
        break;
    default: console.log('Братьев-месяцев всего двенадцать');
        break;
}

//Задача 7
let g = prompt('Пожалуйста, введите любое число');
isNaN(g);
if (g % 2 == 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

//Задача 8
let clientOS = prompt('Какой операционной системой Вы пользуетесь? Введите 0, если iOS; введите 1, если Android');
let clientDeviceYear = prompt('В каком году произведен Ваш телефон?')
clientDeviceYear = 2015;
if (clientOS == 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS == 1) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Что-то пошло не так');
}

//Задача 9
let clientOS1 = prompt('Какой операционной системой Вы пользуетесь? Введите 0, если iOS; введите 1, если Android');
let clientDeviceYear1 = prompt('В каком году произведен Ваш телефон?')
clientDeviceYear1 = 2015;
if (clientOS1 == 0 && clientDeviceYear1 >= 2015) {
    alert('Установите версию приложения для iOS по ссылке');
}   else if (clientOS1 == 0 && clientDeviceYear1 < 2015) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
}   else if (clientOS1 == 1 && clientDeviceYear1 >= 2015) {
    alert('Установите версию приложения для Android по ссылке');
}   else if (clientOS1 == 1 && clientDeviceYear1 < 2015) {
    alert('Установите облегченную версию приложения для Android по ссылке');
}   else {
    alert('Что-то пошло не так');
}