import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={styles["container"]}>
      <input
        className={styles["input-container"]}
        placeholder="Search For Advisor"
      />
      <div className="absolute">
        <button type="submit" className={styles["button"]}>
          Find Now
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
