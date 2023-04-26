require('dotenv').config();
const {STATUS_OK, STATUS_ERROR, SERVER_ERROR} = process.env;
const {createActivity} = require('../controllers/index');

async function postActivity(req, res){
    try{
        const {name, difficulty, duration, season, countryID} = req.body;
        //Checks that require information exist
        if(!name || !difficulty || !duration || !season || !countryID) return res.status(STATUS_ERROR).json({error: "The require information is missing"});
        //Creates the activity
        const activity = await createActivity(name, difficulty, duration, season, countryID);
        //Checks that there wasn't a problem while creating the activity
        if(!activity) return res.status(SERVER_ERROR).json({error: "There was an error while creating the activity"});
        
        return res.status(STATUS_OK).json(activity);
    }catch(error){res.status(SERVER_ERROR).json({error: error.message})};
};

async function getActivity(req, res){
    try{

    }catch(error){res.status(SERVER_ERROR).json({error: error.message})};
};

module.exports = {
    postActivity,
    getActivity
};