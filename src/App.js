
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
// 
// import "./App.css";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Gallery from "./component/Gallery";
import Event from "./component/Event";
import About from "./component/About";
import Support from "./component/Support";
// import Offer from "./components/Offer";
// import Footer from "./components/Footer";
// import About from "./pages/About";
// import Benefits from "./pages/Benefits";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="event" element={<Event />} />
          <Route path="support" element={<Support />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {/* <Partners />
        <AboutUs />
        <HowItWork />
        <Benefit />
        <Offer />
        <Reviews />
        <Footer /> */}
      </Router>
    </>
  );
}

export default App;
