const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const ApiContoller = require('./controllers/ApiController');

const apiController = new ApiContoller();

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    apiController.sayHello(req, res);
});

app.post('/customers', async (req, res) => {
    try{
       
    await apiController.createCustomer(req, res);
        
    }catch(e){
        //TODO: use a logger here
        console.error(e);
        res.status(500).send("Internal server error");
    }
});


app.listen(port, () => {
  console.log(`Stripe demo app listening at http://localhost:${port}`)
})