import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import styles from "./productItem.module.css";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductItem = ({ product }) => {
  const { id, title, description, price, rating, category, image } = product;

  const { addToCart, isInCart, removeFromCart } = useContext(CartContext);

  const inCart = isInCart(id);

  const onAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
  };

  const onRemoveFromCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    removeFromCart(id);
  };
  return (
    <Link to={`/product/${id}`}>
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
          {!inCart && (
            <button onClick={onAddToCart} className={styles.cartBtn}>
              <FiShoppingCart /> Add to cart
            </button>
          )}
          {inCart && (
            <button onClick={onRemoveFromCart} className={styles.removecartBtn}>
              <FiShoppingCart /> Remove From cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
