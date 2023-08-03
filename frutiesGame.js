function game2() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(`Запомниne порядок слов: ${list}`);
    let firstUserAnswer = prompt('Какое было первое слово?');
    let secondUserAnswer = prompt('Какое было последнее слово?');
    if (firstUserAnswer === list[0] && secondUserAnswer === list[list.length - 1]) {
        alert('Молодец! Вы верно запомнили оба слова!');
    } else if (firstUserAnswer === list[0] || secondUserAnswer === list[list.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно.')
    }
};