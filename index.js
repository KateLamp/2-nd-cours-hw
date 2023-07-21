function printMessage() {
    let userAnswer = prompt('Введите номер месяца');
    if (userAnswer == 1 || 2 || 12) {
        console.log('Зима');
    } else if (userAnswer == 3 || 4 || 5) {
        console.log('Весна');
    } else if (userAnswer == 6 || 7 || 8) {
        console.log('Лето');
    } else if (userAnswer == 9 || 10 || 11) {
        console.log('Осень');
    } else {
        console.log('Братьев-месяцев всего двенадцать');
    }
}