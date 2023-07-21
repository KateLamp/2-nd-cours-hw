function printMessage() {
    let userAnswer = prompt('Введите номер месяца');
    if (userAnswer == 1 || userAnswer == 2 || userAnswer == 12) {
        console.log('Зима');
    } else if (userAnswer == 3 || userAnswer == 4 || userAnswer == 5) {
        console.log('Весна');
    } else if (userAnswer == 6 || userAnswer == 7 || userAnswer == 8) {
        console.log('Лето');
    } else if (userAnswer == 9 || userAnswer == 10 || userAnswer == 11) {
        console.log('Осень');
    } else {
        console.log('Братьев-месяцев всего двенадцать');
    }
}