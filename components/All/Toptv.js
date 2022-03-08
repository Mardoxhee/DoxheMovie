import Card from "../shared/Card";
import Link from "next/link";
import styles from "./topSeries.module.scss";

const Toptv = ({ datatv }) => {
  return (
    <section className={styles.mainWrapper}>
      <h2>Top Séries</h2>
      <div className={styles.cardWrapper}>
        {datatv.map(({ name, release_date, id, genre_ids, backdrop_path }) => {
          return (
            <Link href={"/Accueil/" + id} key={id}>
              <a>
                <Card
                  key={id}
                  title={name}
                  date={release_date}
                  genre={genre_ids}
                  cover={backdrop_path}
                />
              </a>
            </Link>
          );
        })}
      </div>
      <Link href="">
        <a className={styles.seemore}>voir plus</a>
      </Link>
    </section>
  );
};

export default Toptv;
