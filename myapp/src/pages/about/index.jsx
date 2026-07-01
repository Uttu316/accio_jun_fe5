import { FiHeart, FiGlobe, FiUsers, FiAward } from "react-icons/fi";
import styles from "./about.module.css";
import PageWrapper from "../../components/pageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper title="ShopEase">
      <section className={styles.banner}>
        <div className={styles.bannerOverlay}></div>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>About Us</h1>
          <p className={styles.bannerSubtitle}>
            We are passionate about delivering quality products and
            unforgettable shopping experiences to customers worldwide.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <img
          className={styles.storyImg}
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
          alt="Our Story"
        />
        <div className={styles.storyContent}>
          <h2 className={styles.storyTitle}>Our Story</h2>
          <p className={styles.storyText}>
            Founded in 2020, ShopEase started with a simple mission: make
            premium products accessible to everyone. What began as a small
            online store has grown into a trusted marketplace serving thousands
            of happy customers around the globe.
          </p>
          <p className={styles.storyText}>
            We partner with top brands and artisans to bring you curated
            collections that combine quality, style, and value. Every product on
            our platform goes through rigorous quality checks to ensure you
            receive nothing but the best.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiHeart />
            </div>
            <h3 className={styles.valueTitle}>Customer First</h3>
            <p className={styles.valueDesc}>
              Every decision we make starts with our customers. Your
              satisfaction is our priority.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiGlobe />
            </div>
            <h3 className={styles.valueTitle}>Global Reach</h3>
            <p className={styles.valueDesc}>
              We ship to over 50 countries, making quality products available
              everywhere.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiAward />
            </div>
            <h3 className={styles.valueTitle}>Quality Assured</h3>
            <p className={styles.valueDesc}>
              Every product is vetted for quality, ensuring you always get
              premium items.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiUsers />
            </div>
            <h3 className={styles.valueTitle}>Community Driven</h3>
            <p className={styles.valueDesc}>
              Built by a team that listens. Your feedback shapes our future.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <img
              className={styles.teamImg}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              alt="Team member"
            />
            <p className={styles.teamName}>Alex Morgan</p>
            <p className={styles.teamRole}>CEO & Founder</p>
          </div>
          <div className={styles.teamCard}>
            <img
              className={styles.teamImg}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
              alt="Team member"
            />
            <p className={styles.teamName}>Sarah Chen</p>
            <p className={styles.teamRole}>Head of Design</p>
          </div>
          <div className={styles.teamCard}>
            <img
              className={styles.teamImg}
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
              alt="Team member"
            />
            <p className={styles.teamName}>James Wilson</p>
            <p className={styles.teamRole}>Lead Developer</p>
          </div>
          <div className={styles.teamCard}>
            <img
              className={styles.teamImg}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
              alt="Team member"
            />
            <p className={styles.teamName}>Emily Davis</p>
            <p className={styles.teamRole}>Marketing Head</p>
          </div>
        </div>
      </section>

      <div
        style={{ padding: "0 1.5rem", maxWidth: "900px", margin: "3rem auto" }}
      >
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>50K+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>10K+</span>
            <span className={styles.statLabel}>Products</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>50+</span>
            <span className={styles.statLabel}>Countries</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>99%</span>
            <span className={styles.statLabel}>Satisfaction</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
