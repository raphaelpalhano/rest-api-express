const express = require('express');
const http = require('http');
const bodyParser = require('body-parser')
const cors = require('cors');
const users = require('./user/routers/users.router');
const {PROTOCOL, PORT_DEV } = require('../constants');
const errorRequestHandler = require('./core/middleware/handler/error-request.handler');
const app = express();

// middleware de log
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
})

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(users);

app.use(errorRequestHandler)

const server = http.createServer(app);


server.listen(PORT_DEV, () => {
    console.log(`Server running on ${PROTOCOL}://localhost:${PORT_DEV}`)
})



