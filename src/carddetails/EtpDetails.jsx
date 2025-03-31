import "./StpDetails.css"
import image4 from '../assets/image4.png';  
import image5 from '../assets/image5.png'; 

const EtpDetails = () => {
  return (
     
       <div className="sewage-container">
             <h1 className="title">Effluent Treatment Plant (ETP)</h1>
             <div className="image-gallery">
               <img src={image4} alt="Sewage Plant 1" className="image" />
               <img src={image5} alt="Sewage Plant 2" className="image" />
                
             </div>
             <p className="description">
             Effluent is generated in many manufacturing industries like textile, pharmaceuticals and chemicals, tanneries etc. Contaminated water cannot be released without treatment as it contains toxic and non-toxic chemicals. Releasing it may cause contamination of the existing pure water and will affect the environment. As a result ETP’s are installed in most manufacturing industries.
             </p>
             <p className="description">
             The Effluent treatment plants (ETP) are used for the removal of high amounts of organic compounds, debris, dirt, grit, pollution, toxic, non-toxic materials and polymers etc. from industrial effluent. The ETP plants use evaporation and drying methods and other auxiliary techniques such as centrifuging, filtration , incineration for chemical processing and effluent treatment.
             </p>
    </div>
  );
};

export default EtpDetails;
