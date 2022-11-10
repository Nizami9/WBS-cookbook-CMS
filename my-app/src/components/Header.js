import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Fade } from "react-slideshow-image";

let Header = () => {
  const fadeImages = [
    "https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3298637.jpg&fm=jpg",
    "https://omsksalut.ru/wp-content/uploads/2020/07/B10.jpg",
    "https://images.everydayhealth.com/images/diabetes-friendly-dinner-ideas-00-1440x810.jpg?sfvrsn=729c6dbd_1",
    "https://wallpapers.com/images/hd/spoonful-of-spices-cooking-vwodnnl3zzdsqhbo.jpg"

  ];

  return (
    <div className='headerSec'>
      <Fade className='images'>
          <img src={fadeImages[0]} />
          <img src={fadeImages[1]} />
          <img src={fadeImages[2]} />
          <img src={fadeImages[3]} />
      </Fade>
    </div>
  );
}

export default Header;