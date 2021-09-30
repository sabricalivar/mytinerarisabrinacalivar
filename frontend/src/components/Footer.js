import React from 'react';
import { Jumbotron, Navbar } from 'reactstrap';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Login from '../pages/Login'
import Cities from '../pages/Cities'



const Footer = (props) => {
    return (
        < div className="Footer col-12 backgroundFooter" style={{ backgroundImage: `url("./assets/videos/gifFooter.gif")` }} alt='picture of Montmartre' key="1234">
            
            <div className='container hero text-end display-3'><button className='p-0 btn btn-link' onClick={() => window.scrollTo(0, 0)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" link-light bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
</svg></button>
                <div color=" d-flex flex-end" light expand="md" >
                    <div className='anchor'>
                        <NavLink to='/login'>
                            <p className='link-light'></p><svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="link-light bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </NavLink>
                    </div >
                    <div className='anchor'>
                        <NavLink to='/cities'>
                            <p className='link-light '></p><svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="link-light bi bi-binoculars-fill" viewBox="0 0 16 16">
                                <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z" />
                            </svg>
                        </NavLink>
                    </div>
                    <div className='anchor'>
                        <NavLink to='/'>
                            <p className='link-light '></p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="link-light bi bi-house-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;

