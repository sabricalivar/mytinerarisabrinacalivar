import axios from 'axios'

const citiesActions = {
    getAllCities: (props)=>{
        return async (dispatch, getState)=>{
            let response = await axios.get('https://mytinerarysabrinacalivar.herokuapp.com/api/cities')
            let data = response.data.response
            if(!response.data.success){
                throw new Error('Backend-BD')
            }
            
            dispatch({type:'GET_ALL_CITIES', payload:data})
        }
    },

    selectedCities: (chart)=>{
        return (dispatch, getState)=>{
            dispatch({type:'GET_FILTERED_CITIES', payload:chart })
        }
    },

    getOneCity: (_id) =>{
        return (dispatch, getState)=>{
            dispatch({type:'GET_ONE_CITY', payload:_id})
        }
    }
}

export default citiesActions