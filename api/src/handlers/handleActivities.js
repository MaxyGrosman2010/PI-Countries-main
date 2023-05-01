require('dotenv').config();
const {STATUS_OK, STATUS_ERROR, SERVER_ERROR} = process.env;
const {createActivity, getActivities, findCountry, 
    linkActivityToCountry} = require('../controllers/index');

async function postActivity(req, res){
    try{
        const {name, difficulty, duration, season, countryID} = req.body;
        
        if(!name || !difficulty || !duration || !season || !countryID) 
            return res.status(Number(STATUS_ERROR)).json({error: "The require information is missing"});
        
        const activity = await createActivity(name, difficulty, duration, season);

        let country = await findCountry(countryID);

        await linkActivityToCountry(country, activity);
        
        if(!activity) return res.status(Number(SERVER_ERROR)).json({
            error: "There was an error while creating the activity"});
        
        return res.status(Number(STATUS_OK)).json(activity);
    }catch(error){res.status(Number(SERVER_ERROR)).json({error: error.message})};
};

async function getActivity(req, res){
    try{
        const activities = await getActivities();

        if(!activities) return res.status(Number(STATUS_ERROR)).json({
            error: "There was an error trying to get the activities"});

        return res.status(Number(STATUS_OK)).json(activities);
    }catch(error){res.status(Number(SERVER_ERROR)).json({error: error.message})};
};

module.exports = {
    postActivity,
    getActivity
};