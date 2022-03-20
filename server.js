const express = require("express");
const app = express()
const port = process.env.PORT || 5000
const resturants = require('./api/restaurants.json')


const cors = require('cors')

// //enables cross origin requests
app.use(cors())

//Open up the connection to a port
app.use(express.json())

//allows us to understand urlencoded
app.use(express.urlencoded({extended:true}))

//Listen method on app
//Listen takes two arguments, the port variable and a callback function
app.listen(port, () => {
    console.log(`I am running on port ${port}`);
  });
  
  //GET Route
  app.get("/", (request,response) => {
      response.json(resturants);
    })

    //GET Route
  app.get("/api", (request,response) => {
    response.sendFile(__dirname + '/api/restaurants.json');
  })