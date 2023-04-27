const {Country} = require('../db');

const linkActivityToCountry = async(country, activity) => await country.addActivity(activity);

module.exports = linkActivityToCountry;