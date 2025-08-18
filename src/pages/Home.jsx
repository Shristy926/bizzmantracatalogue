import React from "react";
import "./Home.css";
import Teltonika from "../assets/Teltonika.png";
import BFlux from '../assets/BFlux.jpg';
import APMKingstrack from '../assets/APMKingstrack.png';
import Jointech from '../assets/Jointech.png';
import SchoolCanvas from '../assets/SchoolCanvas.jpg';
import Omnicomm from '../assets/Omnicomm.jpg';
import Dizitekiotsolutions from '../assets/Dizitekiotsolutions.jpg';
import Microsoft from '../assets/Microsoft.png';
import AWS from '../assets/AWS.png';
import UFFIZIO from '../assets/UFFIZIO.png';
import Layout from "../Layout/Layout";

// Yeh background images jo top hero section me slideshow ke liye use honge
import hero1 from "../assets/home.jpeg";
import hero2 from "../assets/slide.jpeg";
import hero3 from "../assets/slide2.jpg";

export default function Home() {
  return (
    <Layout
      pageTitle="Welcome to Bizzmantra"
  pageSubtitle="Smart Fleet Management Solutions for Modern Businesses"      
  bgImages={[hero1, hero2, hero3]} 
    >
<section 
  className="features-section py-5" 
  style={{ 
    background: "linear-gradient(135deg, #0f172a, #1e293b)", 
    margin: 0, 
    padding: "60px" // only vertical padding
  }}
>
  <div 
    className="container text-white" 
    style={{ margin: 0, padding: 0 }}
  >
    <h2 className="text-center mb-5 fw-bold">Our Key Features</h2>
    <div className="row text-center m-0">
      
      {/* Card 1 */}
      <div className="col-md-4 mb-4">
        <div 
          className="feature-card p-4 shadow-lg rounded-3 text-white h-100"
          style={{ background: "linear-gradient(135deg, #ff7e5f, #feb47b)" }}
        >
          <i className="bi bi-geo-alt fs-1"></i>
          <h5 className="mt-3">Real-Time Tracking</h5>
          <p>Monitor vehicles live and optimize routes instantly. Track fleet location, reduce fuel costs, and increase efficiency.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-4 mb-4">
        <div 
          className="feature-card p-4 shadow-lg rounded-3 text-white h-100"
          style={{ background: "linear-gradient(135deg, #43cea2, #185a9d)" }}
        >
          <i className="bi bi-bar-chart-line fs-1"></i>
          <h5 className="mt-3">Performance Analytics</h5>
          <p>Detailed analytics for smarter business decisions.Make data-driven decisions with detailed insights and reports.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 mb-4">
        <div 
          className="feature-card p-4 shadow-lg rounded-3 text-white h-100"
          style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
        >
          <i className="bi bi-shield-check fs-1"></i>
          <h5 className="mt-3">Safety & Compliance</h5>
          <p>Stay compliant with regulations and ensure driver safety.Ensure driver safety and stay compliant with government regulations.</p>
        </div>
      </div>

    </div>
  </div>
</section>
      <section className="py-5 tech-partner-section">
        <div className="container text-center">
          <h2 className="mb-5 section-title">
            Our <span>Technology Partner</span>
          </h2>
          <div className="row justify-content-center align-items-center">
            {[Teltonika, BFlux, APMKingstrack, Jointech, SchoolCanvas, Omnicomm, UFFIZIO, Dizitekiotsolutions, Microsoft, AWS]
              .map((img, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-2 mb-4 partner-logo">
                  <img src={img} alt={`Partner ${index + 1}`} className="img-fluid" />
                </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
