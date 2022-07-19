import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/Button/Button";
import styles from "./Header.module.css";
import Link from "../../components/Link/Link";
import globalStyles from "../../global.module.css";
import cn from "classnames";
const Header = ({ setIsOpen }) => {
  return (
    <header className={styles.header}>
      <div className={cn(globalStyles.container, styles.content)}>
        <Link
          className={styles.logo}
          text={
            <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="logo" />
          }
        />
        <Navigation className={styles.menu} />
        <div className={styles.buttons}>
          <Button className={styles.button}>TRack shipment</Button>
          <Button className={styles.hideMenu} onClick={() => setIsOpen(true)}>
            <p className={styles.text}>menu</p>
            <div className={styles.linesContainer}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
