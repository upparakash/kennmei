
import './StpDetails.css';
import image1 from '../assets/image1.png';  
import image2 from '../assets/image2.jpg';  
import image3 from '../assets/image3.png';  

const StpDetails = () => {
  return (
    <div className="sewage-container">
      <h1 className="title">Sewage Treatment Plant (STP)</h1>
      <div className="image-gallery">
        <img src={image1} alt="Sewage Plant 1" className="image" />
        <img src={image2} alt="Sewage Plant 2" className="image" />
        <img src={image3} alt="Sewage Plant 3" className="image" />
      </div>
      <p className="description">
        Sewage is the waste generated from residential, institutional, commercial, and industrial establishments. 
        STP plant treats the sewage to make it fit for safe disposal, agricultural use, or domestic use in toilets, etc. 
        Sewage usually contains a high quantity of organic and inorganic wastes. It is essential to treat sewage before it 
        enters any water body. If sewage is allowed to enter the water sources without treatment, it will contaminate them; 
        which is why it is essential to treat sewage properly before letting it into rivers or other sources of water.
      </p>
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

export default StpDetails;
