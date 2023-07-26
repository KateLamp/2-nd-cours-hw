//Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) break;
    console.log(arr[i]);
}

//Задание 2
const num = [1, 5, 4, 10, 0, 3];
console.log(num.indexOf(4));

//Задание 3
const numJoin = [1, 3, 5, 10, 20];
console.log(numJoin.join([' ']));

//Задание 4
let newArr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];

//Задание 5
const numPush = [1, 1, 1];
numPush.push(2, 2, 2);
console.log(numPush);

//Задание 6
const arrSort = [9, 8, 7, 'a', 6, 5];
console.log(arrSort.sort());
arrSort.pop();
console.log(arrSort);

//Задание 7
const arrQuestion = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Угадай число'));
if (arrQuestion.includes(userAnswer)) {
    alert('Угадал!');
} else {
    alert('Не угадал');
}

//Задание 8
let arrABC = 'abcdef';
let arrSplit = arrABC.split('');
arrSplit.reverse();
console.log(arrSplit.join(''));

//Задание 9
let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(arr1.flat());

//Задание 10
let arrRandom = [4, 6, 2, 9, 1, 7, 5];
let sum = 0;
for (let i = 0; i < arrRandom.length - 1; i++) {
    console.log(sum = arrRandom[i] + arrRandom[i + 1]);
}

//Задание 11
const arr2 = [4, 6, 2, 9, 1, 7, 5];
let arrSquare = arr2.map(item => item**2);
console.log(arrSquare);

//Задание 12
function getLengthWords(word) {
    let wordSplit = word.split('');
    for (let i = 0; i < wordSplit.length; i++) {
        return wordSplit[i].length;
    }
  
}

console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

//Задание 13
function filterPositive(array) {
    return array.filter(item => item < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));