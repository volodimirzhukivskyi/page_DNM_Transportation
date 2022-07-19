import styles from "./ButtonMenu.module.css";
import cn from "classnames";
const ButtonMenu = ({ className }) => {
  return (
    <button className={cn(className, styles.button)}>
      <p className={styles.text}>menu</p>
      <div className={styles.linesContainer}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </button>
  );
};
export default ButtonMenu;
