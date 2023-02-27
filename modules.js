let os = require('os')
// Info about current user
let user = os.userInfo()
console.log(user)
// Method returns the system uptime in seconds
console.log('The system uptime in seconds is '+ os.uptime() +'seconds')

let currentOS = {
    name: os.type(),
    release:os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)