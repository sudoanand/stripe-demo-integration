const StripeHelper = require('../helpers/StripeHelper');

class ApiController{

    constructor(){
        this.stripe = new StripeHelper();
    }

    sayHello(req, res){
        res.send("Hello there!");
    }


    async createCustomer(req, res){
        const payload = req.body;

        //TODO: validate payload    
        const customer = await this.stripe.createCustomer(payload.email, payload.name);
        res.send({
            success: true,
            data: customer
        });    
    }
}

module.exports = ApiController