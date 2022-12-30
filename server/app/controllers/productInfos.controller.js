/* const { v4: uuidv4 } = require('uuid'); */
const db = require('../models');
const ProductInfos = db.productInfos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log('i am in server. req: ', req.body, req.query);
    if (!req.body) {
        res.status(400).send({ message: 'Body can not be empty!' + `${req}` });
        return;
    }

    const productInfos = { ...req.body };
    console.log(productInfos);
    ProductInfos.create(productInfos)
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

    ProductInfos.findAll({ where: conditions })
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
    console.log('i am lost in updating');
    const id = req.Infos.id;

    ProductInfos.update(req.body, { where: { id } })
        .then((num) =>
            num == 1
                ? res.send({ message: 'ProductInfos was updated successfully.' })
                : res.send({
                      message: `Cannot update ProductInfos with id=${id}. Maybe ProductInfos was not found or req.body is empty!`,
                  }),
        )
        .catch((err) =>
            res.status(500).send({
                message: 'Error updating ProductInfos with id=' + id,
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

    ProductInfos.destroy({ where: conditions })
        .then((num) => res.send({ message: 'ProductInfos was deleted successfully!' }))
        .catch((err) => res.status(500).send({ message: err.message }));
};

exports.deleteAll = (req, res) => {
    ProductInfos.destroy({ where: {}, truncate: false })
        .then((nums) => res.send({ message: `${nums} ProductInfos were deleted successfully!` }))
        .catch((err) => res.status(500).send({ message: err.message }));
};
