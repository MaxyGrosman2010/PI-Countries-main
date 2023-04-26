const {Activity, Country} = require('../db');

const createActivity = async(name, difficulty, duration, season, countryID) => {
    //Create the new Activity
    let newActivity = await Activity.create({name: name, difficulty: difficulty, duration: duration, season: season});
    //Finds country where the activity will happen.
    let country = await Country.findByPK(countryID);
    //Connects the tables
    country.addActivity(newActivity);
    //Returns the newActivity
    return newActivity;
};

module.require = createActivity;