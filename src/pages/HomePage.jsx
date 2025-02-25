import React from "react";
import "./HomePage.css";
import Logo from "./logo.svg"
import PizzaImage from "./home-banner.png";

const HomePage = ({ navigateToOrder }) => {
  return (
    <div className="home-container">
      <header className="header">
        <img src={Logo} alt="Logo"/>
   
      </header>
      <main>
        <h2 >
          <span className="homepage">KOD ACIKTIRIR<br />
                                    PİZZA DOYURUR </span>
        </h2>
        <button className="bn" onClick={navigateToOrder}>ACIKTIM </button>
        <img src={PizzaImage} alt="Pizza" className="pizza-image" />
      </main>
    </div>
  );
};

export default HomePage;
