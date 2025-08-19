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

// Lucide icons import
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
      {/* Features Section */}
       <section className="py-5 bg-gray-100">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col text-center"
    >
      {/* Image */}
      <img
        src={card.Images}
        alt={card.title}
        className="w-full h-40 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
        <p className="text-gray-600">{card.description}</p>
      </div>
    </div>
  ))}
</div>
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
