const createCountries = require('./createCountries');
const findCountries = require('./findCountries');
const findCountry = require('./findCountry');
const createActivity = require('./createActivity');
const getActivities = require('./findAllActivities');
const findAllCountries = require('./findAllCountries');
const linkActivityToCountry = require('./linkActivityToCountry');
const obtainCountriesActivities = require('./obtainCountriesActivities');

module.exports = {
    createCountries,
    findCountries,
    findCountry,
    findAllCountries,
    createActivity,
    getActivities,
    linkActivityToCountry,
    obtainCountriesActivities
};