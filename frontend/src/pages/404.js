import React from 'react';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Cmp404 = (props) => {
  return (
    <div className="Main">
      <Container className=" text-center themed-container" fluid={true}>
        <div>
          <video className='VideoCities' autoPlay cover loop id='video'><source src='./assets/videos/citiesHero.mp4' type='video/mp4' /></video>
        </div>
        <div className="container fixed-bottom">
          <div className="row">
            <img className='logoHero Logo row col-6' alt='picture of logo' src='./assets/logoHero.png'></img>
          </div>
          <div className="row col 12 TextoCities">
            <div className="col 4">
            </div>
            <div className="col 5 flex-grow-1">
            </div>
            <div className="col 3">
              <div className="card-header row col 4 flex-shrink-1 w-30"></div>
              <div className="card-body">
                <h5 className="card-title">WTF!</h5>
                <p className="card-text">We´re so sorry! Can you try again, please?</p>
                <NavLink to="./" className="btn btn-primary rounded-circle">Back</NavLink>
              </div>
              <div className="card-footer text-muted">Press here to back at Home
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </Container>
    </div>
  );
}

export default Cmp404;
