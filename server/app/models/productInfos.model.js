module.exports = (sequelize, Sequelize) => {
    const ProductInfos = sequelize.define(
        'productInfos',
        {
            productCode: {
                type: Sequelize.STRING,
                unique: true,
            },
            productName: {
                type: Sequelize.STRING,
            },
            leadTime: {
                type: Sequelize.STRING,
            },
            warrantyTime: {
                type: Sequelize.STRING,
            },
            error: {
                type: Sequelize.STRING,
            },
            brand: {
                type: Sequelize.STRING,
            },
            imageProduct: {
                type: Sequelize.STRING,
            },
        },
        { timestamps: false },
    );

    return ProductInfos;
};
