import {Link} from "react-router-dom";
import style from './LandingPage.module.css';

export default function LandingPage(){

    return (
        <div className={style.contains}>

            <Link to="/home">
                <button className={style.button}>Home Page here</button>
            </Link>
            
        </div>
    );
};