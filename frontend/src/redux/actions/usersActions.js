import axios from 'axios'
const usersActions ={

    signUp: (newUser) =>{
        return async (dispatch, getstate)=> {
            let response = await axios.post('http://localhost:4000/api/user/signup', {...newUser})
            if (response.data.success)    {
                dispatch({type:'LOG_INTO', payload: response.data.response})
            }
            return response
        }
        
    },
    
    logIn: (loginUser) =>{
        return async (dispatch, getstate)=> {
            let response = await axios.post('http://localhost:4000/api/user/login', {...loginUser})
            if (response.data.success)    {
                dispatch({type:'LOG_INTO', payload: response.data.response})
            }
            return response
        }
    },

    logOut: ()=>{
        return (dispatch, getState)=>{
            dispatch({type:'LOGOUT'})
        }
    },

    logInLS:(token)=>{
        return async (dispatch,getState)=>{
            axios
                .get('http://localhost:4000/api/verifyToken',{
                headers:{
                    Authorization: 'Bearer '+token
                },
            })
            .then((res)=>{
                dispatch({type:'LOG_INTO', payload: {token, firstname: res.data.firstname, img: res.data.img, id: res.data.id}})
            })

            .catch((err)=>{
                return dispatch({type: 'LOGOUT'})
            })

        }
    }


}

export default usersActions