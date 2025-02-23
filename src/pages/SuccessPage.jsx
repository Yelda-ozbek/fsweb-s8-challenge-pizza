import React from "react";
import "./SuccessPage.css";
import Logo from "./logo.svg";

const SuccessPage = () => {
  return (
    <div className="success-container">
      <header className="header">
        <img className="logo" src={Logo} alt="Logo" />
      </header>
      <main>
        <h2>TEBRİKLER!</h2><br/>
         <h2>SİPARİŞİNİZ ALINDI.</h2>
      
      </main>
    </div>
  );
};

export default SuccessPage;