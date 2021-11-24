
const initialState = {
    countries: [],
    selectedCountry: {
        name: "",
        places: []
     }
  }

export const countriesReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_COUNTRIES":
            return {...state, countries: action.payload};
        case "FETCH_COUNTRY":
            return {...state, selectedCountry: action.payload};
        default:
            return state
    }

}