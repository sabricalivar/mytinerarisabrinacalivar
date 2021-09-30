import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const Carrusel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        className='gallery__item row'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
          {(item).map((obj) =>
            <td className='col-sm' key={obj.url}>
              <Card inverse  className={obj.className}>
                <div className='gallery__img' style={{backgroundImage:`url("${obj.url}")`}} alt={obj.altText}></div>
                <CardImgOverlay>
                  <CardTitle tag="h5" className='text-center fs-5 fw-bolder link-dark text-decoration-none'>{obj.caption} </CardTitle>
                  <CardText className='textCard text-center fst-italic link-dark text-decoration-none'>{obj.quote}</CardText>
                  <CardText>
                    <small className="textCard text-muted text-center">MyTinerary fans gift</small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </td>
          )}
        
      </CarouselItem >
    )
  });

  return (
    <Carousel
      className="carousel-fade gallery__container"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} className='col-12'/>
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className='col-12'/>
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}


export default Carrusel;


const items = [
  [
    { url: 'https://i.postimg.cc/V6BVfZYq/10.png', altText: 'Paris', className: 'first', caption: 'Paris', quote: 'Où veux-tu le lever du soleil?', },
    { url: 'https://i.postimg.cc/Kvgs4Yvc/11.png', altText: 'London', className: 'second', caption: 'London', quote: 'What neighborhood do you want to go to?', },
    { url: 'https://i.postimg.cc/pXg4BF1n/12.png', altText: 'Berlín', className: 'third',caption: 'Berlin', quote: 'Wo möchten Sie sich austauschen?', },
    { url: 'https://i.postimg.cc/xdSdBqqX/13.png', altText: 'Venice', className: 'four', caption: 'Venice', quote: 'Che lingua vuoi imparare?', },
  ],
  [
    { url: 'https://i.postimg.cc/bwVTTcvV/14.png', altText: 'Tokyo', className: 'first', caption: 'Tokyo', quote: 'どんな文化を身につけたいですか？', },
    { url: 'https://i.postimg.cc/851q6gXK/15.png', altText: 'Barcelona', className: 'second', caption: 'Barcelona', quote: 'Què voleu veure a través de la vostra finestra avui?', },
    { url: 'https://i.postimg.cc/G2Gxd4x6/16.png', altText: 'Bali', className: 'third', caption: 'Bali', quote: 'Rasa apa yang ingin kamu coba?', },
    { url: 'https://i.postimg.cc/x16s4N6R/17.png', altText: 'Moscow', className: 'four', caption: 'Moscow', quote: 'Вы можете видеть всю картину с того места, где находитесь?', },
  ],
  [
    { url: 'https://i.postimg.cc/1zgK7Cnm/18.png', altText: 'Reykjavik', className: 'first', caption: 'Reykjavik', quote: 'Finnst þér frelsi þitt?', },
    { url: 'https://i.postimg.cc/4dj4bdC4/19.png', altText: 'Oia, Santorini island, Greece', className: 'second', caption: 'Oia, Santorini island', quote: 'Νιώθεις πολίτης του κόσμου;?', },
    { url: 'https://i.postimg.cc/htnj5fXf/20.png', altText: 'Ha-Long Bay', className: 'third', caption: 'Ha-Long Bay', quote: 'Bạn có cảm thấy rằng các đường viền không đại diện cho bạn?', },
    { url: 'https://i.postimg.cc/C5DhvgYG/21.png', altText: 'Rovaniemi', className: 'four', caption: 'Rovaniemi', quote: 'Vậy thì bạn là một trong số chúng tôi ... chào mừng bạn', },
  ],
];
