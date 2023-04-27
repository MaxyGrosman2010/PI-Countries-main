const {Country} = require('../db');

const findAllCountries = async() => await Country.findAll();

module.exports = findAllCountries;