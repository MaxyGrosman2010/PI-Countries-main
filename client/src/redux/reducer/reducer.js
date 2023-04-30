import {GET_ALL_COUNTRIES, NEXT_PAGE, PREV_PAGE} from "../actions/types";

const initialState ={
    allCountries: [],
    numPage: 1
};

const rootReducer = (state = initialState, {type, payload}) => {

    switch(type){

        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: payload
            };

        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1
            };

        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1
            };

        default:
            return state;
    };
};

export default rootReducer;