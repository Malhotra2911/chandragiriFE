import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import "../../../css/jobseeker/WhatClientSays.css";
import slider1 from '../../../assets/new1.jpeg';
import slider2 from '../../../assets/new2.jpeg';
import slider3 from '../../../assets/new3.jpeg';
import slider4 from '../../../assets/new4.jpg';
import slider5 from '../../../assets/new5.jpg';
import './TopHeader.css';
export default function TopHeader() {
  return (
    <div className="main_slider">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={true}
        stopOnHover={true}
        autoFocus={true}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        dots={true}
      >
        <div>
          <img className="sliderimg" src={slider1} />
        </div>
        <div>
          <img className="sliderimg" src={slider2} />
        </div>
        <div>
          <img className="sliderimg" src={slider3} />
        </div>
        {/* <div>
          <img style={{height:'25rem'}} src={slider4} />
        </div> */}
        <div>
          <img className="sliderimg" src={slider5} />
        </div>
      </Carousel>
    </div>
  );
}
