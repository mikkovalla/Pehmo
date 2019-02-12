const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3002

const userRouter = require('./controllers/user')

app.use(cors())
app.use(bodyParser.json())
app.use('/api/user', userRouter)

const server = http.createServer(app)

server.listen(port, () => console.log(`Pehmo Node server running on port ${port}`))


