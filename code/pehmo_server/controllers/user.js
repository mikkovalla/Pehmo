const userRouter = require('express').Router()
const axios = require('axios')

const url = 'http://localhost:3004/users/'

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
    message: `Welcome ${user.username}`,
    id: user.id,
    username: user.username
  })
})

userRouter.get('/:id', async (request, response) => {
  try {
    const res = await axios.get(url + request.params.id)
    response.status(200).json({
      user: res.data
    })
  } catch (error) {
    console.log(error)
  }
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

userRouter.get('/:id/neighbours', async (request, response) => {
  try {
    const res = await axios.get(url + request.params.id)
    const neighbourList = res.data.neighbours
    const naapurit = await axios.get(url + '?id=' + neighbourList[0] + '&id=' + neighbourList[1])
    const people = naapurit.data.map(i => i.username)

    response.status(200).json({
      neighbours: people
    })
  } catch (error) {
    console.log(error)
  }
})

userRouter.get('/:id/neighbours/:id2', async (request, response) => {
  try {
    console.log(request.params.id + " - " + request.params.id2)
    const res = await axios.get(url + request.params.id)
    const neighbourList = res.data.neighbours
    const naapuri = await axios.get(url + '?id=' + request.params.id2)
    response.status(200).json({
      neighbour: naapuri.data[0].username
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = userRouter