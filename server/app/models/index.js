const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = { Sequelize, sequelize };

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize);
db.accounts = require('./account.model.js')(sequelize, Sequelize);
db.productParams = require('./productParams.model.js')(sequelize, Sequelize);
db.productInfos = require('./productInfos.model.js')(sequelize, Sequelize);

module.exports = db;
