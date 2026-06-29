import Header from "../../components/header";
import Footer from "../../components/footer";
import { FiShoppingBag, FiTruck, FiShield, FiSend } from "react-icons/fi";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div>
      <Header title="ShopEase" />

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Elevate Your Style</h1>
          <p className={styles.heroSubtitle}>
            Discover premium products curated just for you. From fashion to
            electronics, find everything you need at unbeatable prices.
          </p>
          <button className={styles.heroBtn}>
            <FiShoppingBag /> Shop Now
          </button>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <FiTruck />
          </div>
          <h3 className={styles.featureTitle}>Free Shipping</h3>
          <p className={styles.featureDesc}>
            Free delivery on orders above $50. Fast and reliable worldwide
            shipping.
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <FiShield />
          </div>
          <h3 className={styles.featureTitle}>Secure Payments</h3>
          <p className={styles.featureDesc}>
            Shop with confidence. All transactions are protected with SSL
            encryption.
          </p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <FiShoppingBag />
          </div>
          <h3 className={styles.featureTitle}>Premium Quality</h3>
          <p className={styles.featureDesc}>
            Handpicked products from trusted brands ensuring the best quality
            for you.
          </p>
        </div>
      </section>

      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryImg}
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&q=80"
              alt="Men's Fashion"
            />
            <div className={styles.categoryOverlay}>
              <span className={styles.categoryName}>Men's Fashion</span>
            </div>
          </div>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryImg}
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80"
              alt="Women's Fashion"
            />
            <div className={styles.categoryOverlay}>
              <span className={styles.categoryName}>Women's Fashion</span>
            </div>
          </div>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryImg}
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80"
              alt="Electronics"
            />
            <div className={styles.categoryOverlay}>
              <span className={styles.categoryName}>Electronics</span>
            </div>
          </div>
          <div className={styles.categoryCard}>
            <img
              className={styles.categoryImg}
              src="https://images.unsplash.com/photo-1515562141589-67f0d93e3d7b?w=500&q=80"
              alt="Jewelery"
            />
            <div className={styles.categoryOverlay}>
              <span className={styles.categoryName}>Jewelery</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <h2 className={styles.newsletterTitle}>Stay in the Loop</h2>
        <p className={styles.newsletterDesc}>
          Subscribe to get exclusive offers and new arrivals straight to your
          inbox.
        </p>
        <div className={styles.newsletterForm}>
          <input
            className={styles.newsletterInput}
            type="email"
            placeholder="Enter your email"
          />
          <button className={styles.newsletterBtn}>
            <FiSend /> Subscribe
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
