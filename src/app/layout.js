// src/app/layout.js
import "./globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthForm from "./components/AuthForm";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
        <title>Adventure Awaits</title>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml"></link>
         <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"></link>
    </head>
      <body id="top">
        <Header />
        <AuthForm/>
        {children}
        <Footer />
        <a href="#top" className="go-top" data-go-top>
            <ion-icon name="chevron-up-outline"></ion-icon>
        </a>

        <script src="./assets/js/script.js"></script> 
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
}

