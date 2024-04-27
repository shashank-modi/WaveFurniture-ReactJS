import React from 'react';
export default function Home1(){
    return (
        <>
        <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hello,</div>
            <div className="text-two">Welcome to <span id="title-wave">Wave.</span></div>
            <div className="text-three">Stand out even when you sit down.</div>
          </div>
          <div className="button">
            <button id="Learnmore" onClick={() => window.location.href='#services'}>Learn more</button>
          </div>
        </div>
        </section>
        </>
    );
};