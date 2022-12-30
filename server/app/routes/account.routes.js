module.exports = (app) => {
    const accounts = require('../controllers/account.controller.js');

    var router = require('express').Router();

    // Create a new Account
    router.post('/', accounts.create);

    // Retrieve all Accounts
    router.get('/', accounts.find);

    // Update a Account with id
    router.put('/:id', accounts.update);

    // Delete a Account with id
    router.delete('/', accounts.delete);

    // Delete all Accounts
    router.delete('/', accounts.deleteAll);

    app.use('/api/accounts', router);
};
