import React from "react";
import "./Slider.scss";
import SlideHome from '../SlideHome'
import SlideOne from "../SlideOne.jsx";
// import TestSlide from "./TestSlide";



export default function Reffer() {
  return (
    <div className="mainDiv">
      <div className="distance"></div>
      <div className="reffetText">
        <p>REFER YOUR FRIENDS</p>
      </div>
      <div>
        <img
          src={
            "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg"
          }
          alt="refer"
          className="feferImage"
          srcset=""
        />
      </div>

      <div>
        <p className="PRIMING">METTLE PRIMING BALM</p>
      </div>

      <SlideHome />

      <div className="youTube">
        <iframe
          width="1024"
          height="352.7px"
          src="https://www.youtube.com/embed/_TTJmiTiiOQ"
          title="YouTube video player"
          frameborder="0"
          allow="https://d32baadbbpueqt.cloudfront.net/Homepage/8bfe8bb4-002d-4097-a773-6af33325a594.jpg"
          allowfullscreen
        ></iframe>

        <SlideOne />
        {/* <TestSlide  /> */}
      </div>
    </div>
  );
}
