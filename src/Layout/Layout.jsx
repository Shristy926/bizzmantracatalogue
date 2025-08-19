import React, { useState, useEffect } from "react";
import homeBg from "../assets/home.jpeg";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ slides = [], children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  const currentSlide = slides[currentIndex];

  return (
    <>
      <Header />
      <section
        style={{
          position: "relative",
          height: "100vh",
          backgroundImage: `url(${currentSlide?.bgImages})`,
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
        />

        {/* Title & Subtitle */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            textAlign: "center",
            paddingTop: "40vh",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
          }}
        >
          <h1>{currentSlide?.pageTitle}</h1>
          {currentSlide?.pageSubtitle && <p>{currentSlide.pageSubtitle}</p>}
        </div>
      </section>

      <main style={{ padding: "20px" }}>{children}</main>
      <Footer />
    </>
  );
}
