const api = "http://localhost:3000"

export const fetchCountries = () => {
    return dispatch => fetch(api + "/countries")
    .then(res => res.json())
    .then(restaurants => dispatch({type: "FETCH_COUNTRIES", payload: countries})
    )
}



