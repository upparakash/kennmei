import "./AllPlantsDetails.css"
import fire from "../assets/fire.png"

const   FireDetails = () => {
  return (
    <div className="sewage-container">
        
        <h1 className="all-title">Fire Alarm</h1>
        <div className="all-container">
           <img src={fire} className="all-image" alt="all-image"/>
           <div className="all-sub-container">
              <p className="all-description">
              Our fire alarm service guarantees safety with swift detection of smoke or fire. Experience instant alerts through loud sound, ensuring a prompt and effective response for the protection of lives and property.
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

export default   FireDetails;
