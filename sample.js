const express = require('express')
const app = express()
const port = 8080

function sayHello(req, res) {
    res.send("hello");
}

function add(req, res) {
    res.send(req.query.x + req.query.y);
}


app.get('/', sayHello);
app.get('/add', add);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))