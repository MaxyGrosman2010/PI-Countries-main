const {Country} = require('../db');
const {Op} = require('sequelize');

const findCountries = async(name) => Country.findAll({
    where: {name: {[Op.substring]: name}}
});

module.exports = findCountries;