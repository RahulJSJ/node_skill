let path = require('path')
console.log(path.sep)
let filePath = path.join('/foldres','subfolders','t.txt')
console.log(filePath)

let base = path.basename(filePath)
console.log(base)

//  resolve
let absolute = path.resolve(__dirname,'foldres','subfolders','t.txt')
console.log(absolute)