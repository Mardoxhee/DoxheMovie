import Head from "../../components/shared/head";
import Categories from "../../components/shared/categories";
import styles from "./movie.module.scss";
import Card from "../../components/shared/Card";
import Link from "next/link";
const Movies = ({ title }) => {
  return (
    <section className={styles.mainWrapper}>
      <Head title="Films" />
      <Categories />
      <div className={styles.cardWrapper}>
       
       
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <h4 className={styles.paginate}>Load more</h4>
    </section>
  );
};

export default Movies;
