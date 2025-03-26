import React from "react";


const services = [
  {
    image: "/path-to-your-image1.jpg",
    title: "Operation And Maintenance Of Water/Wastewater Treatment Units",
    description: "We Provide Service for Manual and Automatic Plants",
  },
  {
    image: "/path-to-your-image2.jpg",
    title: "All Types Plants Accessories",
    description: "We are here to empower your operations to thrive by providing plant Accessories",
  },
  {
    image: "/path-to-your-image3.jpg",
    title: "Under Sink Water Purifier",
    description: "We Provide Best Quality Plants",
  },
];

const CardGrid = () => {
  return (
    <div className="card-container">
      {services.map((service, index) => (
        <div key={index} className="card">
          <img src={service.image} alt={service.title} className="card-image" />
          <h2 className="card-title">{service.title}</h2>
          <p className="card-description">{service.description}</p>
          <button className="card-button">Know More</button>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
