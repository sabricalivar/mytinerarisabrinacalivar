import axios from 'axios'

const activitiesActions = {
    postNewActivity: ()=>{

        return async (dispatch, getState)=>{
            let response = await axios.get('http://localhost:4000/api/activities')
            let data = response.data.response
            if(!response.data.success){
                throw new Error('Backend-BD')
            }
        
            dispatch({type:'POST_ACTIVITY', payload:data})
        }
    },

    getActivitiesByItineraryId: (itineraryId)=>{
        return async (dispatch, getState)=>{
            try{
                // console.log(itineraryId)
                let response = await axios.get(`http://localhost:4000/api/activity/${itineraryId}`)
                // console.log(response.data)
                if(response.data.success){
                    let data = response.data.response
                    // console.log(data)
                    dispatch({type:'GET_ACTIVITIES_BY_ITINERARY', payload:data})
                    return({sucess:true, response:response.data.response})
                }else{
                    throw new Error('Backend-BD')
            
                }
                    
            }catch(err){
                return{success:false, response:err.message}
            }
        }
    },

}

export default activitiesActions