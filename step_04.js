
//  Week 08 Express: More Complex Routing
//  Step 04

//  Import the express library
const express = require('express')
var bodyParser = require('body-parser')

//  Create an instance of express
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/form.html')
})

app.post("/", (req, res) => {
  let type = req.body.type
  let number = req.body.number
  let requestURL = "https://swapi.co/api/" + type + "/" + number + "/"
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
