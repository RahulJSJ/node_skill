let {readFile, writeFile } = require('fs')

let first = readFile('./foldres/subfolders/t.txt', 'utf8', (err,result)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(result)
})

let second = writefile('./foldres/subfolders/t.txt', 'hello world'+first, (err,result)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(result)
})