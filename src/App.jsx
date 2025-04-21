import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Industries from "./pages/Industries";
import OurClients from "./pages/OurClients";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="Clients" element={<OurClients/>}/>
        <Route path="/Industries" element={<Industries/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
