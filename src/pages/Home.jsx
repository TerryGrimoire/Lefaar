import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import video from "../assets/video.mp4";
import logoSimple from "../assets/logo.png";
import informations from "../assets/informations.png";
import actions from "../assets/actions.png";
import passculture from "../assets/passculture.png";

import duoFAAR from "../data/duoFAAR";
import actionsMenee from "../data/actionsMenee";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [partenaires, setPartenaires] = useState([]);
  const [equipe, setEquipe] = useState([]);

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
    setEquipe(json);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_PARTENAIRES)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData2(data2.data));

    fetch(import.meta.env.VITE_EQUIPE)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
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
                Découvrir nos actions
              </button>
            </Link>
          </div>
        </div>
        <div className="home_FaarSmallExplanation">
          <div className="home_first">
            <img
              src={logoSimple}
              alt="logo de l'association Le Faar en version simplifiée"
            />
            <article>
              <h3>L'association Le Faar</h3>
              <p>
                L’association Le FAAR a pour vocation de créer des espaces de
                recherche, de sensibilisation et d’animation autour de la
                prévention des violences et des discriminations. L'association
                est présente auprès de tous les publics : enfants, adolescents,
                adultes, femmes victimes de violences, personnes LGBTQIA+, etc.
              </p>
              <p>
                Nos thématiques balaient les questionnements autour de
                l’identité (de genre, sexuelle, linguistique et culturelle), de
                la vie affective, la santé sexuelle et la réduction des risques,
                les discriminations et tous les types de violences.
              </p>
              <div>
                <Link to="/Actions">
                  <img
                    src={informations}
                    alt="icone pour signaler une information"
                    className="icone"
                  />
                  Les actions de l'association
                </Link>
                <Link to="/Recherches">
                  <img
                    src={actions}
                    alt="icone pour signaler des actions"
                    className="icone"
                  />
                  Découvrir nos recherches
                </Link>
              </div>
            </article>
          </div>
          <div className="home_pass_container">
            <div className="home_pass_container_top">
              <h4>Le Pass Culture </h4>
              <img src={passculture} alt="logo du pass culture" />
            </div>
            <div className="home_pass">
              <article>
                <h4>
                  Le Faar est un partenaire officiel du ministère de l'Éducation
                  nationale, de la Jeunesse et des Sports.
                </h4>
                <p>
                  Depuis juin 2022, Le Faar est un partenaire officiel du
                  dispositif Pass Culture et son nom figure dans la base de
                  données Adage. Ainsi, nos interventions en milieux scolaires
                  sont intégralement financées par le Pass Culture.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="actions_menees_container">
          <h2>Les actions menées par Le Faar</h2>
          <div className="actions_menees">
            {actionsMenee.map((el) => (
              <div key={el.id}>
                <img src={el.img} alt={el.alt} />
                <h5>{el.h5}</h5>
                <p>{el.p}</p>
                <Link to="/actions">Découvrir</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="home_lequipe_container">
          <h2>L'équipe du Faar</h2>
          <div className="home_lequipe">
            {equipe.map((el) => (
              <div>
                <img
                  src={el.image}
                  alt={`portrait de ${el.nom} : ${el.metier}`}
                />

                <h5>{el.metier}</h5>
                <h4>{el.nom}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="home_actions_container">
          <h2>Les missions du Faar</h2>
          <div className="home_actions_container">
            {duoFAAR.map((el) => (
              <div key={el.id} className="home_actions">
                <img src={el.img} alt={el.alt} />
                <article>
                  <h3>{el.title}</h3>
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
        </div>

        <div className="home_partenaires">
          <h2>Nos partenaires</h2>
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
