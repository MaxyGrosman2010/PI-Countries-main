import {useDispatch, useSelector} from "react-redux";
import {orderCountriesId, orderCountriesPopulation, 
    filterCountriesContinent, filterCountriesActivity} from "../../../redux/actions/actions";
import style from './FilterOrderBar.module.css';

export default function FilterOrderBar(){

    const dispatch = useDispatch();
    const {allContinents, allUniqueActivities} = useSelector(state => state);

    const handleOrderID = (event) => dispatch(orderCountriesId(event.target.value));
    const handleChangePopulation = (event) => dispatch(orderCountriesPopulation(event.target.value));
    const handleFilterContienent = (event) => dispatch(filterCountriesContinent(event.target.value));
    const handleFilterActivity = (event) => dispatch(filterCountriesActivity(event.target.value));

    return (
        <div className={style.contains} >

            <div>
                <label >Sort by Alphabetic Order:</label>
                <select name="sortAlphabetic" onChange={handleOrderID} >
                    <option value="sort" >Sort by:</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>

            </div>

            <div>
                <label >Sort by Population:</label>
                <select name="sortPopulation" onChange={handleChangePopulation} >
                    <option value="sort" >Sort by:</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>
            </div>

            <div>
                <label >Filter by Continent:</label>
                <select name="filterContinent" onChange={handleFilterContienent} >
                    <option value="All">All</option>
                    {allContinents && allContinents.map(continent => 
                        <option key={continent} value={continent}>{continent}</option>)}
                </select>

            </div>

            <div>
                <label >Filter by Activity:</label>
                <select name="filterActivity" onChange={handleFilterActivity} >
                    <option value="All">All</option>
                    {allUniqueActivities && allUniqueActivities.map(activity => 
                        <option key={activity} value={activity} >{activity}</option>)}
                </select>
            </div>

        </div>
    );
};