/* eslint-disable @next/next/no-img-element */
import styles from "./cover.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Icon } from "@iconify/react";
const Cover = ({ dataMovies }) => {
  const items = [];
  return (
    <>
      {dataMovies
        .slice(11, 12)
        .map(({ title, genre_ids, overview, id, backdrop_path }) => {
          const style = {
            backgroundColor: "rgba(0,0,0,0.7)",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "soft-light",
          };
          return (
            <section className={styles.cover} style={style} key={id}>
              <>
                <div className={styles.details} key={id}>
                  <span className={styles.gender}>Best of 2021</span>
                  <h1>{title}</h1>
                  <p>{overview}</p>
                  <h3>
                    <span>Casting:</span>
                  </h3>
                  <h3>
                    <span>Genre:</span>
                  </h3>
                  <h3>
                    <span>Duration:</span>
                  </h3>
                </div>
                <div className={styles.video}>
                  <Icon className={styles.icon} />
                  <img
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt="movievideoplay"
                    className={styles.picture}
                  />
                </div>
              </>
            </section>
          );
        })}
    </>
  );
};

export default Cover;
