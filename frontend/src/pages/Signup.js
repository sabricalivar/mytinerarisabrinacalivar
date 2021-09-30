import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import usersActions from '../redux/actions/usersActions';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';



const Signup = (props) => {
    const [countries, setCountries] = useState([])
    var joiErrors = {}


    const defaultCountries = () => {
        setCountries = 'Argentina'
    }
    // const [picture, setPicture] = useState('default');

    const [newUser, setNewUser] = useState({
        firstname: '',
        lastname: "",
        email: '',
        password: '',
        img: "",
        country: "Argentina",
        pronoun: "never mind",
    })
    
    

    const [errorJ, setErrorJ] = useState({
        firstname: 'Two characters at least',
        lastname: "Two characters at least",
        email: 'A valid one, please',
        password: 'Alphac characters only',
        img: '',
        country: '',
        pronoun: '',

    })

    console.log(newUser)

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all?fields=name')
            .then((res) => setCountries(res.data))
            .catch((err) => setCountries(defaultCountries))
        // eslint-disable-next-line
    }, [])



    const inputHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
        console.log(e.target.name)

    }

    const responseGoogle = async (response) => {
        let newUserGoogle = {
            firstname: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            email: response.profileObj.email,
            password: response.profileObj.googleId,
            img: response.profileObj.imageUrl,
            google: true
        }
        console.log(newUserGoogle)
        let responseGoogle = await props.signUp(newUserGoogle)
        if (!responseGoogle.data.success) {
            Toast.fire({
                icon: 'info',
                title: responseGoogle.data.response
            })
        }
    }

    const formSignup = async (e) => {
        setErrorJ({
            ...errorJ,
            firstname:'', lastname:'', email:'', password:'',
        })
        if (Object.values(newUser).reverse().includes('', 4)) {
            Toast.fire({
                icon: 'info',
                title: "Fill in the required fields:  * !"
            })
        } else if (newUser.img === ""){
            newUser.img = "https://i.postimg.cc/pTjywTCF/logoUser.png"
        } else if (newUser.country === ""){
            newUser.country = "Argentina"
        }else if (newUser.pronoun === ""){
            newUser.pronoun = "never mind"
        }else {
            try {
                let response = await props.signUp(newUser)

                if (response.data.success) {
                    Toast.fire({
                        icon: 'success',
                        title: 'Welcome! you can like your favorite itineraries and add comments now!'
                    })
                    // props.history.push('/cities')
                } else if (response.data.errors) {
                    joiErrors = response.data.errors.details

                    joiErrors.map((e) => setErrorJ(propError => {
                        return {
                            ...propError,
                            [e.path]: e.message
                        }
                    })
                    )
                    console.log(errorJ)

                } else if(!response.data.success) {
                    Toast.fire({
                        icon: 'info',
                        title: response.data.response
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

    }
    return (
        <div>
            <div><h1 className='row g-0 display-4 fw-bold text-light text-center d-block'>Sign<span className='link-warning text-decoration.none'>up</span></h1>

                <div className='row g-0 align-middle'>

                    <div className='col-lg-6 px-4 my-2 mb-0 d-flex flex-column align-self-center'>

                        <div className='text-center align-self-center fs-5 text-light ms-4'><p>Push here and you will be able to like your favorite itineraries, comment on them and soon, post your own.</p></div>

                        <div className='Signup align-self-center'></div>
                        <p className='text-light text-center'>Actually I already registered</p>

                        <div className='mx-auto  align-self-center'><NavLink className='p-2 border border-1 callToActionSign budge rounded-3 text-center mb-2 bg-danger bg-gradient text-decoration-none me-md-3 d-none d-md-block  text-white' to='/login'>Go to Login</NavLink></div>
                    </div>
                    <div className="col-lg-6 px-4 my-2">
                        <div className='container d-grid gap-2 col-8  mx-auto'>
                        <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white'>
      
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                                    <input
                                        className='input'
                                        type='text'
                                        name='firstname'
                                        placeholder='First name'
                                        value={newUser.firstname}
                                        onChange={inputHandler}
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
                                        <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                                    </svg>
                                    <div className='joiErrors'>{errorJ.firstname}</div>
                                </div>
                            </span></smal>

                            <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                <input
                                    className='input'
                                    type='text'
                                    name='lastname'
                                    placeholder='Last name *'
                                    value={newUser.lastname}
                                    onChange={inputHandler}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
                                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                                </svg>
                                <div className='joiErrors'>{errorJ.lastname}</div>

                            </span></smal>
                            <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-at" viewBox="0 0 16 16">
                                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                                </svg>
                                <input
                                    className='input'
                                    type='text'
                                    name='email'
                                    placeholder='E-mail *'
                                    value={newUser.email}
                                    onChange={inputHandler}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
                                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                                </svg>
                                <div className='joiErrors'>{errorJ.email}</div>

                            </span></smal>
                            <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                <input
                                    className='input'
                                    type='password'
                                    name='password'
                                    placeholder='Password *'
                                    value={newUser.password}
                                    onChange={inputHandler}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
                                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
                                </svg>
                                <div className='joiErrors'>{errorJ.password}</div>
                            </span></smal>
                            <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-image" viewBox="0 0 16 16">
                                    <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z" />
                                </svg>
                                <input
                                    className='input'
                                    type='text'
                                    name='img'
                                    placeholder='Put the URL from your picture'
                                    value={newUser.img}
                                    onChange={inputHandler}
                                />
                                <div className='joiErrors'>{errorJ.img}</div>
                            </span></smal>

                            <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                <select
                                    className='input'
                                    name='country'
                                    onChange={inputHandler}>
                                    <option className='input'>Country</option>
                                    {countries.map((country, index) => <option key={index} value={country.name}>{country.name}</option>)}
                                </select>
                                <div className='joiErrors'>{errorJ.country}</div>
                            </span></smal>

                            <smal><span className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-trans" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1.707L3.5 2.793l.646-.647a.5.5 0 1 1 .708.708l-.647.646.822.822A3.99 3.99 0 0 1 8 3c1.18 0 2.239.51 2.971 1.322L14.293 1H11.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 0 1-3.05-5.814l-.95-.949-.646.647a.5.5 0 1 1-.708-.708l.647-.646L1 1.707V3.5a.5.5 0 0 1-1 0v-3zm5.49 4.856a3 3 0 1 0 5.02 3.288 3 3 0 0 0-5.02-3.288z" />
                                </svg>
                                <select
                                    className='input'
                                    name='pronoun'
                                    onChange={inputHandler}>
                                    <option className='input'>Pronoun</option>
                                    {pronouns.map((pronoun, index) => <option key={index} value={pronoun}>{pronoun}</option>)}
                                </select>
                                <div className='joiErrors'>{errorJ.pronoun}</div>
                            </span></smal>

                           <button className='text-white bg-transparent text-center p-1 border border-1 budge rounded-3  mb-2 bg-transparent me-md-3 d-none d-md-block  text-whitep-2  mt-1'><smal><span className='' onClick={formSignup}>Sign up</span></smal></button>
                            <p className='text-light text-center'>or</p>
                            <GoogleLogin className='p-1 border border-1 budge rounded-3 text-center mb-2 bg-transparent me-md-3 d-none d-md-block  text-white'
                                clientId="151480333325-p581317r3fprst9nqpiuas3gqn2ie184.apps.googleusercontent.com"
                                buttonText="Doit whith Google nomad!"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div >
            </div >
        </div >
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

const mapDispatchToProps = {
    signUp: usersActions.signUp,
    logIn: usersActions.logIn,

}

export default connect(null, mapDispatchToProps)(Signup);

const pronouns = ['ey', 'he', 'ney', 'she', 'they', 'never mind'];


const defaultCountries = [
    'Argentina',
    'Australia',
    'Brazil',
    'Canada',
    'China',
    'France',
    'Germany',
    'India',
    'Indonesia',
    'Italy',
    'Japan',
    'Mexico',
    'Russia',
    'Saudi Arabia',
    'South Africa',
    'South Korea',
    'Turkey',
    'United Kingdom',
    'United States',
    'other'
];


    // useEffect(()=>{
    //     setError = ...response.data.errors 
    // })

    // const img = () => {
    //     axios.post('https://api.imgbb.com/1/upload?expiration=600&key=cc22040f473bf2c14b0c92d84de461d0', { picture })
    //         .then((response) => setPicture(response.data.url))
    //         .catch((err) => setPicture(defaultPicture))

    // }