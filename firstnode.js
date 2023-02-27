// let amount = 12
// if (amount<10){
//     console.log("You don't have money")
// }
// else console.log("You have little amount left")

// console.log(amount)

// GLOBALS - These are the variabbles that have global access.
// console.log(__dirname+__filename)
// setInterval(()=>{
//     console.log('Helllo bs')
// },2000)

// Modules - Encapsulated code (only share minimal)
// commonjs, every file is a module in itself( by default)
const name = require('./names')
const sayhi = require('./utils')
const data = require('./alternative')
require('./mind_grenade')


// sayhi('susan')
// sayhi(name.john)
// sayhi(name.peter)