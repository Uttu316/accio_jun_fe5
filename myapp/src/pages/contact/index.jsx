import Header from "../../components/header";
import Footer from "../../components/footer";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div>
      <Header title="ShopEase" />

      <section className={styles.banner}>
        <div className={styles.bannerOverlay}></div>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Get in Touch</h1>
          <p className={styles.bannerSubtitle}>
            We'd love to hear from you. Reach out to us with any questions,
            feedback, or support needs.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Contact Information</h2>
          <p className={styles.infoSubtitle}>
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <FiMail />
              </span>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>support@shopease.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <FiPhone />
              </span>
              <div>
                <p className={styles.infoLabel}>Phone</p>
                <p className={styles.infoValue}>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <FiMapPin />
              </span>
              <div>
                <p className={styles.infoLabel}>Address</p>
                <p className={styles.infoValue}>
                  123 Commerce St, New York, NY 10001
                </p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <FiClock />
              </span>
              <div>
                <p className={styles.infoLabel}>Working Hours</p>
                <p className={styles.infoValue}>Mon - Fri, 9AM - 6PM EST</p>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            <a className={styles.socialLink} href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a className={styles.socialLink} href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a className={styles.socialLink} href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a className={styles.socialLink} href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="firstName">
                First Name
              </label>
              <input
                className={styles.input}
                id="firstName"
                placeholder="John"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="lastName">
                Last Name
              </label>
              <input className={styles.input} id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">
              Subject
            </label>
            <input
              className={styles.input}
              id="subject"
              placeholder="How can we help?"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              placeholder="Write your message here..."
              rows="5"
            ></textarea>
          </div>
          <button className={styles.submitBtn} type="submit">
            <FiSend /> Send Message
          </button>
        </form>
      </section>

      <section className={styles.mapSection}>
        <img
          className={styles.mapImg}
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
          alt="Our location"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
