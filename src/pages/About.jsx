import React from "react";
import Layout from "../Layout/Layout";
import fleet from "../assets/fleet.jpeg";
import "./about.css";

export default function About() {
  return ( 
  <Layout
      pageTitle="About Us"
      pageSubtitle="Smart Fleet Management Solutions for Modern Businesses"
    >
      {/* About Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src={fleet}
                alt="Fleet Management"
                className="img-fluid rounded"
                style={{ height: "300px", width: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <p>
                Bizzmantra is an end-to-end solution provider...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src={fleet}
                alt="Fleet Management"
                className="img-fluid rounded"
                style={{ height: "300px", width: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <p>
                Bizzmantra is an end-to-end solution provider. With our
                expertise in Software Development, Fleet Management, Solar and
                renewable energy solutions, Industrial IoT solutions, Hardware,
                Machinery, GPS tracking systems, RFID Solutions, and more, we
                provide a complete tech-enabled ecosystem to ensure smooth
                operations.
              </p>
              <p>
                Established in 2012, Bizzmantra is ISO 9001:2015 certified and
                offers robust GPS hardware along with web and mobile platforms
                to efficiently manage vehicles or entire fleets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Our Mission</h2>
          <p className="lead">
            Our mission is to provide cost savings, security, and operational
            optimization for vehicle fleets by delivering innovative and
            complete solutions across different industries.
          </p>
        </div>
      </section>
    </Layout>
  );
}
