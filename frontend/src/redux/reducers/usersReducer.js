const usersReducer = (state = {token: null, firstname:null, img:"", userId:null}, action)=>{
    
    switch(action.type){
        case 'LOG_INTO':
            localStorage.setItem('token', action.payload.token)

            return{
                token: action.payload.token,
                firstname: action.payload.firstname,
                img: action.payload.img,
                userId: action.payload.id
            }
        case 'LOGOUT':
            localStorage.removeItem('token')
            localStorage.removeItem('firstname')
            localStorage.removeItem('img')

            return{
                token: null,
                firstname: null,
                img:''
            }

        default:
            return state
    }


}

export default usersReducer;