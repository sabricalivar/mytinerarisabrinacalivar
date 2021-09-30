import "../../src/App.css";
import { connect } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Progress, Card } from "reactstrap";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

const Activity = (props) => {
  console.log(props.activities);
  // Swiper.use([Navigation, Pagination]);

  // new Swiper(".my-swiper", {
  //   // ...
  // });



  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div className="row d-flex flex-column">
        <div className="col-lg-12">
          <img
            id="imgActivities"
            className=""
            alt={props.activities.alt1}
            style={{ backgroundImage: `url("${props.activities.picture1}")` }}
          />
        </div>
      </div>
      <div className="row d-flex flex-column">
        <div className="col-lg-12">
          <img
            id="imgActivities"
            className=""
            alt={props.activities.alt2}
            style={{ backgroundImage: `url("${props.activities.picture2}")` }}
          />
        </div>
      </div>
      <div className="row d-flex flex-column">
        <div className="col-lg-12">
          <img
            id="imgActivities"
            className=""
            alt={props.activities.alt4}
            style={{ backgroundImage: `url("${props.activities.picture4}")` }}
          />
        </div>
      </div>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectActivities: state.activities.selectActivities,
  };
};

export default connect(mapStateToProps)(Activity);

{
  /* <div className=''>{props.activity.schedule}
          <div className='row d-flex'>
            <div className='col-lg-8'>
              <div className='content1 m-5'>
                <p className='mb-4 fs-6 text-white'>{props.activity.review}</p>
                <div className="order-4 container d-flex hashtags">{props.activity.duration}</div>
                <div className='row'>
                  <h2 className='text-white  display-6 mt-5'>What is the proposal:</h2>
                  <div className='col-lg-3'>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='content mx-auto'>
                <p className="nameAuthor display-6 text-center text-white me-5">{props.activity.info}</p>
              </div>
            </div>
          </div>
        </div> */
}
