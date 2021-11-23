export const fetchCountry = (id) => {
    return dispatch => fetch(`http://localhost:3000/countries/${id}`)
    .then(res => res.json())
    .then(countries => dispatch({type: "FETCH_COUNTRY", payload: country})
    )
}