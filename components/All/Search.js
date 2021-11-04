import styles from "./search.module.scss";

const Search = () => {
  return (
    <div className={styles.mainContenair}>
      <form className={styles.formWrapper}>
        <input placeholder="Taper un titre ici" />

        <button>Rechercher</button>
      </form>
    </div>
  );
};

export default Search;
