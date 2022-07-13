import styles from "./ListItem.module.css";
import Tag from "../../../components/Tag/Tag";
import tagStyles from "../../../components/Tag/Tag.module.css";
import cn from "classnames";
const ListItem = ({ type, children }) => {
  if (type === "textName") {
    return <p className={cn(styles.text, styles.textName)}>{children}</p>;
  }
  if (type === "text") {
    return <p className={styles.text}>{children}</p>;
  }
  if (type === "tag") {
    return <Tag className={tagStyles.greenTag}>&#9679; {children}</Tag>;
  }
  if (type === "cost") {
    return (
      <p className={styles.costText}>
        us$ <span className={styles.costNum}>{children}k</span>
      </p>
    );
  }
  if (type === "icons") {
    return (
      <div className={styles.icons}>
        <img src="/image/other-icons/jump-rope.svg" alt="jump-rope" />
        <img src="/image/other-icons/pizza.svg" alt="pizza" />
        <img src="/image/other-icons/swimming.svg" alt="swimming" />
      </div>
    );
  }
  return children;
};
export default ListItem;
