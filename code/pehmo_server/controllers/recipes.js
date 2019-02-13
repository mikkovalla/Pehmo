require('dotenv').config()
const recipesRouter = require('express').Router()
const axios = require('axios')
const {
  Translate
} = require('@google-cloud/translate')

const projectId = process.env.GOOGLE_PROJECT_ID;
const api_key = process.env.API_KEY
const url = `https://www.food2fork.com/api/search?key=${api_key}`
const url2 = `https://www.food2fork.com/api/get?key=${api_key}`

recipesRouter.get('/recipes/:ingredient', async (request, response) => {
  const translate = new Translate({
    projectId: projectId,
  })
  const text = request.params.ingredient
  const target = 'en'
  let translatedName = ''

  translate
    .translate(text, target)
    .then(results => {
      const translation = results[0];

      console.log(`Text: ${text}`);
      console.log(`Translation: ${translation}`);
      translatedName = translation
    })
    .catch(err => {
      console.error('ERROR:', err);
    });

  try {
    const recipes = await axios.get(url + '&q=' + translatedName)
    //console.log(recipes.data)
    response.status(200).json({
      recipes: recipes.data
    })
  } catch (error) {
    console.log(error)
  }
})

recipesRouter.get('/recipes/ingredients/:recipeId', async (request, response) => {

  try {
    const ing = await axios.get(url2 + '&rId=' + request.params.recipeId)
    //console.log(ingredients.data)
    const ingredients = ing.data.recipe.ingredients.map(i => i)
    response.status(200).json({
      ingredients
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = recipesRouter