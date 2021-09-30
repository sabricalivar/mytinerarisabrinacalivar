const citiesReducer =(state={allCities:[], selectCities:[], citySelected:{}}, action)=>{
    switch(action.type){
        case "GET_ALL_CITIES":
            return {
                ...state,
                allCities: action.payload,
                selectCities: action.payload,
            }
        case 'GET_FILTERED_CITIES':
            return{
                ...state,
                selectCities: state.allCities.filter(city => action.payload === ""? city : city.caption.toUpperCase().startsWith(action.payload)),
            }

        case 'GET_ONE_CITY':
            return{
                ...state,
                citySelected: state.allCities.find(city => city._id === action.payload)
            }
            

        default:
            return state
    
    }

}


export default citiesReducer


