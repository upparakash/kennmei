import cus from "../assets/cus.webp"
import "./About.css"
const  About = () => {
  return (
    <div className="about-main-container-1" > 
    <div className="about-main-container-2">
        <img src={cus} className="about" alt="about"/>
        <div className="about-part">
        <div>
             
            <h2 className="main-heading">Contact Us</h2>
            <p className="about-description">VICTORYY AQUA TECHNOLOGIES
            8-4-24/5 Pavanpuri Colony, Champapet, Hyderabad, Telangana 500079</p>
          <div>
            
            
            <p className="about-description">info@kennwei.com</p>
          </div>
          <div>
            
             
            <p className="about-description">1800 5723 299 (Toll Free Number)</p>
          </div>

        </div>
          
      </div>    
    </div>
    </div> 
  );
};

export default  About;
