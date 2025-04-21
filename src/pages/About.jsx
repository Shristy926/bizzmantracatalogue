import React from "react";
import Layout from "../Layout/Layout";
import fleet from "../assets/fleet.jpeg"; // Adjust path if needed

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="aboutusbackground">
        <div className="about">
          <div className="container text-center">
            <h1 className="display-4">About Bizzmantra</h1>
            <p className="lead">
              Get to know more about Dizitek and what we do
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={fleet}
                alt="Fleet Management"
                className="img-fluid rounded"
                style={{ height: "300px", width: "400px" }}
              />
            </div>
            <div className="col-md-6">
              <p>
               Bizzmantra is an end to end solution provider company.
               With our expertise in Software Development,Fleet Management,Solar and renewable energy solutions,
               Industrial iot solutions,Hardware, Machinery used in SWMS as well as industries, GPS tracking system, GPS Padlock, Fuel sensors, RFID Solutions, and many iot sensors.
                We provide a complete tech enabled ecosystem to ensure smooth operations.
              </p>  
              <p>
                Bizzmantra is a leading and
                cost-effective provider of innovative fleet and resource
                management solutions. Established in 2012, we are proud to be an
                ISO 9001:2015 certified organization committed to excellence. We
                offer robust and reliable GPS hardware along with powerful web
                and mobile platforms to help our clients efficiently manage
                individual vehicles or entire fleets. With a strong foundation
                of well-defined processes, we ensure the delivery of world-class
                service and support. 
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
            Our mission is to provide cost savings, security and business
            operation optimizations for vehicle fleets by providing innovative
            and complete solutions in a wide range of different industries
          </p>
        </div>
      </section>
    </Layout>
  );
}
