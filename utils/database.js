const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB, process.env.DB_LOGIN, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'pg'
})

module.exports = sequelize