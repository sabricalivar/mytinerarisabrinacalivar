import React from 'react';
import { Container } from 'reactstrap';

const Hero = (props) => {
  return (
    <div className='hero g-0 text-center' fluid>
      <p className="textCard lead fs-2 link-light">Benefits of being digital nomad</p>
      <div className='imgContainer'>
        <div className='row container d-flex justify-content-evenly'>
          <div className='col'>
            <div id="imgHero" className='' style={{ backgroundImage: `url("https://i.postimg.cc/25qhZwwq/1.png")` }}></div>

          </div>
          <div className='col'>
            <div id="imgHero" className='' style={{ backgroundImage: `url("https://i.postimg.cc/YCDQ0V1K/3.png")` }}></div>

          </div>
          <div className='col'>
            <div id="imgHero" className='' style={{ backgroundImage: `url("https://i.postimg.cc/g0fRqZSg/2.png")` }}></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;