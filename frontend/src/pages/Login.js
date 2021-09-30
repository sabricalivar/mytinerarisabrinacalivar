import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import GoogleLogin from 'react-google-login';



const Login = (props) => {
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })
    useEffect(() => {
        console.log('montado')
    }, [])

    const inputHandler = (e) => {
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value,
        })
    }

    const responseGoogle = async (response) => {
        let loginGoogle = {
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            img: response.profileObj.imageUrl,
            flagGoogle: true,
        }

        let responseGoogle = await props.logIn(loginGoogle)
        Toast.fire({
            icon: 'success',
            title: 'Welcome! you can like your favorite itineraries and add comments now!'
        })
        if (!responseGoogle) {
        }
    }

    const formLogin = async (e) => {
        try {
            let res = await props.logIn(loginUser)

            if (res.data.success) {
                Toast.fire({
                    icon: 'success',
                    title: 'Welcome! you can like your favorite itineraries and add comments now!'
                })

            } else {
                Toast.fire({
                    icon: 'info',
                    title: res.data.response
                })
            }

        } catch (error) {
            console.log(error)
            Toast.fire({
                icon: 'info',
                title: error.message
            })
        }
    }


    return (
        <div>
            <div><h1 className='row g-0 display-4 fw-bold text-light text-center d-block'>Log<span className='link-warning text-decoration.none'>in</span></h1>

                <div className='row g-0'>

                    < div className='d-flex align-content-center col-lg-6 px-4 my-2 mb-0 d-flex flex-column align-self-center'>

                        <div className='text-center align-self-center fs-5 text-light ms-4'><p>Are you enjoy your posibilities here?</p></div>
                        
                        <div div className='Login align-self-center'></div>
                            <p className='text-light text-center'>Actually I don´t have account yet</p>
                        
                        <div className='mx-auto  align-self-center'><NavLink className='p-2 border border-1 callToActionSign budge rounded-3 text-center mb-2 bg-danger bg-gradient text-decoration-none me-sm-3 d-none d-sm-block text-white' to='/signup'>Go to Sign up</NavLink></div>
                        </div>
                    
                        < div className="d-flex align-content-center col-lg-6 px-4 my-2 mb-0 d-flex flex-column align-self-center">
                        <div className='text-center align-self-center fs-5 text-light ms-4'><p>Hello again! Who's there?</p></div>
                        

                            <div className='d-flex flex-column  container align-self-center inputSignup'>

                                <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-sm-3 d-none d-sm-block text-white'>
                                    <input
                                        className='input'
                                        type='text'
                                        name='email'
                                        placeholder='email'
                                        value={loginUser.email}
                                        onChange={inputHandler}
                                    /></span></smal>
                                <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-sm-3 d-none d-sm-block text-white'>

                                    <input
                                        className='input'
                                        type='password'
                                        name='password'
                                        value={loginUser.password}
                                        onChange={inputHandler}
                                    /></span></smal>
                                <button className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-sm-3 d-none d-sm-block text-white' id='botonForm' onClick={formLogin}>
                                    Let´s go;
                                </button>
                                <GoogleLogin className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-sm-3 d-none d-sm-block text-white'
                                    clientId="151480333325-p581317r3fprst9nqpiuas3gqn2ie184.apps.googleusercontent.com"
                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />,
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            )
}


            const Toast = Swal.mixin({
                toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
    didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

            const mapDispatchToProps ={
                logIn:usersActions.logIn,
            signUp:usersActions.signUp,
}

            export default connect(null, mapDispatchToProps)(Login)
