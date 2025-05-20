#!/usr/bin/env node

const fs = require('fs');

function drawChristmasTree(floors, outputPath) {
    let tree = [];
    // Ширина самого широкого этажа: 5 + 4*(floors-1) звезд
    const maxWidth = 5 + 4 * (floors - 1);
    
    // Верхушка (центрируем относительно maxWidth)
    tree.push(' '.repeat((maxWidth - 1) / 2) + 'W');
    tree.push(' '.repeat((maxWidth - 1) / 2) + '*');
    
    // Этажи
    let currentWidth = 5; // Начинаем с 5 звезд для первого этажа
    for (let i = 0; i < floors; i++) {
        let floor = '*'.repeat(currentWidth);
        
        // Добавляем украшения
        if (i % 2 === 0) {
            // Для четных этажей украшаем слева
            floor = '@' + floor.substring(1);
        } else {
            // Для нечетных этажей украшаем справа
            floor = floor.substring(0, floor.length - 1) + '@';
        }
        
        // Центрируем этаж
        const spaces = ' '.repeat((maxWidth - currentWidth) / 2);
        tree.push(spaces + floor);
        
        // Увеличиваем ширину для следующего этажа
        currentWidth += 4;
    }
    
    // Ствол (центрируем относительно maxWidth)
    const trunkSpaces = ' '.repeat((maxWidth - 5) / 2);
    tree.push(trunkSpaces + 'TTTTTT');
    tree.push(trunkSpaces + 'TTTTTT');
    
    fs.writeFileSync(outputPath, tree.join('\n'));
}

const args = process.argv.slice(2);
if (args.length < 2) {
    console.log('Usage: ./tree.js <floors> <output_file>');
    process.exit(1);
}

drawChristmasTree(parseInt(args[0]), args[1]);