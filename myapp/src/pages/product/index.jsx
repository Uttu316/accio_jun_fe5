import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart, FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";
import styles from "./product.module.css";
import PageWrapper from "../../components/pageWrapper";

function ProductPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [quantity, setQuantity] = useState(1);

  const getProduct = async () => {
    setStatus("loading");
    try {
      const res = await fetch("https://fakestoreapi.com/products/" + productId);
      if (res.status >= 200 && res.status < 300) {
        const data = await res.json();
        setProduct(data);
        setStatus("done");
      } else {
        throw res;
      }
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (productId) {
      getProduct();
    }
  }, [productId]);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasProduct = isDone && product !== null;
  const noProduct = isDone && product === null;

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rate >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rate >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };

  const fakeOriginalPrice = product ? (product.price * 1.4).toFixed(2) : 0;
  const discountPercent = 29;

  return (
    <PageWrapper title="Product" className={styles.page}>
      <div className={styles.container}>
        {isLoading && (
          <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>Loading product details...</p>
          </div>
        )}

        {isError && (
          <div className={styles.error}>
            <h2>Something went wrong</h2>
            <p>We couldn't load this product. Please try again.</p>
            <button className={styles.retryBtn} onClick={getProduct}>
              Try Again
            </button>
          </div>
        )}

        {noProduct && (
          <div className={styles.notFound}>
            <h2>Product not found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/store" className={styles.backLink}>
              Back to Store
            </Link>
          </div>
        )}

        {hasProduct && (
          <div className={styles.productWrapper}>
            {/* Left - Product Details */}
            <div className={styles.details}>
              <span className={styles.category}>{product.category}</span>

              <h1 className={styles.title}>{product.title}</h1>

              <div className={styles.ratingRow}>
                <div className={styles.stars}>
                  {renderStars(product.rating.rate)}
                </div>
                <span className={styles.rateValue}>{product.rating.rate}</span>
                <span className={styles.rateCount}>
                  ({product.rating.count} reviews)
                </span>
              </div>

              <div className={styles.priceSection}>
                <span className={styles.price}>${product.price}</span>
                <span className={styles.originalPrice}>
                  ${fakeOriginalPrice}
                </span>
                <span className={styles.discount}>{discountPercent}% OFF</span>
              </div>

              <hr className={styles.divider} />

              <p className={styles.description}>{product.description}</p>

              <hr className={styles.divider} />

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <FiTruck size={16} />
                  <span>Free delivery on orders above $50</span>
                </div>
                <div className={styles.metaItem}>
                  <FiRefreshCw size={16} />
                  <span>30-day easy returns & exchange</span>
                </div>
                <div className={styles.metaItem}>
                  <FiShield size={16} />
                  <span>1 year brand warranty</span>
                </div>
              </div>

              <hr className={styles.divider} />

              <div className={styles.quantitySection}>
                <span className={styles.quantityLabel}>Quantity:</span>
                <div className={styles.quantityControl}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <span className={styles.qtyValue}>{quantity}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={styles.ctaGroup}>
                <button className={styles.addToCartBtn}>
                  <FiShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className={styles.buyNowBtn}>
                  <BsLightning size={18} />
                  Buy Now
                </button>
              </div>
            </div>

            {/* Right - Product Image */}
            <div className={styles.imageSection}>
              <img
                className={styles.productImage}
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default ProductPage;
