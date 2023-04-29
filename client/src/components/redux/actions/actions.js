import axios from 'axios';
import { GET_ALL_COUNTRIES, NEXT_PAGE, PREV_PAGE} from "./types";

const endPoint = "http://localhost:3001";

export const getAllCountries = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios(`${endPoint}/countries/`);
            if(data) return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            })
        }catch(error){ return {error: error.message}}
    };
};

export const nextPage = () => {
    return {type: NEXT_PAGE};
};

export const prevPage = () => {
    return {type: PREV_PAGE};
};