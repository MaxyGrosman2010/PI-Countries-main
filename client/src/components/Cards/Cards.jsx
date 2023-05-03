import {useEffect} from "react";
import {useSelector} from "react-redux";
import Card from "./Card/Card";
import Paginate from "./Paginate/Paginate";
import FilterOrderBar from "./FilterOrderBar/FilterOrderBar";

export default function Cards(){

    const {showCountries, numPage} = useSelector(state => state);
    
    useEffect( () => {}, [showCountries]);

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