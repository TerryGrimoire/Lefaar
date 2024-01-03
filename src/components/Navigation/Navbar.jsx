import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/">Accueil</Link>
      <Link to="/Actions">Nos actions</Link>
      <Link to="/Recherches">Nos recherches</Link>
    </nav>
  );
}

export default Navbar;
