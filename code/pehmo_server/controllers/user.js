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
