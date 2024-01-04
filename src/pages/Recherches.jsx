import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Recherches({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="secondary_page">
      <Helmet>
        <title> {helmet.title} | Recherches </title>
        <link rel="canonical" href={`${helmet.href}/Recherches`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="top_banniere recherches">
        <h2>Nos recherches</h2>
        <p>
          Notre spécificité est de coupler la recherche et l'action sur le
          terrain : Nos différentes actions et interventions viennent nourrir
          nos travaux de recherche.
        </p>

        <div className="veil" />
      </div>
    </div>
  );
}

export default Recherches;
