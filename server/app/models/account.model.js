module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define(
        'account',
        {
            name: {
                type: Sequelize.STRING,
            },
            role: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
        },
        { timestamps: false },
    );

    return Account;
};
