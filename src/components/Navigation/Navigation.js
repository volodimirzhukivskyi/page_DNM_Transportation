import Link from "../Link/Link";
import styles from "./Navigation.module.css";
import { paths } from "../../helpers/paths";
import cn from "classnames";

const Navigation = ({ className }) => {
  return (
    <nav className={cn(className, styles.ul)}>
      {paths.map((path, i) => (
        <li key={i}>
          <Link text={path} />
        </li>
      ))}
    </nav>
  );
};
export default Navigation;
