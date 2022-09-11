import styles from "./Card.module.css";
import { ReactComponent as ProfileImg } from "../../../../assets/images/profile-img.svg";
interface ICard {
  username: string;
  industry: string;
  location: string;
}

const Card = (props: ICard) => {
  const { username, industry, location } = props;
  return (
    <div className={styles["container"]}>
      <div>
        <ProfileImg className={styles["img"]} />
      </div>
      <div className="my-4 text-center">
        <p className={styles["card-username"]}>{username}</p>
        <p className={styles["card-industry"]}>{industry}</p>
        <p className={styles["card-location"]}>{location}</p>
      </div>
      <div>
        <button className={styles["button"]}>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
