#!/usr/bin/env node

const fs = require('fs');

function drawChristmasTree(floors, outputPath) {
    let tree = [];
    const floorWidth = 6 * floors - 1;
    
    // Верхушка
    tree.push(' '.repeat(floorWidth / 2) + 'W');
    tree.push(' '.repeat(floorWidth / 2) + '*');
    
    // Этажи
    for (let i = 0; i < floors; i++) {
        let stars = '*'.repeat(2 * i + 1);
        let decorations = decorateFloor(stars, i, floors);
        let spaces = ' '.repeat((floorWidth - decorations.length) / 2);
        tree.push(spaces + decorations);
    }
    
    // Ствол
    let trunkSpaces = ' '.repeat((floorWidth - 5) / 2);
    tree.push(trunkSpaces + 'TTTTT');
    tree.push(trunkSpaces + 'TTTTT');
    
    fs.writeFileSync(outputPath, tree.join('\n'));
}

function decorateFloor(stars, floorIndex, totalFloors) {
    let decorated = stars.split('');
    
    if (floorIndex === 0) {
        decorated[0] = '@';
        decorated[decorated.length - 1] = '@';
    } else if (floorIndex === totalFloors - 1) {
        decorated[2] = '@';
        decorated[decorated.length - 3] = '@';
    } else {
        const pos = Math.floor(floorIndex / 2);
        decorated[pos] = '@';
        decorated[decorated.length - 1 - pos] = '@';
    }
    
    if (floorIndex > 1) {
        for (let i = 1; i < decorated.length - 1; i += 2) {
            if (decorated[i] !== '@') {
                decorated[i] = ' ';
            }
        }
    }
    
    return decorated.join('');
}

const args = process.argv.slice(2);
if (args.length < 2) {
    console.log('Usage: ./tree.js <floors> <output_file>');
    process.exit(1);
}

drawChristmasTree(parseInt(args[0]), args[1]);