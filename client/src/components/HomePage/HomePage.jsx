import Cards from "../Cards/Cards";
import FilterOrderBar from "../Cards/FilterOrderBar/FilterOrderBar";
import style from './HomePage.module.css';

export default function HomePage(){

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