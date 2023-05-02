import {useState} from "react";
import {useDispatch} from 'react-redux';
import {searchCountries} from '../../redux/actions/actions'


export default function SearchBar(){

    let [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => setName(event.target.value);

    return (
        <div>
            <input type="search" onChange={handleChange} />
            <button onClick={() => dispatch(searchCountries(name))} >Search</button>
        </div>
    );
};