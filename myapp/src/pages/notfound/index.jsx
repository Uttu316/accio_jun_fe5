import Header from "../../components/header";
import Footer from "../../components/footer";
import { FiHome, FiShoppingBag } from "react-icons/fi";
import { GiGhost } from "react-icons/gi";
import styles from "./notfound.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <Header title="ShopEase" />

      <section className={styles.container}>
        <div className={styles.errorCode}>404</div>
        <div className={styles.ghost}>
          <GiGhost />
        </div>
        <h1 className={styles.title}>Oops! Page Not Found</h1>
        <p className={styles.subtitle}>
          Looks like this page took a vacation and forgot to tell us. Don't
          worry, there's plenty more to explore!
        </p>
        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            <FiHome /> Go Home
          </button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            <FiShoppingBag /> Visit Store
          </button>
        </div>
        <div className={styles.funFact}>
          <p className={styles.funFactLabel}>Fun Fact</p>
          <p className={styles.funFactText}>
            The 404 error code was named after a room at CERN where the original
            web servers were housed. The room number? You guessed it — 404.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
