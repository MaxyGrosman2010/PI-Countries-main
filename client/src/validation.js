export default function validation(inputs) {
    let error = {};
    let regexName = /^[a-zA-Z]{4,}$/g;

    if(inputs.duration) 
        if(inputs.duration < 0) error.duration = "The time can't be negative or 0";
        else if(inputs.duration > 24) error.duration = "A tourist activity can not last more then 24 hours";
    
    if(inputs.name) 
        if(inputs.name === "") error.name = "A tourist activity must have a name";
        else if(regexName.test(inputs.name));

    return error;
};