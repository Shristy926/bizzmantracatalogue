import React from "react";
import Layout from "../Layout/Layout";
import fleet from "../assets/fleet.jpeg";
import "./about.css";
import hero1 from "../assets/about-us.jpg";
import hero2 from "../assets/about1.jpg";

export default function About() {
  return (
    <Layout
  slides={[
    { bgImages: hero1, pageTitle: "About Us", pageSubtitle: "We are passionate about delivering smart fleet management solutions that empower businesses to grow." },
    { bgImages: hero2, pageTitle: "About Us", pageSubtitle: "We are passionate about delivering smart fleet management solutions that empower businesses to grow." }
  ]}
>
      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src={fleet}
                alt="Fleet Management"
                className="img-fluid rounded shadow"
                style={{ height: "300px", width: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <h2>Who We Are</h2>
              <p>
                Bizzmantra is an end-to-end technology solutions provider. With
                expertise in Software Development, Fleet Management, Renewable
                Energy Solutions, Industrial IoT, GPS Tracking, and RFID, we
                deliver a complete tech-enabled ecosystem to ensure smooth
                operations for businesses.
              </p>
              <p>
                Established in 2012, Bizzmantra is ISO 9001:2015 certified and
                offers robust GPS hardware along with scalable web and mobile
                platforms to manage vehicles and fleets effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Mission & Vision</h2>
          <div className="row">
            <div className="col-md-6">
              <h4>Our Mission</h4>
              <p>
                To provide cost savings, security, and operational optimization
                for vehicle fleets by delivering innovative and complete
                solutions across different industries.
              </p>
            </div>
            <div className="col-md-6">
              <h4>Our Vision</h4>
              <p>
                To become a global leader in fleet management and IoT-driven
                solutions, enabling businesses to thrive with smart, connected,
                and sustainable technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Core Values</h2>
          <div className="row">
            {[
              "Innovation",
              "Integrity",
              "Customer Satisfaction",
              "Reliability",
              "Sustainability",
            ].map((value, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="p-4 shadow rounded bg-white h-100">
                  <h5>{value}</h5>
                  <p>
                    We believe in {value.toLowerCase()} as a foundation of our
                    services to deliver the best to our customers.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Why Choose Us?</h2>
          <div className="row">
            {[
              "10+ Years of Industry Experience",
              "ISO 9001:2015 Certified",
              "Trusted by Leading Enterprises",
              "Complete End-to-End Solutions",
              "Innovative Technology Ecosystem",
              "24/7 Customer Support",
            ].map((point, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="p-3 rounded shadow-sm bg-white">
                  <p>{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
