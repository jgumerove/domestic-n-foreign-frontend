

export const countriesReducer = (state = {
    countries: []
}, action) => {
    switch(action.type){
        case "FETCH_COUNTRIES":
            return {...state, countries: action.payload};
        default:
            return state
    }

}