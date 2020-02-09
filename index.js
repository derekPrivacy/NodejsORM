const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

require('./src/connection')
require('./src/bootstrap')()

const Teacher = require("./src/model/Teacher");
const Student = require("./src/model/Student");
const Register = require("./src/model/Register");

