import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/Services">Notre histoire</Link>
      <Link to="/Tarifs">Nos actions</Link>
      <Link to="/Contact">Nos recherches</Link>
    </nav>
  );
}

export default Navbar;
