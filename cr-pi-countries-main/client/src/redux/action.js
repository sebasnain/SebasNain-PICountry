import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const ORDER = "ORDER";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";



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

export const setOrderCountry = (order) => {
    console.log(order)
    return { type: ORDER , payload: order }
}

export const setFilterCounrtryByContinent = (filter) => {
    console.log(" desde el action  " + filter)
    return { type: FILTER_BY_CONTINENT , payload: filter }
}