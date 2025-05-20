#!/usr/bin/env node
console.log("Тест запущен");
const fs = require('fs');
const tree = 'Елочка'
fs.writeFileSync('test.txt', tree);
console.log("Файл записан");
