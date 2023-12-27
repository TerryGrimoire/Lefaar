import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import video from "../assets/video.mp4";

import duoFAAR from "../data/duoFAAR";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <div className="home_actions_container">
          {duoFAAR.map((el) => (
            <div key={el.id} className="home_actions">
              <img src={el.img} alt={el.alt} />
              <article>
                <h2>{el.title}</h2>
                <p>{el.text}</p>
                <Link to={el.link}>
                  {" "}
                  <button type="button" className="button_style">
                    Découvrir
                  </button>
                </Link>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
