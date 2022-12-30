module.exports = (app) => {
    const productParams = require('../controllers/productParams.controller.js');

    var router = require('express').Router();

    // Create a new ProductParams
    router.post('/', productParams.create);

    // Retrieve all ProductParams
    router.get('/', productParams.find);

    // Update a ProductParams with id
    router.put('/:id', productParams.update);

    // Delete a ProductParams with id
    router.delete('/', productParams.delete);

    // Delete all ProductParams
    router.delete('/', productParams.deleteAll);

    app.use('/api/product-params', router);
};
