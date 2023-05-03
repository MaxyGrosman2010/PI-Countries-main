import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {resetCountries} from "../../redux/actions/actions";
import Cards from "../Cards/Cards";

export default function HomePage(){

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(resetCountries());
    }, []);

    return (
        <div>

            <Cards />
            
        </div>
    )
};