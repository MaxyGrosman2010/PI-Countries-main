import axios from 'axios';
import { GET_ALL_COUNTRIES, RESET_COUNTRIES, COUNTRY_DETAIL, RESET_DETAIL, 
    SEARCH_COUNTRIES, NEXT_PAGE, PREV_PAGE} from "./types";

const endPoint = "http://localhost:3001";

export const getAllCountries = () => {
    return async (dispatch) => {
        try{
            const {data} = await axios(`${endPoint}/countries/`);
            if(data) return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            });
        }catch(error){ return error.message}
    };
};

export const resetCountries = () => {
    return {type: RESET_COUNTRIES};
};

export const countryDetail = (id) => {
    return async (dispatch) => {
        try{
            const {data} = await axios(`${endPoint}/countries/${id}`);
            if(data) return dispatch({
                type: COUNTRY_DETAIL,
                payload: data
            });

        }catch(error){return error.message};
    };
};

export const resetDetail = () => {return {type: RESET_DETAIL}};

export const searchCountries = (name) => {
    return async (dispatch) => {
        try{
            const {data} = await axios(`${endPoint}/countries/name?name=${name}`);
            
            if(data) return dispatch({
                type: SEARCH_COUNTRIES,
                payload: data
            });
        }catch(error){return error.message};
    };
};

export const nextPage = () => {
    return {type: NEXT_PAGE};
};

export const prevPage = () => {
    return {type: PREV_PAGE};
};