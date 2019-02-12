const userRouter = require('express').Router()

userRouter.get('/login', async (request, response) => {
  const user = {
    id: 1,
    username: "PalomiesSami",
    firstName: "Sami",
    lastName: "Palomies",
    email: "sami@pontypantynpalokunta.com",
    password: "SaminTosiKovaPassu",
    phone: 609110382
  }
  response.status(200).json({
    message: `Welcome ${user.firstName + user.lastName}`,
    id: user.id,
    username: user.username
  })
})

userRouter.get('/location', async (request, response) => {
  const lat = 60.223372
  const lon = 24.865467
  response.status(200).json({
    message: "User located!",
    latitude: lat,
    longitude: lon
  })
})

module.exports = userRouter