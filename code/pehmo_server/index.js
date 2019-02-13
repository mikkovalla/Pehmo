const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3002

const userRouter = require('./controllers/user')
const foodRouter = require('./controllers/food')
const recipesRouter = require('./controllers/recipes')

app.use(cors())
app.use(bodyParser.json())
app.use('/api/user', userRouter)
app.use('/api/food', foodRouter)
app.use('/api/recipes', recipesRouter)

const server = http.createServer(app)

server.listen(port, () => console.log(`Pehmo Node server running on port ${port}`))


