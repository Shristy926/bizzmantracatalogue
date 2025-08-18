import './Footer.css';
import { FaClock, FaHeadphonesAlt, FaEnvelope } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer 
      className="footer text-white pt-5 pb-3"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)", // Navy gradient
        color: "#f8fafc"
      }}
    >
      <div className="container">
        <div className="row gy-4">

          {/* Column 1 - Logo + About */}
          <div className="col-12 col-md-6 col-lg-3">
            <img src={logo} alt="BizzMantra Logo" className="mb-3" style={{ maxWidth: "160px" }} />
            <p className="small" style={{ color: "#cbd5e1" }}>
              A young company based in Chennai (India), owned and managed by Technopreneurs who have a good amount of experience in Information Technology, Management and IoT Services.
            </p>
          </div>

          {/* Column 2 - Contact Info */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 style={{ color: "#fbbf24" }}>Contact Us</h5>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2"><FaClock className="me-2" style={{ color: "#fbbf24" }} /> Mon - Sat / 10AM - 7PM</li>
              <li className="mb-2"><FaHeadphonesAlt className="me-2" style={{ color: "#fbbf24" }} /> +91-8929553711</li>
              <li><FaEnvelope className="me-2" style={{ color: "#fbbf24" }} /> bizzmantra@outlook.com</li>
              <li><FaEnvelope className="me-2" style={{ color: "#fbbf24" }} /> support@bizzmantra.com</li>
              <li><FaEnvelope className="me-2" style={{ color: "#fbbf24" }} /> sales@bizzmantra.com</li>
            </ul>
          </div>

          {/* Column 3 - Links */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 style={{ color: "#fbbf24" }}>Links</h5>
            <ul className="list-unstyled small mt-3">
              {["Home", "About", "Industries", "Contact", "Term & Condition"].map((link, idx) => (
                <li key={idx} className="mb-2">
                  <BsChevronRight className="me-2" style={{ color: "#fbbf24" }} /> 
                  <a 
                    href="#" 
                    style={{ 
                      color: "#e2e8f0", 
                      textDecoration: "none",
                      transition: "color 0.3s ease" 
                    }}
                    onMouseOver={e => e.currentTarget.style.color = "#fbbf24"}
                    onMouseOut={e => e.currentTarget.style.color = "#e2e8f0"}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 style={{ color: "#fbbf24" }}>Newsletter</h5>
            <p className="small mt-3" style={{ color: "#cbd5e1" }}>
              Many aspects of computing and technology and the term is more recognizable than before.
            </p>
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="form-control mb-2" 
              style={{ 
                border: "none", 
                borderRadius: "6px" 
              }}
            />
            <button 
              className="btn w-100" 
              style={{
                background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                color: "#0f172a",
                fontWeight: "bold",
                border: "none",
                borderRadius: "6px",
                transition: "opacity 0.3s ease"
              }}
              onMouseOver={e => e.currentTarget.style.opacity = "0.9"}
              onMouseOut={e => e.currentTarget.style.opacity = "1"}
            >
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Bottom Note */}
        <div 
          className="text-center mt-4 pt-3" 
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <small style={{ color: "#94a3b8" }}>
            &copy; {new Date().getFullYear()} BizzMantra. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}