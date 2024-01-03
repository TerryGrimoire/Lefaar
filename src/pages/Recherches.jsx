import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Recherches({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Recherches </title>
        <link rel="canonical" href={`${helmet.href}/Recherches`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section>
        <h1>Recherches</h1>
      </section>
    </div>
  );
}

export default Recherches;
