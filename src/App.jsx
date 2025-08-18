import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import OurClients from "./pages/OurClients";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
