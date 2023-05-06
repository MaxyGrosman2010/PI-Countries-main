import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {createActivity} from "../../redux/actions/actions";
import validation from "../../validation";
import style from './FormPage.module.css';

export default function FormPage(){

    const dispatch = useDispatch();
    const {allCountries} = useSelector(state => state);
    const [error, setError] = useState([]);
    const [activity, setActivity] = useState({
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        countryID: []
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

    const handleCountries = (event) => {
        setActivity({
            ...activity,
            countryID: [...activity.countryID, event.target.value]
            });
    };

    const closeCountry = (event) => {
        const newCountryID = activity.countryID.filter(country => country !== event.target.value);
        setActivity({
            ...activity,
            countryID: newCountryID
        })
    }

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
        <div className={style.contains} >
            <form onSubmit={handleSubmit} >

                <h2>Create an Activity</h2>

                <label >Name:</label>
                <input name="name" value={activity.name} type="text" onChange={handleChange} />
                {error.name ? <div>{error.name}</div>: null}

                <label >Difficulty:</label>
                <select name="difficulty" value={activity.difficulty} onChange={handleChange} >
                    <option disabled selected value={0} >Select difficulty</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>

                <label >Duration</label>
                <input name="duration" value={activity.duration} type="number" onChange={handleChange} />
                {error.duration ? <div>{error.duration}</div> : null}

                <label >Season</label>
                <select name="season" value={activity.season} onChange={handleChange} >
                    <option disabled selected value="" >Select season</option>
                    <option value="Verano">Summer</option>
                    <option value="Otoño">Autumn</option>
                    <option value="Invierno">Winter</option>
                    <option value="Primavera">Spring</option>
                </select>

                <label >Country/Countries</label>
                <select name="countryID" value={activity.countryID} onChange={handleCountries} >
                    <option disabled selected value="" >Select Country</option>
                    {allCountries && allCountries.map(country => 
                        <option key={country.id} value={country.id}>{country.name}</option>)}
                </select>
                
                <button type="submit">Submit</button>
            </form>
            
            <div>
                {activity.countryID.map(id => 
                    <div key={id} >
                        <button value={id} onClick={closeCountry}>X</button>
                        {id}
                    </div>)}
            </div>

        </div>
    );
};