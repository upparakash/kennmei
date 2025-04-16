import React from 'react';
import './Gallery.css'; // Create this file for styles

// Import images
import img1 from '../assets/Gallery/c11.jpg';
import img2 from '../assets/Gallery/c22.jpg';
import img3 from '../assets/Gallery/c33.jpg';
import img4 from '../assets/Gallery/c44.jpg';
import img5 from '../assets/Gallery/c55.jpg';
import img6 from '../assets/Gallery/c66.jpg';
import img7 from '../assets/Gallery/c77.jpg';
import img8 from '../assets/Gallery/c88.jpg';
import img9 from '../assets/Gallery/c99.jpg';
import img10 from '../assets/Gallery/w11.jpg';

// Add more as needed

export default function Gallery() {
  const images = [img1, img2, img3,img4, img5, img6,img7, img8, img9,img10];

  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
      ))}
    </div>
  );
}
