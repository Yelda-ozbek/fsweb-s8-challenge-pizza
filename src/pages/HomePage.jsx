import React from "react";
import "./HomePage.css";
import Logo from "./logo.svg"

const HomePage = ({ navigateToOrder }) => {
  return (
    <div className="home-container">
      <header className="header">
        <img src={Logo} alt="Logo"/>
   
      </header>
      <main>
      <div className="slogan">
        <h2 >
          <span>KOD ACIKTIRIR<br />
PİZZA DOYURUR </span>
        </h2>
        <button className="bn" onClick={navigateToOrder}>ACIKTIM </button>
        </div>
       



      </main>
    </div>
  );
};

export default HomePage;

