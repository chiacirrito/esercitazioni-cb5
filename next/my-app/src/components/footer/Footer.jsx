import styles from "./index.module.scss";
import { FaWineBottle } from "react-icons/fa";
import ScrollToTop from "../scroll-top/Scroll-top";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wine}>
        <FaWineBottle className={styles.icon} />
        <FaWineBottle className={styles.icon} />
        <FaWineBottle className={styles.icon} />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Footer;
