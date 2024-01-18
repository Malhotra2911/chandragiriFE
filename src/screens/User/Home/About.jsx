import React, { useEffect } from 'react';
import logo from '../../../assets/sideimg.jpeg';
import money from '../../../assets/money.jpeg';
import { useNavigate } from 'react-router-dom';
import './About.css';
const About = () => {
  const navigation = useNavigate();
  return (
    <>
      <div>
        <div className="mainbghomediv">
          <div className="home-left-img">
            <iframe
              className="home-left-img-video-ifram"
              src="https://www.youtube.com/embed/0zoxPR1hcug"
            ></iframe>
          </div>
          <div className="home-right-text">
            <div>
              <h2>
                श्री दिगम्बर जैन चंद्रागिरी
                <br />
                तीर्थ क्षेत्र ट्रस्ट डोंगरगढ़
              </h2>
              <div className="linnes-outer-div-main">
                <p>
                  Address: Shri Chandraprabhu Digamber Jain Tirth Kshetra
                  Chandragiri, Dongargarh
                  <br />
                  District-Rajnandgaon (Chhattisgarh) Village/Town : Rajkatta,
                  Tahsil : Dongargarh
                  <br />
                  District India, Pincode : 491445 Rajnandgaon, State :
                  CHHATTISGARH, Country
                </p>
              </div>
              <div className="main-start-btn-div">
                <button
                  onClick={() => navigation('/donation')}
                  className="donation-now-btn"
                >
                  और पढ़ें
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
