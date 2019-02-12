const foodRouter = require('express').Router()
const axios = require('axios')

const url = 'http://localhost:3004/foods/'

foodRouter.get('/:id/food/add', async (request, response) => {
  const body = request.body
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
      message: `Food item ${body.name} added succesfully`,
    })
  } catch (error) {
    console.log(error)
  }
})


module.exports = foodRouter