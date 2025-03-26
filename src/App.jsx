import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Header1 />
    <Header2 />
    <Header3 />
    <Body />
    <Footer />
  </div>
);

export default App;
