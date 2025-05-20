const fs = require('fs');

// Создаем ёлочку по шаблону
const tree = [
    '                W ',
    '                 *',
    '         @*****',
    '       *********@',
    ' @*************',
    '*****************@', 
    '             TTTTT',
    '             TTTTT'
].join('\n');

// Выводим ёлочку в консоль
console.log(tree);

// Сохраняем ёлочку в файл testtree.txt
fs.writeFile('testtree.txt', tree, (err) => {
    if (err) {
        console.error('Ошибка при записи файла:', err);
    } else {
        console.log('Ёлочка успешно сохранена в testtree.txt');
    }
});