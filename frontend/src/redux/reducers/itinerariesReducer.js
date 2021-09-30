const itinerariesReducer =(state={allItineraries:[], selectItinerary:[]}, action)=>{
    switch(action.type){
        case "GET_ALL_ITINERARIES":
            return {
                ...state,
                allItineraries: action.payload,
            }
        case 'GET_ITINERARIES_BY_CITY':
                return{
                    ...state,
                    selectItinerary: action.payload,
                }

        default:
            return state
    }
}

export default itinerariesReducer
