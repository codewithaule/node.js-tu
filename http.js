const http = require('http')

const server = http.createServer((req , res) => {
    console.log(req)
    res.write('home page')
    res.end()
})
server.listen(5000)