 
import c9 from "../assets/c9.jpg"
import c10 from "../assets/c10.jpg"
import c11 from "../assets/c11.jpg"
import c12 from "../assets/c12.jpg"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./AmcDetails.css"


 
const AmcCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false
  };

  const images = [
     c9, c10, c11, c12 
     
  ];

  return (
    <div className="amc-corousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="amc-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const  AmcDetails = () => {
  return (
    <div className="sewage-container">
       <h1 className="amc-title">AMC for all types of Treatment Units</h1>
       <div className="amc-container">
        <AmcCarousel/>
        <div className="amc-sub-container">
          <p className="amc-description">We do Operation and Maintenance of RO / Softners / STP/ ETP Plant and Water / Wastewater Treatment Units</p>
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
       </div>
    </div>
  );
};

export default  AmcDetails;
