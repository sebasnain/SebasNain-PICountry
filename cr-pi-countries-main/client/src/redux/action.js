import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";



export const getCountries = () => {

    return async (dispatch) =>{
        const apiData = await axios.get("http://localhost:3001/countries");
        const countries = apiData.data
        //console.log(countries)
       return dispatch({type:GET_COUNTRIES , payload: countries})
    }
}

export const getCountriesByName = (name) => {
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
        const countries = apiData.data
        console.log(countries)
        return dispatch({type:GET_COUNTRIES_BY_NAME , payload: countries})
    }
}

export const getCountriesById = (idPais) => {
    //http://localhost:3001/countries/KEN
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/countries/${idPais}`);
        const country = apiData.data
        console.log(country)
        return dispatch({type:GET_COUNTRIES_BY_ID , payload: country})
    }
}
