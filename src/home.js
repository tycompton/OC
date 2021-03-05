import React from 'react';

const Home = () => {
  return (
    <div className="container"> 
      <section className="hero">
        <div className="parallax-image1">
          <div className="title">
            <h1 className="animate__animated animate__zoomIn animate__slower">Old Chigwellians' Club</h1>
          </div>
        </div>
      </section>
    
    <section className="contact">
      <div className="parallax-image2">
        <div className="address">
          <div className="address">
            Roding Lane <br/>
            Chigwell <br/>
            Essex <br/>
            IG7 6BE 
          </div>
        </div>
        <div className="telephone">
          <span>
            020 8500 2477
          </span>
        </div>       
      </div>
    </section>

      <section className="holding">
        <div className="parallax-image3">

        </div>
      </section>
    </div>
  );
};

export default Home;