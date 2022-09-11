import styles from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["comapany-title"]}>Career Guru</h1>
      <h2 className={styles["title"]}>Registration</h2>
      <button className={styles["button"]}>Start</button>
    </div>
  );
};

export default Registration;
