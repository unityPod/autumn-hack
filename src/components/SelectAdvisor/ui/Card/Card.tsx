import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ProfileImg } from "../../../../assets/images/profile-img.svg";
interface ICard {
  username: string;
  industry: string;
  location: string;
}

const Card = (props: ICard) => {

  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate('/profile');
  };

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
        <button onClick={navigateToContacts} className={styles["button"]}>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
