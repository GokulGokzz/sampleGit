const express = require('express')
const app = express()
const port = 3000

function sayHello(req, res) {
    console.dir(req);
    res.send(req.path.name);
}

function add(req, res) {
    res.send(req.query.x + req.query.y);
}

app.get('/add', add)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))