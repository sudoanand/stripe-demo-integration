const stripe = require('stripe')('sk_test_kspyKbtXHzMRhD6xctIES6tz00BkpDezaz');

class StripeHelper {

    createCustomer(email, name) {

        return new Promise((resolve, reject) => {
            stripe.customers.create({
                email: email,
                name: name,
                description: 'Demo customer created via API',
            })
                .then(customer => resolve(customer))
                .catch(error => {reject(error)});
        });

    }
}

module.exports = StripeHelper;