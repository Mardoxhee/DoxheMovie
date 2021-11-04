import styles from "./details.module.scss";
import Card from "../../components/shared/Card";
import { Icon } from "@iconify/react";
import ReactPlayer from "react-player/youtube";
const Details = () => {
  return (
    <section className={styles.mainContenair}>
      <div className={styles.videoContenair}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          className={styles.video}
          style={({ height: "40vh" }, { width: "100vw" })}
        />
      </div>

      <div className={styles.details}>
        <h2 className={styles.title}>Film title</h2>
        <div className={styles.icones}>
          <h5 className={styles.iconeItem}>
            <Icon icon="bx:bx-time" />
            <span>8h 30</span>
          </h5>
        </div>
      </div>
      <p>
        description description description description description description
        description description description description description description
        description description description description description description
        description
      </p>
      <div className={styles.acteurs}>
        <h3>Acteurs</h3>
        <div className={styles.cardWrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className={styles.similar}>
        <h3>Contenus similaires</h3>
        <div className={styles.cardWrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Details;
