const {Country} = require('../db');

const findCountry = async(id) => await Country.findByPk(id);

module.exports = findCountry;