import { useNavigate } from 'react-router-dom';


import "./ProductCard.css"

import stp from "../assets/stp.png"
import etp  from "../assets/etp.png"
import ros  from "../assets/ros.png"
import ws  from "../assets/ws.png"
import ec  from "../assets/ec.png"
import amc  from "../assets/amc.png"
import wtu  from "../assets/wtu.png"
import atpa from "../assets/atpa.png"
import uswp  from "../assets/uswp.png"
import alwp  from "../assets/alwp.png"
import scro  from "../assets/scro.png"
import pro  from "../assets/pro.png"
import sfdwp  from "../assets/sfdwp.png"
import gold  from "../assets/gold.jpeg"
import plantinum from "../assets/plantinum.jpeg"
import hot  from "../assets/hot.png"
import hot25 from "../assets/hot25.png"
import cc from "../assets/cc.png"
import net from "../assets/net.png"
import fire from "../assets/fire.png"
import intercom from "../assets/intercom.png" 

const ProductCard = () => {
  const navigate = useNavigate()

  const navigateToStp = () => {
    navigate("/stpDetails")
  }
  const navigateToETPDetails =() => {
    navigate("/etpDetails")
  }
  const navigateToRODetails = () => {
    navigate("/roDetails")
  }
  const navigateToWSDetails = () => {
    navigate("/wsDetails")
  }
  const navigateToECDetails = () => {
    navigate("/ecDetails")
  }
  const navigateToAMCDetails = () => {
    navigate("/amcDetails")
  }
  const navigateToWTUDetails = () => {
    navigate("/wtuDetails")
  }
  const navigateToAllPlantsDetails = () => {
    navigate("/allPlantsDetails")
  }
  const navigateToUSWPDetails = () => {
    navigate("/uswpDetails")
  }
  const navigateToAlkalineDetails = () => {
    navigate("/alkalinePlantdetails")
  }
  const navigateToScroDetails =  () => {
    navigate("/scroDetails")
  }
  const navigateToPrimeDetails = () => {
    navigate("/primeDetails")
  }
  const  navigateToSilverDetails = () => {
    navigate("/silverDetails")
  }
  const navigateToGoldDetails =  () => {
    navigate("/goldDetails")
  }
  const navigateToPlatinumDetails = () => {
    navigate("/platinumdetails")
  }
  const navigateToHotWater15Details = () => {
    navigate("/hotwater15")
  }
  const navigateToHotWater25Details =  () => {
    navigate("/hotwater25")
  }
  const navigateToCCDetails = () => {
    navigate("/ccDetails")
  }
  const navigateToNetworkingDetails =  () => {
    navigate("/networkingDetails")
  }
  const navigateToFireDetails = () => {
    navigate("/fireDetails")
  }
  const navigateToIntercomDetails = () => {
    navigate("/intercomDetails")
  }
  
  

  return (
    <>
     <li className="product">
       <img src={stp}     alt="product" className="product-image"/>
          <div>
            <h1>Sewage Treatment Plant (STP)</h1>
            <p>We provide manual and automatic plants. Revolutionize waste management with cutting-edge STP solutions.</p>
            <button type="button" onClick={navigateToStp}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={etp}   alt="product" className="product-image"/>
          <div>
            <h1>Effluent Treatment Plant (ETP)</h1>
            <p>We provide manual and automatic plants. Advanced ETP – a sustainable solution for clean water and a greener tomorrow!</p>
            <button type="button" onClick={navigateToETPDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={ros} alt="product" className="product-image"/>
          <div>
            <h1>Reverse Osmosis Systems</h1>
            <p>We provide manual and automatic plants. Revolutionize waste management with cutting-edge STP solutions.</p>
            <button type="button" onClick={navigateToRODetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={ws}    alt="product" className="product-image"/>
          <div>
            <h1>Water Softener</h1>
            <p>We provide manual and automatic softeners from 100 liters per day to 100 KLD per day</p>
            <button type="button" onClick={navigateToWSDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={ec}     alt="product" className="product-image"/>
          <div>
            <h1>Environmental Consultancy</h1>
            <p>We maintain properly</p>
            <button type="button" onClick={navigateToECDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={amc}     alt="product" className="product-image"/>
          <div>
            <h1>AMC For All Types Of Treatment Units</h1>
            <p>We provide AMC for manual and automatic plants</p>
            <button type="button" onClick={navigateToAMCDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={wtu}     alt="product" className="product-image"/>
          <div>
            <h1>Wastewater Treatment Units</h1>
            <p>We provide service for manual and automatic plants.</p>
            <button type="button" onClick={navigateToWTUDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={atpa}     alt="product" className="product-image"/>
          <div>
            <h1>All Types Plants Accessories</h1>
            <p>We are here to empower your operations to thrive by providing plant accessories.</p>
            <button type="button" onClick={navigateToAllPlantsDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={uswp}     alt="product" className="product-image"/>
          <div>
            <h1>Under Sink Water Purifier</h1>
            <p>We provide best quality plants.</p>
            <button type="button" onClick={navigateToUSWPDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={alwp}     alt="product" className="product-image"/>
          <div>
            <h1>KENNWEI Polypropylene Sandy Alkaline Water Purifier</h1>
            <p>We provide best quality plants</p>
            <button type="button" onClick={navigateToAlkalineDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={scro}     alt="product" className="product-image"/>
          <div>
            <h1>KENNWEI Sandy Copper RO UV Water Purifier</h1>
            <p>We provide best quality plants.</p>
            <button type="button" onClick={navigateToScroDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={pro}    alt="product" className="product-image"/>
          <div>
            <h1>KENNWEI Prime RO UV Water Purifier</h1>
            <p>We provide best quality plants.</p>
            <button type="button" onClick={navigateToPrimeDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={sfdwp}     alt="product" className="product-image"/>
          <div>
            <h1>KENNWEI Silver Flow Drinking Water Purifier</h1>
            <p>We provide best quality plants.</p>
            <button type="button" onClick={navigateToSilverDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={gold}     alt="product" className="product-image"/>
          <div>
            <h1>KENNWEI Golden Flow Drinking Water Purifier</h1>
            <p>We provide best quality plants</p>
            <button type="button" onClick={navigateToGoldDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={plantinum}    alt="product" className="product-image"/>
          <div>
            <h1>KENNWEI Platinum Flow Drinking Water Purifier</h1>
            <p>We provide best quality plants</p>
            <button type="button" onClick={navigateToPlatinumDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={hot}     alt="product" className="product-image"/>
          <div>
            <h1>KENNWEI Hot Water Geyser (15 liters)</h1>
            <p>We provide best quality with 15 liters storage</p>
            <button type="button" onClick={navigateToHotWater15Details} >Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={hot25}     alt="product" className="product-image"/>
          <div>
            <h1>KENNWEI Hot Water Geyser (25 liters)</h1>
            <p>We provide best quality with 25 liters storage.</p>
            <button type="button" onClick={navigateToHotWater25Details}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={cc}     alt="product" className="product-image"/>
          <div>
            <h1>CCTV Installation</h1>
            <p>Explore our budget-friendly packages without compromising on quality.</p>
            <button type="button" onClick={navigateToCCDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={net}    alt="product" className="product-image"/>
          <div>
            <h1>Networking</h1>
            <p>Networking enables devices to communicate, share resources, and access information.</p>
            <button type="button" onClick={navigateToNetworkingDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={fire}     alt="product" className="product-image"/>
          <div>
            <h1>Fire Alarm</h1>
            <p>Fire alarm detects smoke or fire, alerting occupants with loud sound, ensuring swift response for safety.</p>
            <button type="button" onClick={navigateToFireDetails}>Know More</button>
          </div>  
     </li>
     <li className="product">
       <img src={intercom}     alt="product" className="product-image"/>
          <div>
            <h1>Intercom</h1>
            <p>Intercom facilitates instant communication between individuals or devices, streamlining seamless and efficient dialogues</p>
            <button type="button" onClick={navigateToIntercomDetails}>Know More</button>
          </div>  
     </li>
    </> 
  )
}

export default ProductCard

 