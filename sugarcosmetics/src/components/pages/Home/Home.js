import Reffer from './Slider/Reffer';
import React from 'react'
import Slider from './Slider/Slider'
import TestSlide from "./Slider/TestSlide";

// <<<<<<< HEAD
import OneMore from './Slider/OneMore'
import TwoMore from './Slider/TwoMore'
import VideoSlide from './Slider/VideoSlide'
import ThreeImage from './Slider/ThreeImage'
import FourMore from './Slider/FourMore'
import Delivery from './SlideHome';
import SlideOne from './SlideOne';

export default function Home() {
  return (
    <div>

    <Slider/>
    <Reffer/>
    <TestSlide/>
    <OneMore/>
    <VideoSlide/>
    <TwoMore/>
    <ThreeImage/>
    <Delivery/>
    <SlideOne/>
    <FourMore/>

    </div>
  )

}
// =======
// export default function Home() {
//   return (
//     <>
//       <div style={ {height:"2500px"} }>
//         <Slider />
//         <TestSlide  />
//         <Reffer />
//       </div>
//     </>
//   );
// }
// >>>>>>> c400b74efea61ee157d74a2a382326e0997378a9

