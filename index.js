function printMessage() {
    let userAnswer = prompt('Введите номер месяца');
    if (userAnswer == 1 || userAnswer == 2 || userAnswer == 12) {
        alert('Зима');
    } else if (userAnswer == 3 || userAnswer == 4 || userAnswer == 5) {
        alert('Весна');
    } else if (userAnswer == 6 || userAnswer == 7 || userAnswer == 8) {
        alert('Лето');
    } else if (userAnswer == 9 || userAnswer == 10 || userAnswer == 11) {
        alert('Осень');
    } else {
        alert('Братьев-месяцев всего двенадцать');
    }
}