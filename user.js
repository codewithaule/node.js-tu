const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)



const currentOs={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOs)
