import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../src/App.css';
import { Container } from 'reactstrap';



const Welcome= ()=>{
    return(
        <Container className=' Welcome text-center' fluid>
            {/* <div>
                <video className='VideoWelcome' autoPlay muted id="video">
                    <source src="/assets/videos/welcomePc.mp4" type='video/mp4' />
                </video>
                <video className='WelcomeTablet' autoPlay muted id="video">
                    <source src="/assets/videos/welcomeTablet.mp4" type='video/mp4' />
                </video>
                <video className='WelcomeMobile' autoPlay muted id="video">
                    <source src="/assets/videos/welcomeMobile.mp4" type='video/mp4' />
                </video>
            </div> */}
            <img className='logoWelcome' alt='picture of logo' src=""></img>
            
        </Container>
    )
}


export default Welcome;
