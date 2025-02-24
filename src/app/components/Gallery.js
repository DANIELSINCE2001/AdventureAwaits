// components/Packages.js

import React from "react";

const Packages = () => {
  

  return (
    <section className="gallery" id="gallery">
        <div className="container">

          <p className="section-subtitle">Photo Gallery</p>

          <h2 className="h2 section-title">Photo's From Travellers</h2>

          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <ul className="gallery-list">

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./images/gallery-1.jpg" alt="Gallery image"></img>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./images/gallery-2.jpg" alt="Gallery image"></img>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./images/gallery-3.jpg" alt="Gallery image"></img>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./images/gallery-4.jpg" alt="Gallery image"></img>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="./images/gallery-5.jpg" alt="Gallery image"></img>
              </figure>
            </li>

          </ul>

        </div>
      </section>

  );
};

export default Packages;
