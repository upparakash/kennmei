
import "./RoDetails.css"

import image6 from '../assets/image6.png';  
import image7 from '../assets/image7.png';  
import image8 from '../assets/image8.jpeg'; 
import image9 from '../assets/image9.jpeg';  
import image10 from '../assets/image10.jpeg';
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import c5 from "../assets/c5.jpg"
import c6 from "../assets/c6.jpg"
import c7 from "../assets/c7.jpg"
import c8 from "../assets/c8.jpg"
import c9 from "../assets/c9.jpg"
import c10 from "../assets/c10.jpg"
import c11 from "../assets/c11.jpg"
import c12 from "../assets/c12.jpg"


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

 

 

 
const RoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false
  };

  const images = [
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12 
     
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="corousel"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
 
 
 

 
 
const  RoDetails = () => {
  return (
    <div className="sewage-container">
      <h1 className="title">Industrial RO (Reverse Osmosis) Plant</h1>
      <div className="image-gallery-ro">
              <img src={image6} alt="Sewage Plant 1" className="image" />
              <img src={image7} alt="Sewage Plant 2" className="image" />
              <img src={image8} alt="Sewage Plant 3" className="image" />
      </div>
       
       <RoCarousel/>
       <div className="image-gallery-ro">
              <img src={image9} alt="Sewage Plant 1" className="image" />
              <img src={image10} alt="Sewage Plant 2" className="image" />
              
      </div>
      <h1 className="title">We deal up to 50 kL PH</h1>
      <p className='ro-description'>Kennwei Water offers premium range of RO Plants equipped with Ro+UV technology works across all feed water sources. This RO water Plant is able to remove 99.9% of bacteria and delivers you 100% Safe, tasty and germ-free healthy water.</p>
      <h2 className="subtitle">APPLICATION AND USES</h2>
      <ul className="application-list">
        <li>Residential and Commercial Complex</li>
        <li>Public Garden and National Park</li>
        <li>Hotel & Resorts</li>
        <li>Restaurants</li>
        <li>Industries</li>
        <li>Institutions</li>
        <li>Hospitals</li>
        <li>Temples</li>
        <li>Government Offices</li>
        <li>Labour Quarters</li>
        <li>Township</li>
        <li>Hostels</li>
      </ul>
    
    </div>
  );
};

export default  RoDetails;
