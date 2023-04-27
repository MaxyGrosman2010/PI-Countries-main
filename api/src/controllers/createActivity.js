const {Activity, Country} = require('../db');

const createActivity = async(name, difficulty, duration, season, countryID) =>{
    //Create the new Activity
    let newActivity = await Activity.create({name: name, difficulty: difficulty, duration: duration, 
        season: season});
    
    //Finds country where the activity will happen.
    let country = await Country.findByPk(countryID);
    
    //Connects the tables
    await country.addActivity(newActivity);
    
    //Returns the new
    return newActivity;
};

module.exports = createActivity;