import {Routes,Route} from "react-router-dom"
import Header1 from "./components/Header1";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import StpDetails from "./carddetails/StpDetails";
import EtpDetails from "./carddetails/EtpDetails";
import RoDetails from "./carddetails/RoDetails";
import WsDetails from "./carddetails/WsDetails";
import EcDetails from "./carddetails/EcDetails";
import AmcDetails from "./carddetails/AmcDetails";
import WtuDetails from "./carddetails/WtuDetails";
import AllPlantsDetails from "./carddetails/AllPlantsDetails";
import UswpDetails from "./carddetails/UswpDetails";
import AlkalinePlantDetails from "./carddetails/AlkalinePlantDetails";
import ScroDetails from "./carddetails/ScroDetails";
import PrimeDetails from "./carddetails/PrimeDetails";
import SilverDetails from "./carddetails/SilverDetails";
import GoldDetails from "./carddetails/GoldDetails";
import PlatinumDetails from "./carddetails/PlatinumDetails";
import HotWater15 from "./carddetails/HotWater15";
import HotWater25 from "./carddetails/HotWater25";
import CcDetails from "./carddetails/CcDetails";
import NetworkingDetails from "./carddetails/NetworkingDetails";
import FireDetails from "./carddetails/FireDetails";
import IntercomDetails from "./carddetails/IntercomDetails";


const App = () => (
  <>
  <Header1/>
  <Routes>
    <Route path="/" element={<Body/>} />
    <Route path="/stpDetails" element={<StpDetails/>} />
    <Route path="/etpDetails" element={<EtpDetails/>} />
    <Route path="/roDetails" element={<RoDetails/>} />
    <Route path="/wsDetails" element={<WsDetails/>} />
    <Route path="/ecDetails" element={<EcDetails/>} />
    <Route path="/amcDetails" element={<AmcDetails/>} />
    <Route path="/wtuDetails" element={<WtuDetails/>} />
    <Route path="/allPlantsDetails" element={<AllPlantsDetails/>} />
    <Route path="/uswpDetails" element={<UswpDetails/>} />
    <Route path="/alkalinePlantdetails" element={<AlkalinePlantDetails/>} />
    <Route path="/scroDetails" element={<ScroDetails/>} />
    <Route path="/primeDetails" element={<PrimeDetails/>} />
    <Route path="/silverDetails" element={<SilverDetails/>} />
    <Route path="/goldDetails" element={<GoldDetails/>} />
    <Route path="/platinumdetails" element={<PlatinumDetails/>} />
    <Route path="/hotwater15" element={<HotWater15/>} />
    <Route path="/hotwater25" element={<HotWater25/>} />
    <Route path="/ccDetails" element={<CcDetails/>} />
    <Route path="/networkingDetails" element={<NetworkingDetails/>} />
    <Route path="/fireDetails" element={<FireDetails/>} />
    <Route path="/intercomDetails" element={<IntercomDetails/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/Gallery" element={<Gallery/>} />
    
  </Routes>
  <Footer/>
  </>
)
 

export default App;
