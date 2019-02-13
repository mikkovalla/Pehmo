const foodRouter = require('express').Router()
const axios = require('axios')

const url = 'http://localhost:3004/foods/'

foodRouter.post('/user/:id/food/add', async (request, response) => {
  const body = request.body

  if (body.name || body.ean || body.expiryDate || body.purchased) {
    return response.status(400).json({
      message: `You forgot to fill in all the details!`
    })
  }
  try {
    const foodToadd = await axios({
      method: 'post',
      url: url,
      data: {
        name: body.name,
        ean: body.ean,
        imageUrl: `https://foodieimages.s3.amazonaws.com/images/entries/180x220/${body.ean}_0.png`,
        expiryDate: body.expiryDate,
        purchased: body.purchased,
        userId: request.params.id
      },
      config: {
        headers: {
          'Content-Type': 'aplication/json'
        }
      }
    })
    response.status(200).json({
      message: `Food item ${body.name} added succesfully`
    })
  } catch (error) {
    console.log(error)
  }
})

foodRouter.get('/user/:id/food/list', async (request, response) => {
  try {
    const foods = await axios.get(url + '?userId=' + request.params.id)
    const listed = foods.data

    listed.sort(function (a, b) {
      let dateA = new Date(a.expiryDate)
      let dateB = new Date(b.expiryDate)
      return dateA - dateB
    })

    if (listed) {
      response.status(200).json({
        message: `Food items fetched succesfully`,
        listed
      })
    } else {
      response.status(200).json({
        message: "You haven't added any food items yet"
      })
    }

  } catch (error) {
    console.log(error)
  }
})

foodRouter.get('/user/:id/food/:id2', async (request, response) => {
  try {
    const foods = await axios.get(url + '?userId=' + request.params.id + '&id=' + request.params.id2)
    const listed = foods.data[0]

    if (listed) {
      response.status(200).json({
        message: `Food item fetched succesfully`,
        listed
      })
    } else {
      response.status(200).json({
        message: "You haven't added any food items yet"
      })
    }
  } catch (error) {
    console.log(error)
  }
})

foodRouter.delete('/user/:id/food/:id2', (request, response) => {
    axios.delete(url + '?id=' + request.params.id2 + '&userId=' + request.params.id).then(
      resp => {
        console.log(resp.data)
      }
    ).catch(error => {
      console.log(error)
    })
})

module.exports = foodRouter