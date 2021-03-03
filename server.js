const express = require('express')
const app = express()
const port = 3000
const ApiContoller = require('./controllers/ApiController');

const apiController = new ApiContoller();

app.get('/', (req, res) => {
    apiController.sayHello(req, res);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})