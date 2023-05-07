import {useDispatch, useSelector} from "react-redux";
import {orderCountriesId, orderCountriesPopulation, 
    filterCountriesContinent, filterCountriesActivity, resetCountries, 
    reloadPaginate} from "../../../redux/actions/actions";
import style from './FilterOrderBar.module.css';

export default function FilterOrderBar(){

    const dispatch = useDispatch();
    const {allContinents, allActivities} = useSelector(state => state);

    const handleChange = (event) =>{

        if(event.target.name === "id") {

            dispatch(orderCountriesId(event.target.value));
            event.target.value = "sort";

        } else if(event.target.name === "population") {

            dispatch(orderCountriesPopulation(event.target.value));
            event.target.value = "sort";

        }else if(event.target.name === "continent") {

            dispatch(filterCountriesContinent(event.target.value));
            event.target.value = "filter";

        }else if(event.target.name === "activity") {

            dispatch(filterCountriesActivity(event.target.value));
            event.target.value = "filter";

        };

        return dispatch(reloadPaginate());
    };

    const resetFilters = () => {
        dispatch(resetCountries());
        return dispatch(reloadPaginate());
    };

    return (
        <div className={style.contains} >

            <div className={style.options} >
                <label >Sort Alphabetic:</label>
                <select name="id" onChange={handleChange} >
                    <option disabled selected value="sort" >Sort by:</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>

            </div>

            <div className={style.options} >
                <label >Sort Population:</label>
                <select name="population" onChange={handleChange} >
                    <option disabled selected value="sort" >Sort by:</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>
            </div>

            <div className={style.options} >
                <label >Filter Continent:</label>
                <select name="continent" onChange={handleChange} >
                    <option disabled selected value="filter">Select Continent</option>
                    {allContinents && allContinents.map(continent => 
                        <option key={continent} value={continent}>{continent}</option>)}
                </select>

            </div>

            <div className={style.options} >
                <label>Filter Activity:</label>
                <select name="activity" onChange={handleChange} >
                    <option disabled selected value="filter">Select Continent</option>
                    {allActivities && allActivities.map(activity => 
                        <option key={activity.id} value={activity.name} >{activity.name}</option>)}
                </select>
            </div>

            <button onClick={() => resetFilters()}>All</button>

        </div>
    );
};