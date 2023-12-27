import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import video from "../assets/video.mp4";

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
          <div className="main_title">
            <h1>Le Faar</h1>
            <h2>Formation, Animation, Accompagnement, Recherche</h2>
            <h3>Corps, Genres, Identités</h3>
            <Link to="/">
              <button type="button" className="button_style">
                En savoir plus
              </button>
            </Link>
          </div>
        </div>
        <div>
          <h2>La Formation</h2>
          <article>
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              natus veniam iste amet totam sed est, velit nulla pariatur atque
              cum fugit voluptatum temporibus. Explicabo maxime facilis tempore
              aut illo commodi consequatur deserunt odit? Distinctio nihil iste
              eligendi aspernatur placeat dolorem alias quasi modi recusandae
              voluptates, architecto temporibus repudiandae explicabo possimus
              harum aut odio! Explicabo suscipit architecto at optio doloremque
              nobis blanditiis maiores quam, dolores esse ab? Ut tempore facere
              consectetur, dolorem dignissimos quos! Necessitatibus eum placeat
              nam ipsam ipsa eius sed, laboriosam esse at obcaecati quos! Eum
              obcaecati voluptatum quisquam maiores voluptatibus ipsam, et
              necessitatibus distinctio deleniti dolor pariatur id aliquid,
              tempore rerum porro consequatur magnam non quae illo tempora. Odio
              sed architecto vitae corporis vero unde nostrum repellat
              consequatur laudantium eveniet, saepe numquam cumque adipisci
              expedita libero voluptas? Voluptas ipsam, nihil officiis saepe
              temporibus non soluta consequatur aspernatur, reprehenderit
              veritatis est, quam earum possimus a id atque.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
