import about from "../assets/about.webp"
import "./About.css"
const  About = () => {
  return (
    <div className="about-main-container-1" > 
    <div className="about-main-container-2">
        <img src={about} className="about" alt="about"/>
        <div className="about-part">
        <div>
            <h1 className="heading">A Few Words About</h1>
            <h2 className="main-heading">Our Team</h2>
            <p className="about-description">Our journey has been marked by the collective expertise of a team that brings diverse skills and a shared commitment to excellence. From engineers and environmental scientists to maintenance specialists, every member of the Kennwei family contributes to our success and the success of our clients.</p>
          </div>
          <div>
            
            <h2 className="main-heading">Commitment to Sustainability</h2>
            <p className="about-description">Kennwei is more than a business; we are stewards of the environment. Our commitment to sustainability is woven into the fabric of our company culture. Through innovative technologies and environmentally conscious practices, we aim to create a positive impact on the world's water resources.</p>
          </div>
          <div>
            
            <h2 className="main-heading">Milestones</h2>
            <p className="about-description">Over the years, we have reached significant milestones. From pioneering projects that pushed the boundaries of water treatment to establishing long-lasting relationships with clients, our journey has been marked by continuous growth and achievement.</p>
          </div>

        </div>
          
          
    </div>
    </div> 
  );
};

export default  About;
