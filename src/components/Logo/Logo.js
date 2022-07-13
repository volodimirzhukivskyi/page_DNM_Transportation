import styles from "./Logo.module.css";
const Logo = ({ logo }) => {
  return <div className={styles.container}>{logo}</div>;
};
export default Logo;
