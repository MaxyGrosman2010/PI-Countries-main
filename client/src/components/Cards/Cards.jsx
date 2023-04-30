import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllCountries} from "../../redux/actions/actions";
import Card from "./Card/Card";
import Paginate from "./Paginate/Paginate";
import FilterOrderBar from "./FilterOrderBar/FilterOrderBar";

export default function Cards(){

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllCountries());
    }, []);

    const {allCountries, numPage} = useSelector(state => state);
    let cantPages = Math.floor(allCountries.length / 10);
    let from = (numPage - 1) * 10;
    let to = numPage * 10;
    let viewCountries = allCountries.slice(from, to);

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

            <Paginate cantPages={cantPages} />
        </div>
    );
};