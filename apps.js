let http = require('http')
let server = http.createServer((req, res) => {
    if(req.url==='/') {
    res.end('Welcome to our home page')
    }    
    if(req.url==='/about') {
        res.end('Here is a short history')
    }
    res.end('''<h1>Oops!</h1> 
    <p>We can't find the page just navigate back</p>
     <a href="/">Go back to home page</a>''')
})
server.listen(3000)