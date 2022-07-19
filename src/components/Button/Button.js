import React from "react";
import styles from "./Button.module.css";
import cn from "classnames";

function Button(props) {
  const { disabled, children, onClick, className } = props;
  return (
    <button
      disabled={disabled}
      className={cn(styles.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
