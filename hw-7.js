//Задание 1
let task1 = 'js';
console.log(task1.toUpperCase());

//Задание 2
function searchStart() {
    const search = (searchStart.length - 1);
    searchStart.forEach((searchStart) => {
        if (searchStart.toLowerCase().includes(search.toLowerCase())) {
            console.log(searchStart);
        }
    });
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

//Задание 3
let task3 = 32.58884;

console.log(Math.floor(task3));
console.log(Math.ceil(task3));
console.log(Math.round(task3));

//Задание 4
let task4 = [52, 53, 49, 77, 21, 32];
let maxNumber = Math.max(...task4);
let minNumber = Math.min(...task4);

console.log(maxNumber);
console.log(minNumber);

//Задание 5
function task5(minValue, maxValue) {
    return Math.random() * (maxValue - minValue) + minValue;
}

console.log(task5(1, 10));

//Задание 6
function getRandomArrNumbers(num) {
    let i = Math.floor(Math.random() * (num - 1) + 1);
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(i);
    }
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7
function task7(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(task7(3, 9));

//Задание 8
let task8 = new Date();

console.log(task8);

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function ruDate(currentDate) {

    let date = currentDate.getDate();
    if (date < 10) {
        date = '0' + date
    };

    let month = months[currentDate.getMonth() - 1];

    let day = days[currentDate.getDay()];

    let hours = currentDate.getHours();
    if (hours < 10) {
        hours = '0' + hours
    };

    let mins = currentDate.getMinutes();
    if (mins < 10) {
        mins = '0' + mins
    };

    let secs = currentDate.getSeconds();
    if (secs < 10) {
        secs = '0' + secs
    };

    console.log('Дата: ${date} ${month} ${currentDate.getFullYear()} - это ${day}.');
    console.log('Время: ${hours}:${mins}:${secs}');

};

ruDate(currentDate = new Date());