import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "../../public/Assets/LOGOMOVIE3.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.mainContenair}>
      <div className={styles.upSide}>
        <form className={styles.formContenair}>
          <input placeholder="your E-mail"></input>
          <button>S&apos;abonner</button>
        </form>
      </div>

      <div className={styles.downSide}>
        <div className={styles.logoSide}>
          <Image src={logo} className={styles.logo} alt="Logo" />
        </div>
      </div>
      <div className={styles.copyright}>
        <h5>Copyrights 2021 Mardoxhée Luviki All rights reserved. </h5>
      </div>
    </footer>
  );
};

export default Footer;
