import React from "react";
import "./Home.css";
import Layout from "../Layout/Layout";
import PearlGlobal from "../assets/PearlGlobal.png";
import VYAPAM from "../assets/vyapam.jpg";
import VKRoadlines from "../assets/VKRoadlines.png";
import TNPSC from "../assets/TNPSC.png";
import SBLHomeo from "../assets/SBLHomeo.jpg";
import pidilite from "../assets/pidilite.png";
import NepalCustoms from "../assets/NepalCustoms.jpg";
import Kaleesuwari from "../assets/Kaleesuwari.png";
import Fastmove from "../assets/Fastmove.png";
import DYpatil from "../assets/DYpatil.png";
import IITMADRAS from "../assets/IITMADRAS.jpg";
import BiharSharif from "../assets/BiharSharif.jpg";
import Ashokleyland from "../assets/Ashokleyland.png";
import Himt from "../assets/Himt.jpg";
import JhansiSmartCity from "../assets/JhansiSmartCity.jpg";
import patnacorporation from "../assets/patnacorporation.jpg";
import ShaktiLogistics from "../assets/ShaktiLogistics.png";
export default function OurClients() {
  return (
    <Layout>
      <section className="ourclients">
        <div className="clients">
          <div className="container text-white">
            <h1 className="display-4">Our Valuable Clients</h1>
            <p className="lead">Together, We Innovate. Together, We Thrive.</p>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="container text-center">
          <h2 className="mb-4">Our Valuable Clients</h2>
          <div className="row justify-content-center align-items-center">
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={VKRoadlines} alt="Client 1" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={VYAPAM} alt="Client 2" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
            <img src={PearlGlobal} alt="AKUMS Pharma Logo" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={TNPSC} alt="Client 4" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={Kaleesuwari} alt="Client 1" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={NepalCustoms} alt="Client 2" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
            <img src={pidilite} alt="AKUMS Pharma Logo" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={Fastmove} alt="Client 4" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={BiharSharif} alt="Client 2" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
            <img src={IITMADRAS} alt="AKUMS Pharma Logo" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={DYpatil} alt="Client 4" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={JhansiSmartCity} alt="Client 2" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
            <img src={Himt} alt="AKUMS Pharma Logo" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={Ashokleyland} alt="Client 4" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={patnacorporation} alt="Client 4" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-4 col-md-2 mb-4">
              <img src={ShaktiLogistics} alt="Client 4" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
