const express = require('express')
const app = express()

const port = 8081

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
    res.sendFile(__dirname + '/about.html')
    res.sendFile(__dirname + '/contact.html')
    res.sendFile(__dirname + '/news.html')
})

app.listen(port, function(){
    console.info("Let's code on http://localhost:${port} !!")
})