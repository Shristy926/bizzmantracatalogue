import React from 'react';
import Layout from '../Layout/Layout';
import './Home.css';
import examintaion from '../assets/examintaion.jpg'; 
import Manufacturing from '../assets/Manufacturing.jpg'
import Construction from '../assets/Construction.jpg'
import Municipal from '../assets/Municipal.jpg'
import Passenger from '../assets/Passenger.jpg'
import Transportation from'../assets/Transportation.jpg' 
import Chain from '../assets/Chain.jpg'
import Ecommerce from '../assets/Ecommerce.jpg'
import hero1 from '../assets/industries.jpeg';
import hero2 from '../assets/industry.jpeg';
import "./Home.css"; 

export default function Industries() {
  return (
    <Layout
          pageTitle="Industries We Serve"
      pageSubtitle="Smart Fleet Management Solutions for Modern Businesses"      
      bgImages={[hero1, hero2]} 
        >
      {/* Industries Cards Section */}
      <section className="industries-section">
        <div className="industry-wrapper">
          {/* Card 1 */}
          <div className="industry-card">
          <img src={examintaion} alt="Industry 1" className="industry-image" style={{ height: "100px", width: "250px" }} />
          <h5> Examination Department</h5>
            <p> ensuring safety transit of confidential documents to various centers with help of our highly effective EMS solution.
            </p>
          </div>

          {/* Card 2 */}
          <div className="industry-card">
            <img src={Municipal} alt="Industry 2" className="industry-image" style={{height:"100px", width:"250px"}}/>
            <h5>Municipal bodies</h5>
            <p>We collect door to door waste collection data to make a complete waste collection ecosystem with no missed points and with our innovative swms machinery we are making waste collection more easy, sustainable and eco-friendly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="industry-card">
            <img src={Manufacturing} alt="Industry 3" className="industry-image" style={{ height: "100px", width: "250px" }}/>
            <h5>Manufacturing Industry </h5>
            <p>Bizzmantra plays a pivotal role in empowering manufacturers to thrive in the digital era. With their customized solutions, data-driven insights, and expertise in ERP, MES, IoT, and cybersecurity.</p>
          </div>

          {/* Card 4 */}
          <div className="industry-card">
            <img src={Construction} alt="Industry 4" className="industry-image" style={{height: "100px", width:"250px"}}/>
            <h5>Construction</h5>
            <p>Enhance your construction operations with our smart fleet and equipment management solutions. Gain complete visibility over machinery usage, optimize resource allocation, and reduce downtime with real-time tracking and analytics tailored for the construction industry.</p>
          </div>
          <div className="industry-card">
            <img src={Passenger} alt="Industry 3" className="industry-image" style={{height:"100px",width:"250px"}}/>
            <h5>Passenger Transit </h5>
            <p>Bizzmantra plays a pivotal role in empowering manufacturers to thrive in the digital era. With their customized solutions, data-driven insights, and expertise in ERP, MES, IoT, and cybersecurity.</p>
          </div>

          {/* Card 4 */}
          <div className="industry-card">
            <img src={Transportation} alt="Industry 4" className="industry-image" style={{height:"100px", width:"250px"}}/>
            <h5>Transportation & Logistics</h5>
            <p>Streamline your transportation and logistics operations with our intelligent fleet management system. Gain real-time insights into vehicle location, fuel consumption, and driver performance. Improve route optimization, reduce operational costs, and ensure on-time deliveries with full visibility and control.</p>
          </div>
          <div className="industry-card">
            <img src={Chain} alt="Industry 3" className="industry-image" style={{height:"100px", width:"250px"}}/>
            <h5>Cold chain Industries </h5>
            <p>Bizzmantra plays a pivotal role in empowering manufacturers to thrive in the digital era. With their customized solutions, data-driven insights, and expertise in ERP, MES, IoT, and cybersecurity.</p>
          </div>

          {/* Card 4 */}
          <div className="industry-card">
            <img src={Ecommerce} alt="Industry 4" className="industry-image" style={{height:"100px",width:"250px"}}/>
            <h5>E-commerce Logistics</h5>
            <p>Optimize last-mile delivery and inventory movement with our advanced logistics solutions tailored for the e-commerce industry. Ensure real-time tracking, route efficiency, and seamless warehouse-to-customer fulfillment. Boost customer satisfaction with faster, transparent, and cost-effective logistics management.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
