import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css"; 
import Teltonika from "../assets/Teltonika.png";
import BFlux from '../assets/BFlux.jpg'
import APMKingstrack from '../assets/APMKingstrack.png'
import Jointech from '../assets/Jointech.png'
import SchoolCanvas from '../assets/SchoolCanvas.jpg'
import Omnicomm from '../assets/Omnicomm.jpg'
import Dizitekiotsolutions from '../assets/Dizitekiotsolutions.jpg'
import Microsoft from '../assets/Microsoft.png'
import AWS from '../assets/AWS.png'
import UFFIZIO from '../assets/UFFIZIO.png'
export default function Home() {
  return (
    <Layout>
      <section className="background-slider">
        <div className="hero-overlay">
          <div className="container text-white">
            <h1 className="display-4">Welcome to Bizzmantra</h1>
            <p className="lead">
              Smart Fleet Management Solutions for Modern Businesses
            </p>
          </div>
        </div>
      </section>
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #e0f7fa 0%, #e3f2fd 100%)",
        }}
      >
        <div className="container">
          <h2 className="text-center mb-4">Our Key Features</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="bi bi-geo-alt fs-1 text-primary"></i>
              <h5 className="mt-3">Real-Time Tracking</h5>
              <p>Monitor vehicles live and optimize routes instantly.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-bar-chart-line fs-1 text-primary"></i>
              <h5 className="mt-3">Performance Analytics</h5>
              <p>Detailed analytics for smarter business decisions.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-shield-check fs-1 text-primary"></i>
              <h5 className="mt-3">Safety & Compliance</h5>
              <p>Stay compliant with regulations and ensure driver safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 testimonials-section">
        <div className="container text-center">
          <h2 className="mb-5">Our Tecnology Partner</h2>
            <div className="row justify-content-center align-items-center">
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={Teltonika} alt="Client 1" className="img-fluid" />
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={BFlux} alt="Client 2" className="img-fluid" />
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={APMKingstrack} alt="AKUMS Pharma Logo" />
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={Jointech} alt="Client 4" className="img-fluid" />
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={SchoolCanvas} alt="Client 4" className="img-fluid" />
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={Omnicomm} alt="Client 4" className="img-fluid" />
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={UFFIZIO} alt="Client 4" className="img-fluid" />
              </div>
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={Dizitekiotsolutions} alt="Client 4" className="img-fluid" />
              </div> 
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={Microsoft} alt="Client 4" className="img-fluid" />
              </div> 
              <div className="col-6 col-sm-4 col-md-2 mb-4">
                <img src={AWS} alt="Client 4" className="img-fluid" />
              </div>             
            </div>
          </div>
      </section>
    </Layout>
  );
}
