import { Link } from "react-router-dom";
<<<<<<< HEAD

=======
import styles from "./Selection.module.css";
>>>>>>> af4a674b6b143ef68702c9e983af88972214d58d
interface ISelection {
  handleClose: (openState?: boolean) => void;
}

const Selection = (props: ISelection) => {
  const { handleClose } = props;

  return (
<<<<<<< HEAD
    <div>
      <h2>Are You An Advisor or A Job Hunter?</h2>
      <Link to="/job-hunter" onClick={() => handleClose(false)}>
        Job Hunter
      </Link>
      <Link to="/advisor" onClick={() => handleClose(false)}>
=======
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
>>>>>>> af4a674b6b143ef68702c9e983af88972214d58d
        Advisor
      </Link>
    </div>
  );
};

export default Selection;
