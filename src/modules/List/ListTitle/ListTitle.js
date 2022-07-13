import { useState } from "react";
import styles from "./ListTitle.module.css";
const ListTitle = ({ title, hideButtons }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.container} onClick={() => setActive(!active)}>
      <h3
        className={styles.title}
        style={{ color: active ? "black" : "#687182" }}
      >
        {title}
      </h3>
      {!hideButtons && (
        <div className={styles.buttonsContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/image/other-icons/arrow_up.png`}
            alt="arrow_up"
          />

          <img
            src={`${process.env.PUBLIC_URL}/image/other-icons/arrow_down${
              active ? "_active" : ""
            }.png`}
            alt={`"arrow_down${active ? "_active" : ""}"`}
          />
        </div>
      )}
    </div>
  );
};
export default ListTitle;
