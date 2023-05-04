import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navigate.module.css";

export default function NavigateBar(){
    return (
        <div className={style.contains} >

            <Link to="/home">
                <button>Home</button>
            </Link>

            <SearchBar />

            <Link to="/Activity">
                <button>Create Activity</button>
            </Link>

        </div>
    );
};