import style from "../Button/Button.module.css";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

function Modal(props) {
  const { header, closeButton, text, actions, click } = props;
  return (
    <div className={styles.containerModal} onClick={click}>
      <div
        className={styles.modalWindow}
        tabIndex="1"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.modalHeader}>
          <h2>{header}</h2>
          {closeButton && (
            <Button
              className={style.CloseButton}
              backgroundColor={"none"}
              onClick={click}
            >
              X
            </Button>
          )}
        </div>
        <div className={styles.modalContent}>{text}</div>
        {actions}
      </div>
    </div>
  );
}

export default Modal;
