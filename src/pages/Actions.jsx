import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Actions({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="secondary_page">
      <Helmet>
        <title> {helmet.title} | Actions </title>
        <link rel="canonical" href={`${helmet.href}/Actions`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <div className="top_banniere actiions">
        <h2>Nos actions</h2>
        <p>
          La diversité de nos actions font la force de notre association. Nous
          touchons tous les publics, de tout âge, de toute origine, de toute
          orientation sexuelle.
        </p>

        <div className="veil" />
      </div>
    </div>
  );
}

export default Actions;
