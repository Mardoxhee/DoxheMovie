import styles from "./head.module.scss";

const Head = ({ title }) => {
  return (
    <div className={styles.headSide}>
      <h2>{title}</h2>
    </div>
  );
};

export default Head;
