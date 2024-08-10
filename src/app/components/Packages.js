"use client";

import React, { useState } from "react";

const Packages = () => {
  const [showAll, setShowAll] = useState(false);

  const packages = [
    {
      imgSrc: "./images/packages/packege-1.jpg",
      altText: "Thrilling Mountain Climbing Expedition",
      title: "Thrilling Mountain Climbing Expedition",
      text: "Push your limits with our exhilarating mountain climbing adventures, designed for thrill-seekers and outdoor enthusiasts.",
      time: "10D/9N",
      pax: "8",
      location: "Nepal",
      reviews: "(15 reviews)",
      rating: 5,
      price: "$1500",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-2.jpg",
      altText: "Serene Beach Getaway",
      title: "Serene Beach Getaway",
      text: "Unwind and rejuvenate with our peaceful beach retreats, offering luxury and tranquility by the sea.",
      time: "5D/4N",
      pax: "2",
      location: "Maldives",
      reviews: "(30 reviews)",
      rating: 5,
      price: "$1200",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-3.jpg",
      altText: "Cultural Exploration in Japan",
      title: "Cultural Exploration in Japan",
      text: "Immerse yourself in the rich cultural heritage of Japan with our exclusive cultural tours, including traditional ceremonies and local interactions.",
      time: "8D/7N",
      pax: "12",
      location: "Japan",
      reviews: "(45 reviews)",
      rating: 5,
      price: "$1800",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-4.jpg",
      altText: "Family Safari Adventure",
      title: "Family Safari Adventure",
      text: "Create lasting memories with our family-friendly safari adventures, featuring wildlife encounters and educational experiences.",
      time: "6D/5N",
      pax: "4",
      location: "South Africa",
      reviews: "(10 reviews)",
      rating: 5,
      price: "$2500",
      per: "per family"
    },
    {
      imgSrc: "./images/packages/packege-5.jpg",
      altText: "Solo Backpacking Across Europe",
      title: "Solo Backpacking Across Europe",
      text: "Explore Europe at your own pace with our solo traveler packages, offering a perfect blend of guided tours and solo exploration.",
      time: "14D/13N",
      pax: "1",
      location: "Europe",
      reviews: "(18 reviews)",
      rating: 5,
      price: "$2000",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-6.jpg",
      altText: "Romantic Getaway to Paris",
      title: "Romantic Getaway to Paris",
      text: "Celebrate love with our romantic escape packages, featuring enchanting experiences and intimate settings in the City of Love.",
      time: "5D/4N",
      pax: "2",
      location: "France",
      reviews: "(25 reviews)",
      rating: 5,
      price: "$1600",
      per: "per couple"
    },
    {
      imgSrc: "./images/packages/packege-7.jpg",
      altText: "Roman Colosseum",
      title: "Roman Colosseum",
      text: "Discover the history and grandeur of the Roman Empire with our guided tours of the Colosseum and other ancient landmarks.",
      time: "4D/3N",
      pax: "15",
      location: "Italy",
      reviews: "(50 reviews)",
      rating: 5,
      price: "$800",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-8.jpg",
      altText: "Burj Khalifa",
      title: "Burj Khalifa",
      text: "Experience the modern marvel of the Burj Khalifa, the tallest building in the world, with our exclusive Dubai tours.",
      time: "5D/4N",
      pax: "20",
      location: "Dubai",
      reviews: "(40 reviews)",
      rating: 5,
      price: "$1000",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-9.jpg",
      altText: "Kyoto Temple",
      title: "Kyoto Temple",
      text: "Immerse yourself in the tranquility and spirituality of Kyoto's ancient temples and beautiful gardens.",
      time: "6D/5N",
      pax: "10",
      location: "Japan",
      reviews: "(35 reviews)",
      rating: 5,
      price: "$1200",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-10.jpg",
      altText: "Christ The Redeemer",
      title: "Christ The Redeemer",
      text: "Marvel at the iconic Christ The Redeemer statue and explore the vibrant culture of Rio de Janeiro.",
      time: "7D/6N",
      pax: "12",
      location: "Brazil",
      reviews: "(28 reviews)",
      rating: 5,
      price: "$1400",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-11.jpg",
      altText: "Great Wall",
      title: "Great Wall",
      text: "Walk along the ancient Great Wall of China and discover the history and beauty of this world wonder.",
      time: "8D/7N",
      pax: "18",
      location: "China",
      reviews: "(55 reviews)",
      rating: 5,
      price: "$1600",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-12.jpg",
      altText: "Eiffel Tower",
      title: "Eiffel Tower",
      text: "Enjoy the romance and charm of Paris with our tours featuring the iconic Eiffel Tower and other famous landmarks.",
      time: "5D/4N",
      pax: "10",
      location: "France",
      reviews: "(42 reviews)",
      rating: 5,
      price: "$1500",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-13.jpg",
      altText: "Statue of Liberty",
      title: "Statue of Liberty",
      text: "Explore the history and significance of the Statue of Liberty and enjoy the vibrant city of New York.",
      time: "6D/5N",
      pax: "25",
      location: "USA",
      reviews: "(38 reviews)",
      rating: 5,
      price: "$1700",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-14.jpg",
      altText: "Sydney Opera House",
      title: "Sydney Opera House",
      text: "Experience the architectural wonder of the Sydney Opera House and the stunning beauty of Australia's coast.",
      time: "7D/6N",
      pax: "15",
      location: "Australia",
      reviews: "(30 reviews)",
      rating: 5,
      price: "$1800",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-15.jpg",
      altText: "Taj Mahal",
      title: "Taj Mahal",
      text: "Visit the majestic Taj Mahal and explore the rich history and culture of India with our guided tours.",
      time: "5D/4N",
      pax: "20",
      location: "India",
      reviews: "(60 reviews)",
      rating: 5,
      price: "$1300",
      per: "per person"
    },
    {
      imgSrc: "./images/packages/packege-16.jpg",
      altText: "Family Package to Roman Colosseum",
      title: "Family Package to Roman Colosseum",
      text: "Experience the ancient wonders of Rome with your family, including a guided tour of the Colosseum and other historic sites.",
      time: "5D/4N",
      pax: "4",
      location: "Italy",
      reviews: "(20 reviews)",
      rating: 5,
      price: "$2500",
      per: "per family"
    },
    {
      imgSrc: "./images/packages/packege-17.jpg",
      altText: "Family Package to Burj Khalifa",
      title: "Family Package to Burj Khalifa",
      text: "Enjoy a family vacation to Dubai, featuring a visit to the Burj Khalifa and other exciting attractions.",
      time: "6D/5N",
      pax: "4",
      location: "Dubai",
      reviews: "(25 reviews)",
      rating: 5,
      price: "$2800",
      per: "per family"
    },
    {
      imgSrc: "./images/packages/packege-18.jpg",
      altText: "Family Package to Kyoto Temple",
      title: "Family Package to Kyoto Temple",
      text: "Discover the beauty and serenity of Kyoto's temples and gardens with your family.",
      time: "5D/4N",
      pax: "4",
      location: "Japan",
      reviews: "(22 reviews)",
      rating: 5,
      price: "$2400",
      per: "per family"
    },
    {
      imgSrc: "./images/packages/packege-19.jpg",
      altText: "Family Package to Christ The Redeemer",
      title: "Family Package to Christ The Redeemer",
      text: "Explore the vibrant culture of Rio de Janeiro and visit the iconic Christ The Redeemer with your family.",
      time: "7D/6N",
      pax: "4",
      location: "Brazil",
      reviews: "(30 reviews)",
      rating: 5,
      price: "$3000",
      per: "per family"
    },
    {
      imgSrc: "./images/packages/packege-20.jpg",
      altText: "Family Package to Great Wall",
      title: "Family Package to Great Wall",
      text: "Walk along the Great Wall of China and experience the rich history and culture of China with your family.",
      time: "8D/7N",
      pax: "4",
      location: "China",
      reviews: "(35 reviews)",
      rating: 5,
      price: "$3200",
      per: "per family"
    },
    {
      imgSrc: "./images/packages/packege-21.jpg",
      altText: "Family Package to Eiffel Tower",
      title: "Family Package to Eiffel Tower",
      text: "Enjoy the charm of Paris with your family, featuring visits to the Eiffel Tower and other famous landmarks.",
      time: "6D/5N",
      pax: "4",
      location: "France",
      reviews: "(28 reviews)",
      rating: 5,
      price: "$2700",
      per: "per family"
    },
    {
      imgSrc: "./images/packages/packege-22.jpg",
      altText: "Family Package to Statue of Liberty",
      title: "Family Package to Statue of Liberty",
      text: "Discover the history and excitement of New York City with your family, including a visit to the Statue of Liberty.",
      time: "7D/6N",
      pax: "4",
      location: "USA",
      reviews: "(32 reviews)",
      rating: 5,
      price: "$2900",
      per: "per family"
    },
    {
      imgSrc: "./images/packages/packege-23.jpg",
      altText: "Family Package to Sydney Opera House",
      title: "Family Package to Sydney Opera House",
      text: "Experience the stunning beauty of Sydney and visit the iconic Sydney Opera House with your family.",
      time: "7D/6N",
      pax: "4",
      location: "Australia",
      reviews: "(30 reviews)",
      rating: 5,
      price: "$3100",
      per: "per family"
    },
    {
      imgSrc: "./images/packages/packege-24.jpg",
      altText: "Family Package to Taj Mahal",
      title: "Family Package to Taj Mahal",
      text: "Visit the majestic Taj Mahal and explore the rich history and culture of India with your family.",
      time: "5D/4N",
      pax: "4",
      location: "India",
      reviews: "(35 reviews)",
      rating: 5,
      price: "$2600",
      per: "per family"
    }
  ];

  const displayedPackages = showAll ? packages : packages.slice(0, 3);

  return (
    <section className="package" id="package">
      <div className="container">

        <p className="section-subtitle">Popular Packages</p>

        <h2 className="h2 section-title">Checkout Our Packages</h2>

        <p className="section-text">
          At Adventure Awaits, we offer a wide range of meticulously curated travel packages designed to cater to every type of adventurer. Whether you're seeking the thrill of adrenaline-pumping activities, the serenity of tranquil retreats, or the cultural richness of immersive experiences, we have the perfect package for you.
        </p>

        <ul className="package-list">
          {displayedPackages.map((pkg, index) => (
            <li key={index}>
              <div className="package-card">
                <figure className="card-banner">
                  <img src={pkg.imgSrc} alt={pkg.altText} loading="lazy"></img>
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title" style={{ color: "black" }}>{pkg.title}</h3>
                  <p className="card-text">{pkg.text}</p>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>
                        <p className="text">{pkg.time}</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="people"></ion-icon>
                        <p className="text">{pkg.pax}</p>
                      </div>
                    </li>
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="location"></ion-icon>
                        <p className="text">{pkg.location}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">{pkg.reviews}</p>
                    <div className="card-rating">
                      {Array.from({ length: pkg.rating }).map((_, starIndex) => (
                        <ion-icon key={starIndex} name="star"></ion-icon>
                      ))}
                    </div>
                  </div>
                  <p className="price">
                    {pkg.price}
                    <span>/ {pkg.per}</span>
                  </p>
                  <button className="btn btn-secondary">Book Now</button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {showAll ? (
          <button className="btn btn-primary" onClick={() => setShowAll(false)}>Show Less</button>
        ) : (
          <button className="btn btn-primary" onClick={() => setShowAll(true)}>View All Packages</button>
        )}

      </div>
    </section>
  );
};

export default Packages;

