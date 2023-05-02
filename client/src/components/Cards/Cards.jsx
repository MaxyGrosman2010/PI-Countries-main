import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {resetCountries} from '../../redux/actions/actions';
import Card from "./Card/Card";
import Paginate from "./Paginate/Paginate";
import FilterOrderBar from "./FilterOrderBar/FilterOrderBar";

export default function Cards(){

    const dispatch = useDispatch();
    const {showCountries, numPage} = useSelector(state => state);

    useEffect( () => {
        dispatch(resetCountries());
    }, []);

    let from = (numPage - 1) * 10;
    let to = numPage * 10;
    let viewCountries = showCountries.slice(from, to);

    return (
        <div>
            <FilterOrderBar />

            {
                viewCountries && viewCountries.map(country => <Card 
                key={country.id}
                id={country.id}
                flag={country.flag}
                name={country.name}
                continent={country.continent}
            />)
            }

            <Paginate />
        </div>
    );
};