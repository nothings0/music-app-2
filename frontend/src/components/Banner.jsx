import React, {useContext} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SongContext } from '../Contexts/SongContext'

const Banner = () => {

  const { banner } = useContext(SongContext)
  
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false
  };
  return (
    <Slider {...settings} className="banner">
      {
        banner.map((item, index) => (
          <img src={item.banner} alt="" key={index}/>
        ))
      }
    </Slider>
  )
};

export default Banner;
