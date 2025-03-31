import "./AllPlantsDetails.css"
import net from "../assets/net.png"

const   NetworkingDetails = () => {
  return (
    <div className="sewage-container">
        
        <h1 className="all-title">Networking</h1>
        <div className="all-container">
           <img src={net} className="all-image" alt="all-image"/>
           <div className="all-sub-container">
              <p className="all-description">
              Choosing our networking service ensures expert installation, reliable connectivity, and tailored solutions. Benefit from scalable, secure, and efficient networks, backed by 24/7 support and cost-effective solutions. Stay ahead with up-to-date technology, all while receiving top-notch installation quality for optimal performance
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

export default   NetworkingDetails;
