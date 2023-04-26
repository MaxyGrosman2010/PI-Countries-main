require('dotenv').config();
const {STATUS_OK, STATUS_ERROR, SERVER_ERROR} = process.env;
const {Country} = require('../db');
const {findCountries} = require('../controllers/index');

async function getCountryQuery(req, res){
    try{
        if(!req.query){
            const countries = await Country.findAll();
            res.status(STATUS_OK).json(countries);
        }else{
            const {name} = req.query;
            if(!name) return res.status(STATUS_ERROR).json({error: "The require information is missing"});
            const countries = await findCountries(name);
            return res.status(STATUS_OK).json(countries);
        };
    }catch(error){res.status(SERVER_ERROR).json({error: error.message})};
};

function getCountryByID(req, res){
    try{
        if(!req.params) return res.status(STATUS_ERROR).json({error: "The require information is missing"});
        const {id} = req.params;

    }catch(error){res.status(SERVER_ERROR)};
};

module.exports = {getCountryQuery, getCountryByID};