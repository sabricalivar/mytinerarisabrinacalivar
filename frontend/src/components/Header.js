import React from 'react'
import { NavLink } from 'react-router-dom';



const Header = (foto) => {
    return (
        <div className="Header col-12 border-0">
            <div className='backgroundHeader' style={{ backgroundImage: `url("./assets/videos/gifHeaderCallToAction.gif")` }} alt='picture of Montmartre' key="1234"></div>
            <NavLink to='./cities'><button className='callToAction rounded-pill'>Npm Start<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="ms-2 bi bi-mouse2" viewBox="0 0 16 16">
  <path d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z"/>
</svg></button></NavLink>
        </div>
    );
};

export default Header;

{/* <div className="Header d-flex flex-column align-items-center justify-content-center divContenedor">
            <video autoPlay loop muted id="video" >
				<source src='./assets/videos/welcomePc.mp4' type='video/mp4' />
			</video>
        </div> */}
        