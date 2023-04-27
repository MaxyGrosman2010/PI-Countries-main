require('dotenv').config();
const {STATUS_OK, STATUS_ERROR, SERVER_ERROR} = process.env;
const {Country} = require('../db');
const {findCountries} = require('../controllers/index');

async function getAllCountries(req, res){
    try{
        //Finds all countries
        const countries = await Country.findAll();

        //If there is an error and doesn't find then
        if(!countries) return res.status(STATUS_ERROR).json({error: "Error countries weren't found"});

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
        if(!req.params) return res.status(STATUS_ERROR).json({error: "The require information is missing"});
        const {id} = req.params;
        if(!id);
    }catch(error){res.status(SERVER_ERROR).json({error: error.message})};
};

module.exports = {getAllCountries, getCountryQuery, getCountryByID};