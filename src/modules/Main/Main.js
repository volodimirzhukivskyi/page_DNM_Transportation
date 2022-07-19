import Title from "../../components/Title/Title";
import stylesButton from "../../components/Button/Button.module.css";
import styles from "./Main.module.css";
import globalStyles from "../../global.module.css";
import cn from "classnames";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

const Main = () => {
  return (
    <div className={cn(globalStyles.container, styles.wrapper)}>
      <Title tag={"h1"}>We are hiring!</Title>
      <Title tag={"h3"}>The road is your second home? Join us!</Title>
      <div className={styles.content}>
        <div className={styles.userInfo}>
          <p className={styles.text}>
            We hire drivers from all across the United States, promoting quality
            opportunities for hardworking individuals of all backgrounds.
            <br /> <br /> We require our drivers to have a minimum of two years
            experience, knowing they have the skills and reputation to
            successfully take on any special requests we receive from our
            customers.
          </p>
          <div>
            <Form />
          </div>
        </div>
        <div className={styles.hideImg}>
          <img
            className={styles.pic}
            src={`${process.env.PUBLIC_URL}/image/heroPic.png`}
            alt="DNM Transportion"
          />
        </div>
      </div>
      <div className={styles.moreInfo}>
        <Title tag={"h2"}>
          Or send all needed information directly to our HR department
        </Title>
        <Button className={[styles.button, stylesButton.longButton]}>
          Apply Now
        </Button>
      </div>
    </div>
  );
};
export default Main;
