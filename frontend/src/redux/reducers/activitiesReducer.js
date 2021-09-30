const activitiesReducer =(state={selectActivities:[]}, action)=>{
    switch(action.type){
        case 'GET_ACTIVITIES_BY_ITINERARY':
                return{
                    ...state,
                    selectActivities: action.payload,
                }

        default:
            return state
    }
}

export default activitiesReducer