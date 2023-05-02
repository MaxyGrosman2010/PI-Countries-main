import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {countryDetail, resetDetail} from '../../redux/actions/actions';

export default function DetailPage(){

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countryDetail(id));

        return dispatch(resetDetail());
    }, [id]);

    const {countryDetails} = useSelector(state => state);
    console.log(countryDetails);
    const {activities} = countryDetails;

    return(
        <div>

            <img src={countryDetails.flag} alt="flag" />
            <h2>{countryDetails.name}</h2>
            <h2>Contienet: {countryDetails.continent}</h2>
            <h2>Capital: {countryDetails.capital}</h2>
            <h2>Sub Region: {countryDetails.sub_region}</h2>
            <h2>Area size: {countryDetails.area}</h2>
            <h2>Population: {countryDetails.population}</h2>
            <h2>Activities: {Array.isArray(activities) && activities.length !== 0 ? 
            activities.map((activity, i) => 
                <div>

                    <h3>{i}</h3>
                    <h3>Name: {activity.name}</h3>
                    <h3>Difficulty: {activity.difficulty}</h3>
                    <h3>Duration: {activity.duration}</h3>
                    <h3>Season: {activity.season}</h3>

                </div>
            ) : "There are no activities"}</h2>

        </div>
    )
};