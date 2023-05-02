import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {createActivity} from "../../redux/actions/actions";
import validation from "../../validation";

export default function FormPage(){

    const dispatch = useDispatch();
    const {allCountries} = useSelector(state => state);
    const [error, setError] = useState([]);
    const [activity, setActivity] = useState({
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        countryID: ""
    });

    const handleChange = (event) => {
        setError(validation({
            ...activity, 
            [event.target.name]: event.target.value
        }));
        setActivity({
            ...activity, 
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(Object.values(error).length === 0){
            dispatch(createActivity(activity));
            setActivity({
                name: "", 
                difficulty: 0, 
                duration: 0, 
                season: "", 
                countryID: ""
            });
            setError({});
        }else window.alert("This isn't an tourist activity");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >

                <h2>Create an Activity</h2>

                <label >Name:</label>
                <input name="name" value={activity.name} type="text" onChange={handleChange} />

                <label >Difficulty:</label>
                <select name="difficulty" value={activity.difficulty} onChange={handleChange} >
                    <option value="difficulty" >Select difficulty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label >Duration</label>
                <input name="duration" value={activity.duration} type="number" onChange={handleChange} />

                <label >Season</label>
                <select name="season" value={activity.season} onChange={handleChange} >
                    <option value="season" >Select season</option>
                    <option value="Verano">Summer</option>
                    <option value="Otoño">Autumn</option>
                    <option value="Invierno">Winter</option>
                    <option value="Primavera">Spring</option>
                </select>

                <label >Country/Countries</label>
                <select name="countryID" value={activity.countryID} onChange={handleChange} >
                    <option value="country" >Select Country</option>
                    {allCountries && allCountries.map(country => 
                        <option value={country.id}>{country.name}</option>)}
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};