import ProductItem from "./productItem";
import styles from "./productsList.module.css";

const ProductsList = ({ products, filter }) => {
  const productsToShow =
    filter === "all" ? products : products.filter((i) => i.category === filter);
  return (
    <div className={styles.grid}>
      {productsToShow.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </div>
  );
};
export default ProductsList;
