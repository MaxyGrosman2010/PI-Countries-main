import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navigate.module.css";

export default function NavigateBar(){
    return (
        <div className={style.contains} >

            <div>
                <Link to="/home">
                    <button>Home</button>
                </Link>
            </div>

            <SearchBar />

            <div>
                <Link to="/Activity">
                    <button>Create Activity</button>
                </Link>
            </div>

        </div>
    );
};