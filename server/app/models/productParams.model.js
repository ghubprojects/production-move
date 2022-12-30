module.exports = (sequelize, Sequelize) => {
    const ProductParams = sequelize.define(
        'productParams',
        {
            productCode: {
                type: Sequelize.STRING,
                unique: true,
            },
            productName: {
                type: Sequelize.STRING,
            },
            screen: {
                type: Sequelize.STRING,
            },
            CPU: {
                type: Sequelize.STRING,
            },
            VGA: {
                type: Sequelize.STRING,
            },
            RAM: {
                type: Sequelize.STRING,
            },
            SSD: {
                type: Sequelize.STRING,
            },
            weight: {
                type: Sequelize.STRING,
            },
        },
        { timestamps: false },
    );

    return ProductParams;
};
