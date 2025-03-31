import "./AllPlantsDetails.css"
import uswp from "../assets/uswp.png"

const   UswpDetails = () => {
  return (
    <div className="sewage-container">
        
        <h1 className="all-title">Under Sink Water Purifier</h1>
        <div className="all-container">
           <img src={uswp} className="all-image" alt="all-image"/>
           <div className="all-sub-container">
              <p className="all-description">
              ✅ UNDER SINK WATER FILTER
                <br/>
              ✅ ABS Body
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

export default   UswpDetails;
