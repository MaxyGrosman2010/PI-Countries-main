import {useDispatch, useSelector} from "react-redux";
import {orderCountriesId, orderCountriesPopulation, 
    filterCountriesContinent, filterCountriesActivity, resetCountries, 
    reloadPaginate} from "../../../redux/actions/actions";
import style from './FilterOrderBar.module.css';

export default function FilterOrderBar(){

    const dispatch = useDispatch();
    const {allContinents, allActivities} = useSelector(state => state);

    const handleOrderID = (event) => dispatch(orderCountriesId(event.target.value));
    const handleChangePopulation = (event) => dispatch(orderCountriesPopulation(event.target.value));
    
    const handleFilterContienent = (event) => {
        if(event.target.value === "All") dispatch(resetCountries());
        else dispatch(filterCountriesContinent(event.target.value));
        dispatch(reloadPaginate());
    };

    const handleFilterActivity = (event) => {
        if(event.target.value === "All") dispatch(resetCountries());
        else dispatch(filterCountriesActivity(event.target.value));
        dispatch(reloadPaginate());
    };

    return (
        <div className={style.contains} >

            <div className={style.options} >
                <label >Sort Alphabetic:</label>
                <select name="sortAlphabetic" onChange={handleOrderID} >
                    <option disabled selected value="sort" >Sort by:</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>

            </div>

            <div className={style.options} >
                <label >Sort Population:</label>
                <select name="sortPopulation" onChange={handleChangePopulation} >
                    <option disabled selected value="sort" >Sort by:</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>
            </div>

            <div className={style.options} >
                <label >Filter Continent:</label>
                <select name="filterContinent" onChange={handleFilterContienent} >
                    <option disabled selected value="filter">Select Continent</option>
                    <option value="All">All</option>
                    {allContinents && allContinents.map(continent => 
                        <option key={continent} value={continent}>{continent}</option>)}
                </select>

            </div>

            <div className={style.options} >
                <label>Filter Activity:</label>
                <select name="filterActivity" onChange={handleFilterActivity} >
                    <option disabled selected value="filter">Select Continent</option>
                    <option value="All">All</option>
                    {allActivities && allActivities.map(activity => 
                        <option key={activity.id} value={activity.name} >{activity.name}</option>)}
                </select>
            </div>

        </div>
    );
};