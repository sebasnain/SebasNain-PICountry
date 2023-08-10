import { GET_COUNTRIES , GET_COUNTRIES_BY_NAME , GET_COUNTRIES_BY_ID} from "./action";

const initialState = {
    countries : [],
    countryDetail : [],
}

const rootReducer = ( state= initialState , action) => {
     switch (action.type) {
        case GET_COUNTRIES:
            return { ...state , countries: action.payload}
            
          case GET_COUNTRIES_BY_NAME:
            return { ...state , countries: action.payload}  
        
        case GET_COUNTRIES_BY_ID:
          return { countryDetail: action.payload }
     
        default:
           return {...state}
     }
}

export default rootReducer