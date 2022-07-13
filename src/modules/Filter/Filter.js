import Tag from "../../components/Tag/Tag";
import tagStyle from "../../components/Tag/Tag.module.css";
import styles from "./Filter.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";
import FilterNav from "./FilterNav/FilterNav";
const Filter = ({ setIsOpen }) => {
  return (
    <div className={styles.wrapper}>
      <FilterNav />
      <div className={styles.filterContainer}>
        <div className={styles.filterBlock}>
          <label className={styles.label}>
            <img
              className={styles.inputImg}
              src="/image/icons-nav/Search%20Supply.png"
              alt="Search"
            />
            <input
              className={styles.input}
              type="text"
              placeholder={"Search items"}
            />
          </label>
          <Button
            onClick={() => setIsOpen(true)}
            bgColor={"#F9FAFB"}
            className={styles.buttonContainer}
          >
            <img
              className={styles.buttonImg}
              src="/image/other-icons/Sort.png"
              alt="Sort"
            />
            Filters
          </Button>
        </div>
        <div className={styles.filterBlock}>
          <div className={styles.chooseItem}>Check In</div>
          <div className={styles.chooseItem}>Check Out</div>
          <div className={styles.selectContainer}>
            <select
              className={cn(styles.chooseItem, styles.chooseSelect)}
              name="user_profile_color_1"
            >
              <option value="1">Guest</option>
              <option value="2">Guets</option>
              <option value="3">Guests</option>
              <option value="4">Gues</option>
              <option value="6">Guests</option>
            </select>
            <img
              className={styles.imgSelect}
              src="/image/other-icons/arrow.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
