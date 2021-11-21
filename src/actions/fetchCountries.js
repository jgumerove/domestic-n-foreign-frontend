
export const fetchCountries = () => {
    return dispatch => fetch("http://localhost:3000/countries")
    .then(res => res.json())
    .then(countries => dispatch({type: "FETCH_COUNTRIES", payload: countries})
    )
}



