import { GET_COUNTRIES , GET_COUNTRIES_BY_NAME , GET_COUNTRIES_BY_ID , ORDER , FILTER_BY_CONTINENT} from "./action";

const initialState = {
    countries : [],
    countryDetail : [],
    allCountries: [],
}

const rootReducer = ( state= initialState , action) => {
     switch (action.type) {
        case GET_COUNTRIES:
            return { ...state , countries: action.payload , allCountries: action.payload}
            
          case GET_COUNTRIES_BY_NAME:
            return { ...state , countries: action.payload }  
        
        case GET_COUNTRIES_BY_ID:
          return { countryDetail: action.payload }

          case ORDER: {
            const orderCopy = {
              ...state,
              countries: [...state.countries] // Clonar el array de countries
            };
            if(action.payload === "todos"){
              console.log("sin orden")
              return {
                ...state ,
                countries: state.allCountries,
              }
            }
            const sortdeCountries = action.payload === 'Ascendente'
              ? orderCopy.countries.slice().sort((a, b) => a.name.localeCompare(b.name))
              : orderCopy.countries.slice().sort((a, b) => b.name.localeCompare(a.name));
            console.log(sortdeCountries)
            return {
              ...state,
              countries: sortdeCountries
            };
          }
          
          case FILTER_BY_CONTINENT: {
          if(action.payload === "Todos"){
            return console.log("Todos funciona")
          }
          if(action.payload === "Africa"){
            const filterAfrica = state.allCountries.filter((pais)=> pais.continent === "Africa")
            console.log(filterAfrica)
            return {
              ...state ,
              countries: filterAfrica
            }
          }
          if(action.payload === "Oceania"){
            const filterOcenia = state.allCountries.filter((pais)=> pais.continent === "Oceania")
            console.log(filterOcenia)
            return {
              ...state ,
              countries: filterOcenia
            }
          }
          if(action.payload === "North America"){
            const filterAmericaN = state.allCountries.filter((pais)=> pais.continent === "North America") 
            console.log("North America funciona")
             return {
              ...state ,
              countries: filterAmericaN
             }
          }
          if(action.payload === "South America"){
            const filterAmericaS = state.allCountries.filter((pais)=> pais.continent === "South America") 
            console.log("South America funciona")
             return {
              ...state ,
              countries: filterAmericaS
             }
          }
          if(action.payload === "Europe"){
            const filterEurope = state.allCountries.filter((pais)=> pais.continent === "Europe") 
            console.log("Europe")
             return {
              ...state ,
              countries: filterEurope
             }
          }
          if(action.payload === "Asia"){
            const filterAsia = state.allCountries.filter((pais)=> pais.continent === "Asia") 
            console.log("Asia funciona")
             return {
              ...state ,
              countries: filterAsia
             }
          }
          if(action.payload === "Antarctica"){
            const filterAntartica = state.allCountries.filter((pais)=> pais.continent === "Antarctica") 
            console.log("Antarctica")
             return {
              ...state ,
              countries: filterAntartica
             }
          }
          return state
          }
          
          
          
     
        default:
           return {...state}
     }
}

export default rootReducer