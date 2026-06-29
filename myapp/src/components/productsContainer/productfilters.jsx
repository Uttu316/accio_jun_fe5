import { MdFilterList } from "react-icons/md";
import styles from "./productFilters.module.css";

const ProductFilters = ({ setFilter, filter }) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>
        <MdFilterList /> Filter By:
      </p>

      <FilterItem
        setFilter={setFilter}
        selected={filter}
        label={"All"}
        value={"all"}
      />
      <FilterItem
        setFilter={setFilter}
        selected={filter}
        label={"Men's clothing"}
        value={"men's clothing"}
      />
      <FilterItem
        setFilter={setFilter}
        selected={filter}
        label={"Women's clothing"}
        value={"women's clothing"}
      />
      <FilterItem
        setFilter={setFilter}
        selected={filter}
        label={"Electronics"}
        value={"electronics"}
      />
      <FilterItem
        setFilter={setFilter}
        selected={filter}
        label={"Jewelery"}
        value={"jewelery"}
      />
    </div>
  );
};

const FilterItem = ({ setFilter, label, value, selected }) => {
  return (
    <button
      onClick={() => setFilter(value)}
      className={`${styles.filterBtn} ${selected === value ? styles.selected : ""}`}
    >
      {label}
    </button>
  );
};
export default ProductFilters;
