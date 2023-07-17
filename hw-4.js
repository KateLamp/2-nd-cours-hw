//Задача 1
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

//Задача 2
let a = 0;
while (a < 6) {
    console.log(a);
    a++;
}

//Задача 3
let b = 7;
do {
    console.log(b);
    b++;
} while (b > 6 && b < 23);

//Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
};
for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов.`);
}

//Задание 5
let n = 1000, num = 0;
while (n >= 50) {
    n = n/2;
    num++;
};
console.log(`Число - ${n}`);
console.log(`Количество интераций - ${num}`);

//Задание 6
let friday = 5;
do {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday = friday + 6;
    friday++
} while (friday <= 31);