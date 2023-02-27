let {readFileSync, writeFileSync, } = require('fs')

let first = readFileSync('./foldres/subfolders/t.txt', 'utf8')
console.log(first)

let writing = writeFileSync('./foldres/subfolders/t.txt', 'Is the result of '+first+'utf8',{flag:'a'})
console.log(writing)