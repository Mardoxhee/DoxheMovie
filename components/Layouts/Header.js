import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Logo from "../../public/Assets/LOGOMOVIE3.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
const Header = () => {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });
  return (
    <header
      className={
        header
          ? `${styles.mainWrapper} ${styles.active} `
          : `${styles.mainWrapper}`
      }
    >
      <div className={styles.logoContenair}>
        <Link href="/Accueil">
          <a>
            <Image src={Logo} alt="logo plateforme" className={styles.logo} />
          </a>
        </Link>
      </div>
      <nav className={styles.navigationSide}>
        <ul>
          <li>
            <Link href="/Accueil">
              <a> Accueil</a>
            </Link>
          </li>
          <li>
            <Link href="/Movies">
              <a> Movies</a>
            </Link>
          </li>
          <li>
            <Link href="/Series">
              <a> Series</a>
            </Link>
          </li>
          <li>
            <Link href="Search">
              <a className={styles.search}>
                <Icon icon="bx:bx-search" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
