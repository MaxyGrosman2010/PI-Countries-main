const {Country} = require('../db');

const createUser = async(id, name, flagImage, continent, capital, subRegion, area, population) =>
await Country.create({id, name, flagImage, continent, capital, subRegion, area, population});

module.exports = createUser;