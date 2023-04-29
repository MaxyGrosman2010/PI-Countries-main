import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavigateBar(){
    return (
        <div>

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