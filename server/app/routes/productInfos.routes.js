module.exports = (app) => {
    const productInfos = require('../controllers/productInfos.controller.js');

    var router = require('express').Router();

    // Create a new ProductInfos
    router.post('/', productInfos.create);

    // Retrieve all ProductInfos
    router.get('/', productInfos.find);

    // Update a ProductInfos with id
    router.put('/:id', productInfos.update);

    // Delete a ProductInfos with id
    router.delete('/', productInfos.delete);

    // Delete all ProductInfos
    router.delete('/', productInfos.deleteAll);

    app.use('/api/product-infos', router);
};
