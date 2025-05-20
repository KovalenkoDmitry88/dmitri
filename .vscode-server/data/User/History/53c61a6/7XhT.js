#!/usr/bin/env node

const fs = require('fs');

function drawChristmasTree(floors, outputPath) {
    let tree = [];
    const maxWidth = 2 * (floors + 2) + 1; // Максимальная ширина для последнего этажа
    
    // Верхушка
    tree.push('W');
    tree.push('*');
    
    // Этажи
    for (let i = 0; i < floors; i++) {
        const width = 3 + 2 * (i + 1);
        let floor = '*'.repeat(width);
        
        // Добавляем украшения
        if (i === 0) {
            floor = '@' + floor.substring(1);
        } else if (i === floors - 1) {
            floor = floor.substring(0, floor.length - 1) + '@';
        } else if (i % 2 === 0) {
            floor = '@' + floor.substring(1);
        } else {
            floor = floor.substring(0, floor.length - 1) + '@';
        }
        
        // Центрируем этаж
        const spaces = ' '.repeat((maxWidth - width) / 2);
        tree.push(spaces + floor);
    }
    
    // Ствол
    const trunkSpaces = ' '.repeat((maxWidth - 5) / 2);
    tree.push(trunkSpaces + 'TTTTT');
    tree.push(trunkSpaces + 'TTTTT');
    
    fs.writeFileSync(outputPath, tree.join('\n'));
}

function decorateFloor(stars, floorIndex, totalFloors) {
    let decorated = stars.split('');
    
    if (floorIndex === 0) {
        decorated[0] = '@';
    } else if (floorIndex === totalFloors - 1) {
        decorated[decorated.length - 1] = '@';
    } else if (floorIndex % 2 === 0) {
        decorated[0] = '@';
    } else {
        decorated[decorated.length - 1] = '@';
    }
    
    return decorated.join('');
}

const args = process.argv.slice(2);
if (args.length < 2) {
    console.log('Usage: ./tree.js <floors> <output_file>');
    process.exit(1);
}

drawChristmasTree(parseInt(args[0]), args[1]);