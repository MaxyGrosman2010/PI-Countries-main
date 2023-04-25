require('dotenv').config();
const {STATUS_OK, STATUS_ERROR, SERVER_ERROR} = process.env;
const createUser = require('../controllers/createCountries');

//Adds a country to the DB
async function postCountry(req, res){
    try{
        res.status(STATUS_OK).json({message: 'Enters here'});
    }catch(error){res.status(SERVER_ERROR).json({error: error.message})};
};

module.exports = {
    postCountry
};