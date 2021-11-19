

export const countriesReducer = (state = {
    countries: []
}, action) => {
    switch(action.type){
        case "FETCH_COUNTRIES":
            return action.payload
        default:
            return state
    }

}