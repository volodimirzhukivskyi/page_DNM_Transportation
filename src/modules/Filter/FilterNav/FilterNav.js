import styles from "./FilterNav.module.css";
import Tag from "../../../components/Tag/Tag";
import tagStyle from "../../../components/Tag/Tag.module.css";
import Button from "../../../components/Button/Button";
import cn from "classnames";

const FilterNav = () => {
  const bookingObjs = [
    { name: "Hotels", number: 170.802 },
    { name: "Cruises", number: 57 },
    { name: "TOURS", number: 9 },
    { name: "CARS", number: 13 },
  ];
  return (
    <div className={styles.navMain}>
      <nav className={styles.nav}>
        {bookingObjs.map(({ name, number }, i, array) => (
          <li key={i}>
            <a className={styles.link} href="#">
              <h3 className={styles.title}>{name}</h3>
              <Tag className={cn(tagStyle.blueTag, styles.hideText)}>
                {number}
              </Tag>
            </a>
          </li>
        ))}
      </nav>
      <Button className={styles.addButton}>
        <img
          className={styles.addButtonImg}
          src={`${process.env.PUBLIC_URL}/image/other-icons/cross.png`}
          alt="cross"
        />
        <span className={styles.hideText}>New Supply</span>
      </Button>
    </div>
  );
};
export default FilterNav;
