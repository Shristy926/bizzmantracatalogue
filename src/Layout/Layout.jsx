import React, { useState, useEffect } from "react";
import homeBg from "../assets/home.jpeg";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, pageTitle, pageSubtitle, bgImages }) {
  console.log("Layout props:", pageTitle, pageSubtitle);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = bgImages?.length ? bgImages : [homeBg];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        ></div>

        {/* Title & Subtitle */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            textAlign: "center",
            paddingTop: "20vh",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
          }}
        >
          <h1>{pageTitle}</h1>
          {pageSubtitle && <p>{pageSubtitle}</p>}
        </div>
      </section>

      {/* Main Content */}
      <main style={{ padding: "20px" }}>{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
