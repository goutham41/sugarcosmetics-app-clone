import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.scss";

// import required modules
import {  Navigation } from "swiper";

export default function TwoMore() {
  return (
    <>
    <div className="textSlide">
        <p>TOP PICKS OF THE WEEK</p>
    </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/17/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/17/2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/17/3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/16/1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/16/3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/16/4.jpg" alt="" /></SwiperSlide>
        
      </Swiper>


      <div>
        <div className="textSlide">
          <p>THIS OR THAT</p>
        </div>
        <div className="TwoImage">
          <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/d1b038a4-418a-4309-92b1-9aff3b4393ea.jpg" alt="" />
          <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/984514b9-81c3-4e2a-922e-7b18f42ef77f.jpg" alt="" />
        </div>

      </div>
    </>
  );
}


















