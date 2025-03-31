import "./AllPlantsDetails.css"
import all from "../assets/all.png"

const   AlkalinePlantDetails = () => {
  return (
    <div className="sewage-container">
        
        <h1 className="all-title">KENNWEI Polypropylene Sandy Alkaline Water Purifier</h1>
        <div className="all-container">
           <img src={all} className="all-image" alt="all-image"/>
           <div className="all-sub-container">
              <p className="all-description">
              ✅ Equipped with Rich Alkaline,

              ✅ 8 stage Advanced Purification,

              ✅  8.5 Liters Storage Capacity,

              ✅  Full Tank Indicator,

              ✅  Auto Flush for Longer Membrane Lite,

              ✅ ABS Food Grade,

              ✅  Wall Mounted/Table Top,

              ✅ Membrane will be Loaded According to Hardness water.
              </p>
              <div className="why-choose">
                <h2>🌍 Why Choose Us</h2>
                <ul className="features">
                  <li>✅ Choosing Kenmwei as your accessories provider means partnering with a team dedicated to your success.</li>
                  <li>✅ We understand the critical role accessories play in plant performance.</li>
                  <li>✅ We are here to empower your operations to thrive.</li>
                </ul>
                <p>Peace of mind is just a call away.</p>
              </div>
              <div className="contact-number">
                📞 <strong>74163 11333</strong>
              </div>

           </div>

        </div>
         
       
    </div>
  );
};

export default   AlkalinePlantDetails;
