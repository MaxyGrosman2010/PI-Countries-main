const axios = require('axios');
const {createCountries} = require('../controllers/index');

module.exports = async () => {
    //Obtains info from API
    const {data} = await axios(`https://restcountries.com/v3/all`);
    //Creating array for bulkCreate.
    const correctCharacters = data.map(character => {
        //Destructuring the different elements
        const {name, cca3, capital, subregion, area, population, continents, flags} = character;
        const {common} = name;
        //5 countries don't have capitals, verification for those cases, and then returning the results
        if(!capital) return {id: cca3, name: common, flag: flags[1], continent: continents[0], capital: ["It doesn't have"], sub_region: subregion, area, population};
        return {id: cca3, name: common, flag: flags[1], continent: continents[0], capital, sub_region: subregion, area, population};
    });
    //Executing function that bulkCreates
    await createCountries(correctCharacters);
    return 1;
};