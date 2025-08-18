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
  bgImages={[hero1, hero2, hero3]} // yahan tum multiple images de sakte ho
    >
      <section className="features-section">
        <div className="container">
          <h2 className="text-center mb-4">Our Key Features</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <i className="bi bi-geo-alt"></i>
                <h5 className="mt-3">Real-Time Tracking</h5>
                <p>Monitor vehicles live and optimize routes instantly.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <i className="bi bi-bar-chart-line"></i>
                <h5 className="mt-3">Performance Analytics</h5>
                <p>Detailed analytics for smarter business decisions.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <i className="bi bi-shield-check"></i>
                <h5 className="mt-3">Safety & Compliance</h5>
                <p>Stay compliant with regulations and ensure driver safety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 testimonials-section">
        <div className="container text-center">
          <h2 className="mb-5">Our Technology Partner</h2>
          <div className="row justify-content-center align-items-center">
            {[Teltonika, BFlux, APMKingstrack, Jointech, SchoolCanvas, Omnicomm, UFFIZIO, Dizitekiotsolutions, Microsoft, AWS]
              .map((img, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-2 mb-4">
                  <img src={img} alt={`Partner ${index + 1}`} className="img-fluid" />
                </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
