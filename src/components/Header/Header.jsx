import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Navigation/Nav";
import Navbar from "../Navigation/Navbar";
import burger from "../../assets/menu.png";
import logo from "../../assets/logo2.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

function Burger({ helmet }) {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="flex justify-between align-center">
      <button
        type="button"
        onClick={() => setOpenBurger(!openBurger)}
        className="mobile no_button"
      >
        <img
          src={burger}
          alt="menu de navigation sur le site internet - trois lignes de navigation"
          className="burger"
        />
      </button>
      <Link to="/">
        <img src={logo} alt={`logo de ${helmet.title}`} className="logo" />
      </Link>
      {openBurger && <Nav setOpenBurger={setOpenBurger} />}
      <div className="desktop">
        <Navbar setOpenBurger={setOpenBurger} />
      </div>
      <div className="social_media">
        <a
          href="https://www.facebook.com/AssociationLeFAAR"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="logo Facebook" />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="logo Instagram" />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="logo LinkedIn" />
        </a>
      </div>
    </header>
  );
}

export default Burger;
