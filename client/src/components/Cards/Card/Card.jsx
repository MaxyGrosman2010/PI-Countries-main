import {Link} from "react-router-dom";

export default function Card({id, flag, name, continent}){

    return (
        <div key={id} >

            <Link to={`/Detail/${id}`}>
                <img src={flag} alt={name} />

                <h2>Country: {name}</h2>

                <h2>Continent: {continent}</h2>
            </Link>
        </div>
    );

};