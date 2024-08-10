// src/app/page.js

import React from "react";
import Hero from "./components/Hero";
import TourSearch from "./components/TourSearch";
import PopularDestinations from "./components/PopularDestinations";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <main>
      <article>
      <Hero />
      <TourSearch />
      <PopularDestinations />
      <Packages />
      <Gallery />
      <Cta />
      </article>
    </main>
    
  );
}
