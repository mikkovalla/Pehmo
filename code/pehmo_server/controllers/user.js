const userRouter = require('express').Router()

userRouter.get('/login', async (request, response) => {
  const user = {
    id: 1007,
    username: "PalomiesSami",
    firstName: "Sami",
    lastName: "Palomies",
    email: "sami@pontypantynpalokunta.com",
    password: "SaminTosiKovaPassu",
    phone: 609110382
  }
  response.json(user)
})

userRouter.get('/location', async (request, response) => {
  const userIp = request.connection.remoteAddress
  console.log(userIp)
  response.status(200).json({
    message: "all good here!"
  })
})

module.exports = userRouter
