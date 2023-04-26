const {Country} = require('../db');

const createCountries = async(array) =>
await Country.bulkCreate(array);

module.exports = createCountries;