import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import papa from "papaparse";
import { Helmet } from "react-helmet";

function Action({ helmet }) {
  const { id } = useParams();

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

  const action = actions.filter(
    (el) => parseInt(el.id, 10) === parseInt(id, 10)
  )[0];

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Actions </title>
        <link rel="canonical" href={`${helmet.href}/Actions`} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      {action && (
        <section className="action_by_id">
          <div className="top">
            <img src={action.image} alt={action.nom} />
            <div>
              <h2>{action.nom}</h2>
              <small>{action.public}</small>
              <p>{action.description}</p>
            </div>
          </div>
          <div className="middle">
            <article>
              <h3>Notre méthodologie</h3>
              {action.methodes.split(";").map((el) => (
                <p>{el}</p>
              ))}
            </article>
            <div className="equipe">
              <h3>L'équipe</h3>
              <ul>
                {action.equipe &&
                  action.equipe.split(";").map((el) => <li>{el}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Action;
