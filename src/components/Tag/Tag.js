import cn from "classnames";
import styles from "./Tag.module.css";

const Tag = ({ children, className }) => {
  return <div className={cn(className, styles.tag)}>{children}</div>;
};
export default Tag;
