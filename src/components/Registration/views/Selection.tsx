import { Link } from "react-router-dom";
import styles from "./Selection.module.css";
interface ISelection {
  handleClose: (openState?: boolean) => void;
}

const Selection = (props: ISelection) => {
  const { handleClose } = props;

  return (
    <div className={styles["container-selection"]}>
      <h2 className={styles["selection-title"]}>
        Are You An Advisor or A Job Hunter?
      </h2>
      <Link
        to="/job-hunter"
        className={styles["link"]}
        onClick={() => handleClose(false)}
      >
        Job Hunter
      </Link>
      <Link
        to="/advisor"
        className={styles["link"]}
        onClick={() => handleClose(false)}
      >
        Advisor
      </Link>
    </div>
  );
};

export default Selection;
