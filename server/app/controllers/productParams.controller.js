/* const { v4: uuidv4 } = require('uuid'); */
const db = require('../models');
const ProductParams = db.productParams;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('i am in server. req: ', req.body, req.query);
    if (!req.body) {
        res.status(400).send({ message: 'Body can not be empty!' + `${req}` });
        return;
    }

    const productParams = { ...req.body };
    console.log(productParams);
    ProductParams.create(productParams)
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((err) => res.status(500).send({ message: err.message }));
};

exports.find = (req, res) => {
    const queries = req.query;
    const conditions = {};
    for (let key in queries)
        conditions[key] = queries[key] ? { [Op.like]: `${queries[key]}` } : null;

    ProductParams.findAll({ where: conditions })
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
    console.log('i am lost in updating');
    const id = req.params.id;

    ProductParams.update(req.body, { where: { id } })
        .then((num) =>
            num == 1
                ? res.send({ message: 'ProductParams was updated successfully.' })
                : res.send({
                      message: `Cannot update ProductParams with id=${id}. Maybe ProductParams was not found or req.body is empty!`,
                  }),
        )
        .catch((err) =>
            res.status(500).send({
                message: 'Error updating ProductParams with id=' + id,
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

    ProductParams.destroy({ where: conditions })
        .then((num) => res.send({ message: 'ProductParams was deleted successfully!' }))
        .catch((err) => res.status(500).send({ message: err.message }));
};

exports.deleteAll = (req, res) => {
    ProductParams.destroy({ where: {}, truncate: false })
        .then((nums) => res.send({ message: `${nums} ProductParams were deleted successfully!` }))
        .catch((err) => res.status(500).send({ message: err.message }));
};
