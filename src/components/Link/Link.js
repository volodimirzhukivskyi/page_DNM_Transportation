import React from "react";
import styles from "./Link.module.css";
import cn from "classnames";

function Link(props) {
  const { text, onClick, className } = props;
  return (
    <a className={cn(className, styles.link)} onClick={onClick}>
      <img
        src={`${process.env.PUBLIC_URL}/image/icons-nav/${text}.png`}
        className={styles.img}
        alt={text}
      />{" "}
      <p className={cn(styles.text, styles.hideText)}>{text}</p>
    </a>
  );
}

export default Link;
