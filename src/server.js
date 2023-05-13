const express = require('express');
const http = require('http');
const users = require('./routers/users');
const { PORT } = require('./constants');
const errorRequestHandler = require('./middleware/handler/error-request.handler');
const app = express();

// middleware de log
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use(express.json());
app.use(users)
app.use(errorRequestHandler)

const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})



