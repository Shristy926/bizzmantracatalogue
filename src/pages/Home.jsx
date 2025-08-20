import React from "react";
import Teltonika from "../assets/Teltonika.png";
import BFlux from "../assets/BFlux.jpg";
import APMKingstrack from "../assets/APMKingstrack.png";
import Jointech from "../assets/Jointech.png";
import SchoolCanvas from "../assets/SchoolCanvas.jpg";
import Omnicomm from "../assets/Omnicomm.jpg";
import Dizitekiotsolutions from "../assets/Dizitekiotsolutions.jpg";
import Microsoft from "../assets/Microsoft.png";
import AWS from "../assets/AWS.png";
import UFFIZIO from "../assets/UFFIZIO.png";
import Layout from "../Layout/Layout";
import hero1 from "../assets/home.jpeg";
import hero2 from "../assets/slide.jpeg";
import hero3 from "../assets/slide2.jpg";
import RealTimeImg from "../assets/realtime.jpg";
import PerformanceImg from "../assets/performance.png";
import SafetyImg from "../assets/safety.jpg";
import InnovativeGIF from "../assets/Innovative-IT-SOLUTIONS-.gif"; 
import { MapPin, BarChart2, ShieldCheck, Images } from "lucide-react";

export default function Home() {
  const partners = [
    Teltonika,
    BFlux,
    APMKingstrack,
    Jointech,
    SchoolCanvas,
    Omnicomm,
    UFFIZIO,
    Dizitekiotsolutions,
    Microsoft,
    AWS,
  ];

  const slides = [
    {
      bgImages: hero1,
      pageTitle: "Welcome to Bizzmantra",
      pageSubtitle: "Smart Fleet Management Solutions for Modern Businesses",
    },
    {
      bgImages: hero2,
      pageTitle: "Track Smarter, Drive Better",
      pageSubtitle: "Real-time insights for fleet optimization",
    },
    {
      bgImages: hero3,
      pageTitle: "Future of Fleet Intelligence",
      pageSubtitle: "Safety, compliance & performance redefined",
    },
  ];
  const cards = [
    {
      title: "Real-Time Tracking",
      description: "Monitor vehicles live and optimize routes instantly. Track fleet location, reduce fuel costs, and respond quickly to any unexpected delays.",
      Images: RealTimeImg,
    },
    {
      title: "Performance Analytics",
      description: "Detailed analytics for smarter business decisions. Access reports on fleet performance, driver behavior, and operational efficiency.",
      Images: PerformanceImg,
    },
    {
      title: "Safety & Compliance",
      description: "Stay compliant with regulations and ensure driver safety. Reduce accidents, monitor driver behavior, and maintain full compliance.",
      Images: SafetyImg,
    },
  ];

  return (
    <Layout slides={slides}>
<section className="py-5">
  <div className="container text-center">
    <div className="row">
      {cards.map((card, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="p-4 shadow rounded bg-white h-100">
            {/* Image */}
            <img
              src={card.Images}
              alt={card.title}
              className="img-fluid mb-3"
              style={{ height: "150px", objectFit: "contain" }}
            />

            {/* Title */}
            <h5>{card.title}</h5>

            {/* Description */}
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center">

      {/* Left Image */}
      <div className="col-md-6">
        <img
          src={InnovativeGIF}
          alt="Innovative IT Solutions"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "450px" }}
        />
      </div>

      {/* Right Content */}
      <div className="col-md-6 ps-md-4">
        <p className="text-muted mb-3">
          <strong>Bizzmantra</strong> is an end-to-end technology solutions provider.
          With expertise in Software Development, Fleet Management, Renewable Energy Solutions,
          Industrial IoT, GPS Tracking, and RFID, we deliver a complete tech-enabled ecosystem
          to ensure smooth operations for businesses.
        </p>
        <p className="text-muted mb-3">
          Established in <strong>2012</strong>, <strong>Bizzmantra</strong> is ISO 9001:2015 certified
          and offers robust GPS hardware along with scalable web and mobile platforms
          to manage vehicles and fleets effectively.
        </p>
        <p className="text-muted">
          Our mission is to empower businesses with innovative, reliable, and scalable
          technology solutions that improve efficiency, safety, and growth.
        </p>
      </div>

    </div>
  </div>
</section>

</section>
    <section className="py-16 w-full bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our <span className="text-indigo-600">Technology Partner</span>
          </h2>

          {/* Scrolling container */}
          <div className="relative w-full overflow-hidden group">
            <div className="flex animate-scroll space-x-16 group-hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex justify-center items-center"
                >
                  <img
                    src={img}
                    alt={`Partner ${index + 1}`}
                    className="h-24 sm:h-28 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
