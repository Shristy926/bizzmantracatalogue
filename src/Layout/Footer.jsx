import './Footer.css';
import { FaClock, FaHeadphonesAlt, FaEnvelope } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">

          {/* Column 1 - Logo + About */}
          <div className="col-12 col-md-6 col-lg-3">
            <img src={logo} alt="BizzMantra Logo" className="mb-3" style={{ maxWidth: "150px" }} />
            <p className="footer-text small">
              A young company based in Chennai (India), owned and managed by Technopreneurs who have a good amount of experience in Information Technology, Management and IoT Services.
            </p>
          </div>

          {/* Column 2 - Contact Info */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled small">
              <li><FaClock className="me-2" /> Mon - Sat / 10AM - 7PM</li>
              <li><FaHeadphonesAlt className="me-2" /> +91-8929553711</li>
              <li><FaEnvelope className="me-2" /> bizzmantra@outlook.com</li>
              <li><FaEnvelope className="me-2" /> support@bizzmantra.com</li>
              <li><FaEnvelope className="me-2" /> sales@bizzmantra.com</li>
            </ul>
          </div>

          {/* Column 3 - Links */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Links</h5>
            <ul className="list-unstyled footer-links small">
              <li><BsChevronRight /> Home</li>
              <li><BsChevronRight /> About</li>
              <li><BsChevronRight /> Industries</li>
              <li><BsChevronRight /> Contact</li>
              <li><BsChevronRight /> Term & Condition</li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Newsletter</h5>
            <p className="small">Many aspects of computing and technology and the term is more recognizable than before.</p>
            <input type="email" placeholder="Enter your email..." className="form-control mb-2" />
            <button className="btn btn-danger w-100">Subscribe Now</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
