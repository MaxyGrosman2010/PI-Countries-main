import {Link} from "react-router-dom";
import style from "./Card.module.css";

export default function Card({id, flag, name, continent}){

    return (
        <div key={id} className={style.contains} >

            <Link className={style.Link} to={`/Detail/${id}`}>
                <img src={flag} alt={name} />

                <div className={style.country}>
                    Country: {name}
                </div>

                <div>Continent: {continent}</div>
            </Link>
        </div>
    );

};