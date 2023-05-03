import {useDispatch, useSelector} from "react-redux";
import {orderCountriesId, orderCountriesPopulation, 
    filterCountriesContinent} from "../../../redux/actions/actions";
import { all } from "axios";

export default function FilterOrderBar(){

    const dispatch = useDispatch();
    const {allContinents} = useSelector(state => state);

    console.log(allContinents);

    const handleOrderID = (event) => dispatch(orderCountriesId(event.target.value));
    const handleChangePopulation = (event) => dispatch(orderCountriesPopulation(event.target.value));
    const handleFilterContienent = (event) => dispatch(filterCountriesContinent(event.target.value));

    return (
        <div>

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
                        <option value={continent}>{continent}</option>)}
                </select>

            </div>

            <div>
                <label >Filter by Activity:</label>
                
            </div>

        </div>
    );
};