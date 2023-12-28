import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import video from "../assets/video.mp4";
import logoSimple from "../assets/logo.png";

import duoFAAR from "../data/duoFAAR";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [partenaires, setPartenaires] = useState([]);

  const prepareData2 = (data2) => {
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
    setPartenaires(json);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_PARTENAIRES)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));
  }, []);

  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <section className="home">
        <div className="main_video">
          <video autoPlay loop muted>
            <track kind="captions" />
            <source src={video} type="video/mp4" />
          </video>
          <div className="main_title" />
          <div className="content_title">
            <h1>Le Faar</h1>
            <h2>Formation, Animation, Accompagnement, Recherche</h2>
            <h3>Corps, Genres, Identités</h3>
            <Link to="/">
              <button type="button" className="button_style">
                Découvrir notre histoire
              </button>
            </Link>
          </div>
        </div>
        <div className="home_FaarSmallExplanation">
          <img
            src={logoSimple}
            alt="logo de l'association Le Faar en version simplifiée"
          />
          <article>
            <h3>L'association Le Faar</h3>
            <p>
              L’association Le FAAR a pour vocation de créer des espaces de
              recherche, de sensibilisation et d’animation autour de la
              prévention des violences et des discriminations. Elle est le fruit
              d’une rencontre entre Betty Finet (psychologue clinicienne),
              Nathalie Carpentier (orthophoniste et éducatrice à la vie
              affective et sexuelle) et Jérémy Feytout (enseignant et animateur
              en santé sexuelle).
            </p>
            <button type="button" className="button_style">
              Découvrir notre histoire
            </button>
          </article>
        </div>
        <div className="home_actions_container">
          {duoFAAR.map((el) => (
            <div key={el.id} className="home_actions">
              <img src={el.img} alt={el.alt} />
              <article>
                <h2>{el.title.toUpperCase()}</h2>
                <p>{el.text}</p>
                <Link to={el.link}>
                  <button type="button" className="button_style">
                    Découvrir
                  </button>
                </Link>
              </article>
            </div>
          ))}
        </div>
        <div className="home_partenaires">
          <h3>Nos partenaires</h3>
          <ul>
            {partenaires.map((el) => (
              <li>
                <img src={el.img} alt={el.nom} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
