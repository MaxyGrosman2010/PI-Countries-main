const {Activity} = require('../db');
const findCountry = require('./findCountry');

const createActivity = async(name, difficulty, duration, season) => await Activity.create({
    name: name, difficulty: difficulty, duration: duration, season: season});

module.exports = createActivity;