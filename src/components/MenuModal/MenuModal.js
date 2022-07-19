import styles from "./MenuModal.module.css";
import stylesButton from "../Button/Button.module.css";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";

function MenuModal(props) {
  const { actions, click } = props;
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
          <Button className={styles.closeButton} onClick={click}>
            <p className={styles.text}>close</p>
            <div className={styles.cross}></div>
          </Button>
        </div>
        <div className={styles.modalContent}>
          {" "}
          <div>
            <Navigation className={styles.mobileNav} />
            <div className={styles.butWrapper}>
              <Button className={styles.buttonTrack}>TRack shipment</Button>
              <Button
                className={[styles.buttonTransparent, stylesButton.longButton]}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
        {actions}
      </div>
    </div>
  );
}

export default MenuModal;
