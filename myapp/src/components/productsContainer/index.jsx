import { useEffect, useState } from "react";
import ProductFilters from "./productfilters";
import ProductsList from "./productsList";
import styles from "./productsContainer.module.css";

const ProductsContainer = () => {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setStatus("done");
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";
  const hasProducts = isDone && products.length !== 0;
  const noProducts = isDone && products.length === 0;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Latest Products</h2>
      {isLoading && (
        <p className={styles.statusMsg}>Loading products for you...</p>
      )}
      {isError && <p className={styles.errorMsg}>Something went wrong</p>}
      {noProducts && <p className={styles.statusMsg}>Products not available</p>}
      {hasProducts && (
        <div className={styles.content}>
          <ProductFilters setFilter={setFilter} filter={filter} />
          <ProductsList filter={filter} products={products} />
        </div>
      )}
    </div>
  );
};
export default ProductsContainer;
