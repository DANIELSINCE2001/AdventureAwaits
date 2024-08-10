"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Roman Colosseum",
      location: "Italy",
      image: "./images/popular-1.jpg",
      description: "Explore the Roman Colosseum, an ancient amphitheater renowned for its grandeur and gladiatorial games.",
    },
    {
      id: 2,
      name: "Burj Khalifa",
      location: "Dubai",
      image: "./images/popular-2.jpg",
      description: "Experience the breathtaking views from the world's tallest building.",
    },
    {
      id: 3,
      name: "Kyoto Temple",
      location: "Japan",
      image: "./images/popular-3.jpg",
      description: "Immerse yourself in the serene beauty of ancient Kyoto temples.",
    },
    {
      id: 4,
      name: "Christ The Redeemer",
      location: "Brazil",
      image: "./images/popular-4.jpg",
      description: "Witness the iconic Christ the Redeemer statue atop Corcovado Mountain.",
    },
    {
      id: 5,
      name: "Great Wall",
      location: "China",
      image: "./images/popular-5.jpg",
      description: "Walk along the historic Great Wall and marvel at its vastness.",
    },
    {
      id: 6,
      name: "Eiffel Tower",
      location: "France",
      image: "./images/popular-6.jpg",
      description: "Enjoy a romantic view of Paris from the top of the Eiffel Tower.",
    },
    {
      id: 7,
      name: "Statue of Liberty",
      location: "USA",
      image: "./images/popular-7.jpg",
      description: "Explore the symbol of freedom at Liberty Island in New York.",
    },
    {
      id: 8,
      name: "Sydney Opera House",
      location: "Australia",
      image: "./images/popular-8.jpg",
      description: "Admire the architectural wonder of the Sydney Opera House.",
    },
    {
      id: 9,
      name: "Taj Mahal",
      location: "India",
      image: "./images/popular-9.jpg",
      description: "Visit the stunning Taj Mahal, a symbol of love and architectural beauty.",
    },
  ];

  const [rowsToShow, setRowsToShow] = useState(1);
  const destinationsPerRow = 3;
  const totalRows = Math.ceil(destinations.length / destinationsPerRow);

  const loadMoreDestinations = () => {
    setRowsToShow(totalRows);
  };

  const showLessDestinations = () => {
    setRowsToShow(1);
  };

  const displayedDestinations = destinations.slice(
    0,
    rowsToShow * destinationsPerRow
  );

  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Uncover place</p>

        <h2 className="h2 section-title">Popular destination</h2>

        <p className="section-text">
        Explore our handpicked list of must-visit destinations, each offering unique charm and unforgettable experiences. Discover vibrant cities, serene landscapes, and iconic landmarks that promise your next adventure.
        </p>

        <ul className="popular-list">
          {displayedDestinations.map((destination) => (
            <li key={destination.id}>
              <div className="popular-card">
                <figure className="card-img">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    width={500} // adjust as needed
                    height={300} // adjust as needed
                    quality={75} // optimize image quality
                  />
                </figure>

                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">{destination.location}</a>
                  </p>

                  <h3 className="h3 card-title" style={{ color: "black" }}>
                    <a href="#">{destination.name}</a>
                  </h3>

                  <p className="card-text">{destination.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="button-container">
          {rowsToShow < totalRows ? (
            <button className="btn btn-primary" onClick={loadMoreDestinations}>
              More Destinations
            </button>
          ) : (
            <button className="btn btn-primary" onClick={showLessDestinations}>
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;




