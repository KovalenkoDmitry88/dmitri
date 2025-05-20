const fs = require('fs');
const tree = [
    '         W ',
    '         *',
    '      @*****',
    '    *********@',
    ' @*************',
    '*****************@', 
    '      TTTTT',
    '      TTTTT'
].join('\n');
console.log(tree);
fs.writeFile('testtree.txt', tree, (err) => {
    if (err) {
        console.error('Ошибка при записи файла:', err);
    } else {
        console.log('Ёлочка успешно сохранена в testtree.txt');
    }
});