import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import papa from "papaparse";
import { Helmet } from "react-helmet";

function Actions({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [actions, setActions] = useState([]);
  const prepareData = (data2) => {
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data2.map((line) => {
      data2[0].forEach((key, j) => {
        if (line[j] !== "" && key !== "" && key) {
          obj = { ...obj, [key]: line[j] };
        }
      });

      return obj;
    });

    json.shift();
    setActions(json);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_ACTIONS)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
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
      <section className="actions_page_container">
        {actions.map((el) => (
          <Link to={`/Actions/${el.id}`} key={el.id}>
            <div className="action">
              <img src={el.image} alt={el.nom} />
              <h4>{el.nom}</h4>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Actions;
