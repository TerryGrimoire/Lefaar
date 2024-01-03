import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Erreur404({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="error">
      <Helmet>
        <title> {helmet.title} | Erreur404 </title>
        <link rel="canonical" href={`${helmet.href}/Erreur404`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <h2>Erreur404</h2>
      <p>Page non trouvée</p>
      <Link to="/">
        <button className="button_style" type="button">
          Retour à la page d'accueil
        </button>
      </Link>
    </div>
  );
}

export default Erreur404;
