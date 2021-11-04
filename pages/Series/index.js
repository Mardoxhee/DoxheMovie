import Head from "../../components/shared/head";
import Categories from "../../components/shared/categories";
import styles from "./index.module.scss";
import Card from "../../components/shared/Card";
const Series = ({ title }) => {
  return (
    <section className={styles.mainWrapper}>
      <Head title="Séries" />
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

export default Series;
