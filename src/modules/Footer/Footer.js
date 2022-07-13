import Button from "../../components/Button/Button";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.text}>Showing 1 to 20 of 170,802 results</h3>
      <div className={styles.choseOption}>
        <div className={styles.selectWrapper}>
          <h3 className={styles.text}>Rows per page:</h3>
          <select className={styles.select}>
            <option value="1">30</option>
            <option value="2">40</option>
            <option value="3">50</option>
          </select>
        </div>
        <Button className={styles.button}>Previous</Button>
        <Button className={styles.button}>Next</Button>
      </div>
    </div>
  );
};
export default Footer;
