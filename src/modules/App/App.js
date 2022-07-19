import styles from "./App.module.css";
import cn from "classnames";
import { useState } from "react";
import Header from "../Header/Header";
import MenuModal from "../../components/MenuModal/MenuModal";
import Main from "../Main/Main";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={cn(styles.wrapper)}>
        <div className={styles.content}>
          <Header setIsOpen={setIsOpen} />
          <Main />
        </div>
      </div>
      {isOpen && <MenuModal click={() => setIsOpen(false)} />}
    </>
  );
}

export default App;
