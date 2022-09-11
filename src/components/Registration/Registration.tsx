import styles from "./Registration.module.css";
import SlideOver from "./ui/SlideOver";
import { useState } from "react";
import Selection from "./views/Selection";

const Registration = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className={styles["container"]}>
      <h1 className={styles["comapany-title"]}>Career Guru</h1>
      <h2 className={styles["title"]}>Registration</h2>
      <button className={styles["button"]} onClick={handleOpen}>
        Start
      </button>
      <SlideOver open={open} onClose={handleClose} fullScreen>
        <Selection handleClose={handleClose} />
      </SlideOver>
    </div>
  );
};

export default Registration;
