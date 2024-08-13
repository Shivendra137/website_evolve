import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Hiddenoptions from './Hiddenoptions';
function Home() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick=()=> {
        setIsVisible(!isVisible);
    }
  return (
    <>

<Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </Helmet>
      <div className="homepage">

      <div className="hiddendiv">
          <img src="/public/logo(4).png" height="40" alt="" />
          <i onClick={handleClick} className="fa-solid fa-bars"></i>
        </div>
          
        {isVisible && <Hiddenoptions />}
        <div className="navbar">
          <div className="logo">
          <img src="/public/logo(4).png" height="40" alt="" />
          
          </div>
          <div className="options">
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/project">PROJECT</a>
            <a href="/team">TEAM</a>
            <a href="/faqs">FAQS</a>
            <a href="/contact">CONTACT</a>
          </div>
          <button className="e_cycle">E-CYCLE</button>
        </div>
        <div className="evolve">
          <img src="/public/logo(4).png" alt="" />
        </div>
        <div className="about_us">ABOUT US</div>
      </div>
    </>
  );
}

export default Home;
