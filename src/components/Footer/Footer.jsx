import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import region from "../../assets/region.png";
import ue from "../../assets/ue.png";

function Footer() {
  return (
    <footer className="flex-col align-center justify-center footer">
      <img src={logo} alt="logo de l'association Le Faar" />
      <p>
        Nous contacter :<a href="mailto:contact@lefaar.re">contact@lefaar.re</a>
        |<a href="tel:262692537812">06 92 53 78 12</a>
      </p>
      <p>
        Le Faar - Tous droits réservés. Site réalisé par le
        <a href="https://grimoire-numerique.re/">Grimoire Numérique</a>.
      </p>
      <p>
        Ce site a été financé à l’aide du FEDER (REACT-UE) dans le cadre de la
        réponse de l’Union Européenne à la pandémie COVID-19. L’Europe s’engage
        à La Réunion.
      </p>
      <div className="flex align-center justify-center">
        <img src={region} alt="logo de la Région Réunion" />
        <img src={ue} alt="logo de l'Union Européenne" />
      </div>
      <div className="final">
        <Link to="/Mentions">Mentions Légales</Link>
        <Link to="/Mentions">Politiques de confidentialité</Link>
      </div>
    </footer>
  );
}

export default Footer;
