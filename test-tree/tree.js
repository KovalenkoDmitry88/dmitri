#!/usr/bin/env node

const fs = require('fs');

function drawChristmasTree(floors, outputPath) {
    let tree = [];
     const maxWidth = 5 + 4 * (floors - 1);
    
    tree.push(' '.repeat((maxWidth - 1) / 2) + 'W');
    tree.push(' '.repeat((maxWidth - 1) / 2) + '*');
    
    let currentWidth = 5;
    for (let i = 0; i < floors; i++) {
        let floor = '*'.repeat(currentWidth);
        
        if (i % 2 === 0) {
            floor = '@' + floor.substring(1);
        } else {
            floor = floor.substring(0, floor.length - 1) + '@';
        }
        
        const spaces = ' '.repeat((maxWidth - currentWidth) / 2);
        tree.push(spaces + floor);
        
        currentWidth += 4;
    }
    
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