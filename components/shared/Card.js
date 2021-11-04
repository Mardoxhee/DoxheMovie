/* eslint-disable @next/next/no-img-element */
import styles from "./card.module.scss";
import Image from "next/image";
import pic from "../../public/Assets/cardImage.jpg";
import loader from "../../public/Assets/loader.jpg";
import Link from "next/link";
const Card = ({ title, date, genre, cover, key }) => {
  const source = `https://image.tmdb.org/t/p/w500${cover}`;
  return (
    <div key={key} className={styles.wrapper} passHref>
      <div className={styles.imgContenair}>
        <img
          src={source ? source : loader.src}
          // src={pic}
          alt=""
          className={styles.pict}
        />
      </div>
      <div className={styles.details}>
        <h3>{title}</h3>
        <h4 className={styles.duration}>
          {date}
          <span>--{genre}</span>
        </h4>
      </div>
    </div>
  );
};

export default Card;
