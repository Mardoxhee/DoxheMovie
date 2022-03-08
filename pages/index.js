import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../public/Assets/LOGOMOVIE3.png";
import Link from "next/link";

const Landing = () => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.titleContent}>
        <h1>BIENVENUE SUR </h1>
        <div className={styles.logoContenair}>
          <Image className={styles.imgSelf} src={logo} alt="logo_picture" />
        </div>

        <Link href="/Accueil">
          <a>Get Started</a>
        </Link>
      </div>
    </section>
  );
};
export default Landing;
