const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurants = require('./restaurant.json').results

app.engine('handlebars' , exphbs({defaultLayout:'main'}))
app.set('view engine' , 'handlebars')
app.use(express.static('public'))

app.get('/' , (req , res) => {
  res.render('allRestaurants' , { restaurants : restaurants })
})
app.get('/restaurants/:id' , (req , res) => {
  const showRestaurant = restaurants.find(item => {
    return item.id == req.params.id
  })
  res.render('showRestaurant' , { restaurant :showRestaurant})
})
app.get( '/search' , (req , res) => {
  const filterRestaurants = restaurants.filter( item => {
    return item.name.toLowerCase().includes(req.query.keyword.toLowerCase()) || item.category.toLowerCase().includes(req.query.keyword.toLowerCase())
  })
  if(filterRestaurants.length >= 1){
    res.render('allRestaurants' , {restaurants : filterRestaurants , keyword : req.query.keyword})
    return 
  }
  let discussRestaurants = []
  let copeRestaurants = Array.from(restaurants)
  for(let item = 1 ; item <= 3 ; item ++){
    let index = Math.floor(Math.random()*copeRestaurants.length)
    discussRestaurants.push(copeRestaurants[index])
    copeRestaurants.splice(index , 1)
  }
  res.render('noFilterRestaurants' , {restaurants : discussRestaurants , keyword : req.query.keyword} )
})

app.listen( port , () => {
  console.log('Restaurants is online')
})