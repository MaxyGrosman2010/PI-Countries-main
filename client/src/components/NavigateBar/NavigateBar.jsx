import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navigate.module.css";

export default function NavigateBar(){
    return (
        <div className={style.contains} >
            <div >
                <Link className={style.Link} to="/home">
                    <div>
                        Home
                    </div>
                </Link>
            </div>

            <SearchBar />

            <div >
                <Link className={style.Link} to="/activity">
                    <div>
                    Create Activity
                    </div>
                </Link>
            </div>
        </div>
    );
};