const Sequelize = require('sequelize');
const sequelize = new Sequelize("expensetracker", "root", "7999Ch@ndu", {
  dialect: "mysql",
  host: "localhost",

});

module.exports = sequelize;