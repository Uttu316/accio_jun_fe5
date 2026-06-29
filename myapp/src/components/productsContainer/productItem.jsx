import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import styles from "./productItem.module.css";

const ProductItem = ({ product }) => {
  const { title, description, price, rating, category, image } = product;
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
        <p className={styles.rating}>
          <span className={styles.rateValue}>
            <FaStar /> {rating.rate}
          </span>
          <span className={styles.rateCount}>({rating.count})</span>
        </p>
        <p className={styles.description}>{description}</p>
        <button className={styles.cartBtn}>
          <FiShoppingCart /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
