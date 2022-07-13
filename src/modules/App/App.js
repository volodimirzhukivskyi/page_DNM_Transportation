import stylesGlobal from "../../global.module.css";
import styles from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import Filter from "../Filter/Filter";
import List from "../List/List";
import Footer from "../Footer/Footer";
import cn from "classnames";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={cn(stylesGlobal.container, styles.wrapper)}>
        <Navigation />
        <div className={styles.content}>
          <Filter setIsOpen={setIsOpen} />
          <List />
          <Footer />
        </div>
      </div>
      {isOpen && (
        <Modal
          click={() => setIsOpen(false)}
          header={"Filter"}
          closeButton={true}
          text={
            <div>
              <h3 className={styles.modalTitle}>Select a filter</h3>
              <CheckBox text={"filter1: text"} />
              <CheckBox text={"filter2: text"} />
              <CheckBox text={"filter3: text"} />
              <CheckBox text={"filter4: text"} />
              <Button
                onClick={() => setIsOpen(false)}
                className={styles.modalButton}
              >
                to filter
              </Button>
            </div>
          }
        />
      )}
    </>
  );
}

export default App;
