import styles from "./Navigation.module.css";
import Logo from "../../components/Logo/Logo";
import Link from "../../components/Link/Link";
import cn from "classnames";
const Navigation = () => {
  const linkInfo = {
    marketing: ["Contacts", "Content", "Templates"],
    planning: [
      "Destintations",
      "Search Supply",
      "Suppliers",
      "Trips",
      "Community",
    ],
    business: ["Commissions", "Reports"],
  };
  const createLinks = (objLinks) => {
    let listLinks = [];
    for (const link in objLinks) {
      listLinks.push(
        <li key={link} className={styles.li}>
          <h3 className={cn(styles.title, styles.hideBlockTitle)}>{link}</h3>
          {objLinks[link].map((text, i, arr) => (
            <Link key={i} text={text} />
          ))}
        </li>
      );
    }
    return listLinks;
  };
  return (
    <nav className={styles.container}>
      <div className={styles.headerNav}>
        <Logo
          logo={
            <h2 className={styles.logoAdaptive}>
              L<span className={styles.hideText}>ogo</span>
            </h2>
          }
        />
        <Link text={"Dashboard"} />
        <Link text={"Tasks"} />
      </div>

      <ul className={styles.ul}>{linkInfo && createLinks(linkInfo)}</ul>
      <div className={styles.footerNav}>
        <Link text={"Training & Help"} />
        <Link text={"Settings"} />
      </div>
    </nav>
  );
};
export default Navigation;
