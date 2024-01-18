import React, { useEffect } from 'react';
import logo from '../../../assets/sideimg.jpeg';
import money from '../../../assets/new1.jpeg';
import slider1 from '../../../assets/new1.jpeg';
import slider2 from '../../../assets/new2.jpeg';
import slider3 from '../../../assets/new3.jpeg';
import slider4 from '../../../assets/new4.jpg';
import slider5 from '../../../assets/new5.jpg';
import { useNavigate } from 'react-router-dom';

import './Map.css';
const Map = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="main_Map">
        <div className="main_Map_innear">
          <div className="main_Map_innear10">
            <iframe
              className="main_fram_sss"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113801.50263214817!2d75.61319767646829!3d26.95749387301151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db433f43e0aad%3A0x776741ed5f155243!2sDigambar%20Jain%20Chandraprabh%20Mandir!5e0!3m2!1sen!2sin!4v1694227691933!5m2!1sen!2sin"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="main_Map_innear11">
            <h2>पहुचमार्ग</h2>
            <p>
              Address: Shri Chandraprabhu Digamber Jain Tirth Kshetra
              Chandragiri, Dongargarh, District-Rajnandgaon (Chhattisgarh)
              Village/Town : Rajkatta, Tahsil : Dongargarh, District India,
              Pincode : 491445 Rajnandgaon, State : CHHATTISGARH, Country
            </p>
          </div>
        </div>

        <div className="main_Map_innear">
          <div className="main_Map_innear12">
            <h2>अतिशय</h2>
            <p>
              Address: Shri Chandraprabhu Digamber Jain Tirth Kshetra
              Chandragiri, Dongargarh, District-Rajnandgaon (Chhattisgarh)
              Village/Town : Rajkatta, Tahsil : Dongargarh, District India,
              Pincode : 491445 Rajnandgaon, State : CHHATTISGARH, Country
            </p>
          </div>
          <div className="main_Map_innear13">
            <img
              src={money}
              alt="d"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>

      <div className="main_text_div_hai_na">
        <div className="main_text_div_hai_na1">
          <h2>नित्य कार्यक्रम</h2>
          <p>” मोक्षमार्ग तो, भीतर अधिक है, बाहर कम</p>
        </div>
        <div className="main_text_div_hai_na12">
          <h2>
            Address: Shri Chandraprabhu Digamber Jain Tirth Kshetra Chandragiri,
            Dongargarh, District-Rajnandgaon (Chhattisgarh) Village/Town :
            Rajkatta, Tahsil : Dongargarh, District India, Pincode : 491445
            Rajnandgaon, State : CHHATTISGARH, Country
          </h2>
        </div>
        <div className="main_bri_aur_pade">
          <button> और पढ़ें</button>
        </div>
        <div className="main_text_div_hai_na1">
          <h2>फोटो गैलरी</h2>
          <p>” मोक्षमार्ग तो, भीतर अधिक है, बाहर कम</p>
        </div>
        <div className="main_gallery">
          <img src={slider1} alt="dd" />
          <img src={slider2} alt="dd" />
          <img src={slider3} alt="dd" />
          <img src={slider1} alt="dd" />
          {/* <img src={slider2} alt="dd" />
          <img src={slider3} alt="dd" />
          <img src={slider1} alt="dd" />
          <img src={slider2} alt="dd" /> */}
        </div>
      </div>
    </>
  );
};

export default Map;
