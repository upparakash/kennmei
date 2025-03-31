
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images
import welcome1 from '../assets/welcome1.png';
import welcome2 from '../assets/welcome2.jpg';
 

import "./Body.css"

import { useState } from 'react';
import ReactPlayer from 'react-player';
import ProductCard from './ProductCard.jsx'
 

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);

  // Video URL can be YouTube, Vimeo, or direct file URL
  const videoUrl = 'https://www.youtube.com/watch?v=1T6ckI-7BK8&t=5s'; 

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

   
  const handleProgress = (state) => {
    setProgress(state.played * 100);
  };

  return (
    <div className="video-container">
      <ReactPlayer
        url={videoUrl}
        playing={playing}
        volume={volume}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onProgress={handleProgress}
        width="100%"
        height="500px"
        margin="20px"
        controls={false} // We'll add custom controls
      />

      {/* Custom Controls */}
      <div className="controls">
        {/* <button onClick={handlePlayPause}>
          {playing ? '⏸ Pause' : '▶ Play'}
        </button> */}
        
         
        
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

 

const WelcomeCorousal = () => {
  const images = [
     welcome1,
    welcome2
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div style={{ Width: 1400, margin: '0px auto', outline: 'none'}}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '800px',
                objectFit: 'cover',
                outline: 'none'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components
const PrevArrow = (props) => (
  <button
    {...props}
    className="slick-arrow slick-prev"
    style={{ 
      left: 10, 
      zIndex: 1,
      fontSize: '24px',
      color: 'white'
    }}
  >
    &#10094;
  </button>
);

const NextArrow = (props) => (
  <button
    {...props}
    className="slick-arrow slick-next"
    style={{ 
      right: 10, 
      zIndex: 1,
      fontSize: '24px',
      color: 'white'
    }}
  >
    &#10095;
  </button>
);

 
 

 


const Body = () => {
  return (
    <div className='body-container'>
     <WelcomeCorousal/>
     <h1>You came to right Place</h1>
     <Video/>
     <h1>Find the right product for your need from
     Best Selling Products</h1>
    <ul className='cards-container'>
      
      <ProductCard/>
     
    </ul>
     
    </div>
  )
}

export default Body