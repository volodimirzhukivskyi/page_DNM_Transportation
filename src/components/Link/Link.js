import React from "react";
import styles from "./Link.module.css";
import cn from "classnames";

function Link(props) {
  const { text, onClick, className } = props;
  return (
    <a href={"#"} className={cn(className, styles.link)} onClick={onClick}>
      {text}
    </a>
  );
}

export default Link;
