require('dotenv').config();
const {STATUS_OK, STATUS_ERROR, SERVER_ERROR} = process.env;
const {findCountries, findCountry, findAllCountries, 
    obtainCountriesActivities} = require('../controllers/index');

async function getAllCountries(req, res){
    try{
        //Finds all countries
        const countries = await findAllCountries();

        //If there is an error and doesn't find then
        if(!countries) return res.status(STATUS_ERROR).json({error: "Countries weren't found"});

        //Setting up right structure
        let pass = countries.map(country => {
            return {id: country.id ,flag: country.flag, name: country.name, continent: country.continent}
        });
        //Sends countries with proper structure
        return res.status(STATUS_OK).json(pass);
    }catch(error){res.status(SERVER_ERROR).json({error: error.message})};
};

async function getCountryQuery(req, res){
    try{
        const {name} = req.query;
        //Looks if name has value
        if(!name) return res.status(STATUS_ERROR).json({error: "The require information is missing"});
        
        //Finds the countries name and returns it
        const countries = await findCountries(name);
        
        return res.status(STATUS_OK).json(countries);

    }catch(error){res.status(SERVER_ERROR).json({error: error.message})};
};

async function getCountryByID(req, res){
    try{        
        //Obtains the require information
        const {idPais} = req.params;

        //Looks if the params was send correctly
        if(!idPais) return res.status(STATUS_ERROR).json({error: "The require information is missing"});

        //Searches for the desire country
        const country = await obtainCountriesActivities(idPais);

        return res.status(STATUS_OK).json(country);

    }catch(error){res.status(SERVER_ERROR).json({error: error.message})};
};

module.exports = {getAllCountries, getCountryQuery, getCountryByID};