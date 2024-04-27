import React from 'react';

export default function About(){
  return (
    <section className="about" id="about">
        <div className="content">
          <div className="title aboutsec">About Us</div>
          <div className="about-details">
            <div className="left">
              <img src="./images/WaveLogo.png" alt="Wave Logo" />
            </div>
            <div className="right">
              <div className="topic">Wave Inc. is a global leader in life at home</div>
              <p>Whether you just moved into a new home or looking to revamp your current one, we at WAVE are here to inspire you with affordable home furniture solutions, there is a piece of furniture to every corner of your home. Create a home that is perfect for you.</p>
              <p>Shopping at WAVE is a bit different and exciting compared to your shopping at an everyday retail. It is about experiencing solutions first hand and getting to know ideas and inspirations that can fit perfectly into your home. That’s why, we offer more than 7500 products, solutions at our store along with home furnishing ideas and services for you to explore.</p>
            </div>
          </div>
        </div>
      </section>
  );
};