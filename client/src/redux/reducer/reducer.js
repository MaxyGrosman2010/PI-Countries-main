import {GET_ALL_COUNTRIES, RESET_COUNTRIES, COUNTRY_DETAIL, RESET_DETAIL, 
    SEARCH_COUNTRIES, GET_ALL_ACTIVITIES, CREATE_ACTIVITY, NEXT_PAGE, PREV_PAGE} from "../actions/types";

const initialState ={
    allCountries: [],
    showCountries: [],
    countryDetails: {},
    allActivities: [],
    numPage: 1,
    cantPages: 0
};

const rootReducer = (state = initialState, {type, payload}) => {

    switch(type){

        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
                showCountries: payload,
                cantPages: Math.ceil(payload.length / 10)
            };

        case RESET_COUNTRIES:
            return{
                ...state,
                showCountries: state.allCountries,
                cantPages: Math.ceil(state.allCountries.length / 10)
            };

        case COUNTRY_DETAIL:
            return{
                ...state,
                countryDetails: payload
            };

        case RESET_DETAIL:
            return {
                ...state,
                countryDetails: {}
            };

        case SEARCH_COUNTRIES:
            return {
                ...state,
                showCountries: payload,
                cantPages: Math.ceil(payload.length / 10)
            };

        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: payload
            };

        case CREATE_ACTIVITY:
            return {
                ...state,
                allActivities: [...state.allActivities, payload]
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