import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {resetCountries, reloadPaginate} from "../../redux/actions/actions";
import Cards from "../Cards/Cards";
import FilterOrderBar from "../Cards/FilterOrderBar/FilterOrderBar";
import style from './HomePage.module.css';

export default function HomePage(){

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(resetCountries());
        dispatch(reloadPaginate());
    }, []);

    return (
        <div className={style.contains} >

            <div className={style.filter} >
                <FilterOrderBar />
            </div>

            <div className={style.cards}>
                <Cards />
            </div>

        </div>
    )
};