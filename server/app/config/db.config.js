module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'MyAl1705!!!',
    DB: 'my-express-app',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};