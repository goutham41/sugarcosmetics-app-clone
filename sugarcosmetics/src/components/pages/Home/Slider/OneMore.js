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

export default function OneMore() {
  return (
    <>
     <div className="distance">
        
        </div>
     
        <p className="hotDeals">HOT DEALS</p>
      <Swiper
       slidesPerView={3}
       spaceBetween={10}
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
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/13/thumbnail.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/14/thumbnail.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/15/1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/15/2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/15/3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dummyjson.com/image/i/products/15/4.jpg" alt="" /></SwiperSlide>
       
      </Swiper>

        <div className="textSlide">

          <p>ULTIMATE MAKEUP QUIZ</p>
        </div>
        <div>
          <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/b16a42b1-3e35-42bb-b122-a517e75c490e.jpg" className=" myimage" alt="" />
        </div>


    </>
  );
}



















