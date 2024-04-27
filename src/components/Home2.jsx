import React from 'react';

export default function Home2(){
  return (
    <section className="home1" id="home1">
        <div className="home1-content">
            <p className="text-one">Dining Tables</p>
            <p className="text-two">Leather-finished Table Models Available.</p>
            <p className="text-three">Pure and fine. High Quality Fabrics.</p>
            <div className="button">
                <button id="explore-tables" onClick={() => window.location.href = 'store.html'}>Explore Tables</button>
            </div>
        </div>
    </section>
  );
};
