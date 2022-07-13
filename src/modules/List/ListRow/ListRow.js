import CheckBox from "../../../components/CheckBox/CheckBox";
import styles from "./ListRow.module.css";
import cn from "classnames";
const ListRow = ({ type, item }) => {
  const { name, suplier, location, vibe, perks, from, amenities } = item;
  return (
    <div
      className={cn(styles.wrapper)}
      style={{ backgroundColor: type === "title" ? "#F9FAFD" : false }}
    >
      <div>
        <CheckBox />
      </div>
      <div>{name}</div>
      <div className={styles.hideBlock}>{suplier}</div>
      <div className={styles.hideBlockTwo}>{location}</div>
      <div className={styles.hideBlock}>{vibe}</div>
      <div className={styles.hideBlock}>{perks}</div>
      <div>{from}</div>
      <div className={styles.hideBlock}>{amenities}</div>
    </div>
  );
};
export default ListRow;
