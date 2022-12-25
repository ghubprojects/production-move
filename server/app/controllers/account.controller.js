/* const { v4: uuidv4 } = require('uuid'); */
const db = require('../models');
const Account = db.accounts;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Body can not be empty!' + `${req}` });
        return;
    }

    const account = { ...req.body };

    Account.create(account)
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err.message }));
};

exports.find = (req, res) => {
    const queries = req.query;
    const conditions = {};
    for (let key in queries)
        conditions[key] = queries[key] ? { [Op.like]: `${queries[key]}` } : null;

    Account.findAll({ where: conditions })
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
    const id = req.params.id;

    Account.update(req.body, { where: { id } })
        .then((num) =>
            num == 1
                ? res.send({ message: 'Account was updated successfully.' })
                : res.send({
                      message: `Cannot update Account with id=${id}. Maybe Account was not found or req.body is empty!`,
                  }),
        )
        .catch((err) =>
            res.status(500).send({
                message: 'Error updating Account with id=' + id,
            }),
        );
};

exports.delete = (req, res) => {
    const queries = req.query;
    console.log(queries);
    const conditions = {};
    for (let key in queries)
        conditions[key] = queries[key] ? { [Op.like]: `${queries[key]}` } : null;
    console.log(conditions);

    Account.destroy({ where: conditions })
        .then((num) => res.send({ message: 'Accounts was deleted successfully!' }))
        .catch((err) => res.status(500).send({ message: err.message }));
};

exports.deleteAll = (req, res) => {
    Account.destroy({ where: {}, truncate: false })
        .then((nums) => res.send({ message: `${nums} accounts were deleted successfully!` }))
        .catch((err) => res.status(500).send({ message: err.message }));
};
