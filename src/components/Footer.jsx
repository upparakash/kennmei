import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import IndustryCard from "./IndustryCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import auto from "../assets/auto.jpg";
import cement from "../assets/cement.jpg";
import food from "../assets/food.jpg";
import glass from "../assets/glass.jpg";

import bear from "../assets/bear.png"
import bharat  from "../assets/bharat.png"
import bsh from "../assets/bsh.jpg"
import datta from "../assets/datta.png"
import hp from "../assets/hp.png"
import iior from "../assets/iior.png"
import ind from "../assets/ind.png"
import meg from "../assets/meg.jpg"
import nag from "../assets/nag.png"
import patel from "../assets/patel.png"
import t from "../assets/t.jpg"
import tata from "../assets/tata.jpg"



const industries = [
  {
    "id": 1,
    "image": auto,
    "title": "Automobile Industry"
  },
  {
    "id": 2,
    "image": cement,
    "title": "Cement Industry"
  },
  {
    "id": 3,
    "image": food,
    "title": "Food Industry"
  },
  {
    "id": 4,
    "image": glass,
    "title": "Glass Manufacturers"
  }
]

 
 
const ClientsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: true
  };

  const images = [
     bear,   
  
  bharat,   
  bsh,
  datta,   
  hp,   
  iior,  
  ind,   
  meg,  
  nag,   
  patel,   
  t,   
  tata   
     
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              className="corousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container-1">
       <h1 className="industries-heading">ADDING VALUE ACROSS INDUSTRIAL SECTORS</h1>
       <ul className="industries-list">
        {industries.map(eachIndustry => (
          <IndustryCard key={eachIndustry.id} industryDetails={eachIndustry}/>
        ))}
       </ul>
      </div>

      <div className="footer-container-2">
       <h1 className="industries-heading">Our Amazing Clients</h1>
        
        <ClientsCarousel/>
       
      </div>

      <div className="footer-container-3">
        {/* Get In Touch Section */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>Kennwei plays a crucial role in providing clean and safe drinking water.</p>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h3>Contact Details</h3>
          <p><strong>Phone:</strong></p>
          <p>74163 11333</p>
          <p>74164 11333</p>
          <p><strong>Email:</strong></p>
          <p>info@kennwei.com</p>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>VICTORYY AQUA TECHNOLOGIES</p>
          <p>8-4-24/5, Pavanpuri Colony, Champapet, Hyderabad.</p>
          <p>Telangana 500079</p>
        </div>

        {/* Follow Me Section */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
