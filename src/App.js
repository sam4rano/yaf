
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Event from "./pages/Event";
import About from "./pages/About";
import Support from "./pages/Support";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="event" element={<Event />} />
          <Route path="support" element={<Support />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
