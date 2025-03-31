import "./AllPlantsDetails.css"
import intercom from "../assets/intercom.png"

const  IntercomDetails = () => {
  return (
    <div className="sewage-container">
        
        <h1 className="all-title">Intercom</h1>
        <div className="all-container">
           <img src={intercom} className="all-image" alt="all-image"/>
           <div className="all-sub-container">
              <p className="all-description">
                Seamless Communication: Enhance connectivity and collaboration with our intercom solutions.
 and efficient communication experience.              </p>
              <div className="why-choose">
                <h2>🌍 Why Choose Us</h2>
                            <ul className="features">
              Instant Dialogues: Enjoy swift and efficient communication for quick decision-making.

              Reliability: Rely on our systems for consistent and dependable interconnectivity.

              Ease of Use: User-friendly interfaces for hassle-free operation and accessibility.

              Custom Solutions: Tailored intercom solutions to meet specific communication needs.

              Scalability: Systems that can easily grow with the evolving demands of your business.

              Quality Installation: Professional installation ensuring optimal performance.

              24/7 Support: Access round-the-clock support for timely issue resolution.

              Cutting-edge Technology: Stay ahead with the latest advancements in intercom technology.

              Customer Satisfaction: Choose us for a satisfying
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

export default  IntercomDetails;
