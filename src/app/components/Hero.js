import React from "react";
import Image from 'next/image'; // Import Image from next/image htmlFor optimized images

const Hero = () => {
  return (
    <section className="hero" id="home" >
        <div className="container">

          <h2 className="h1 hero-title">Journey to explore world</h2>

          <p className="hero-text">
          Welcome to Adventure Awaits, your gateway to exploring the world's most captivating destinations. From breathtaking landscapes to vibrant cityscapes, find inspiration for your next journey and start planning unforgettable adventures today.
          </p>

          <div className="btn-group">
            <button className="btn btn-primary">Learn more</button>

            <button className="btn btn-secondary">Book now</button>
          </div>

        </div>
      </section>

  );
};

export default Hero;

