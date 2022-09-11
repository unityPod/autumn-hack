import styles from "./Card.module.css";
import profileimg from "../../../../assets/images/profile-img.svg";

interface ICard {}

const Card = () => {
  return (
    <div className={styles["container"]}>
      <div>
        <img src={profileimg} alt="advisor" className={styles["img"]} />
      </div>
      <div className="my-4 text-center">
        <p className={styles["card-username"]}>Ester Howard</p>
        <p className={styles["card-industry"]}>Retail</p>
        <p className={styles["card-location"]}>Canada</p>
      </div>
      <div>
        <button className={styles["button"]}>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
