import { useState } from "react";
import styles from "./CheckBox.module.css";
import cn from "classnames";
const CheckBox = ({ text }) => {
  const [check, setCheck] = useState(false);

  return (
    <div className={cn(text && styles.container)}>
      <label className={styles.label}>
        <input
          onChange={() => setCheck(!check)}
          className={styles.random}
          type="checkbox"
        />
        <span className={cn(styles.checkbox, text && styles.lightBg)}>
          {check && (
            <img
              src={`${process.env.PUBLIC_URL}/image/other-icons/arrow.png`}
              alt={"arrow"}
            />
          )}
        </span>
      </label>
      {text && text}
    </div>
  );
};
export default CheckBox;
