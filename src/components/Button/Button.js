import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

function Button(props) {
  const { bgColor, children, onClick, className } = props;
  return (
    <button
      className={cn(styles.button, className)}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
