import { useState } from "react";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
import styles from "./counter.module.css";

const Counter = () => {
  const [x, setX] = useState(0);

  const onAdd = () => {
    setX((currX) => currX + 1);
    setX((currX) => currX + 1);
    setX((currX) => currX + 1);
    setX((currX) => currX + 1);
    setX((currX) => currX + 1);
    console.log("add", x);
  };
  const onMinus = () => {
    setX(x - 1);
    setX(x - 1);
    setX(x - 1);
    setX(x - 1);
    setX(x - 1);
    console.log("minus", x);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Counter</h2>
      <h3 className={styles.value} id="Counter_value">
        {x}
      </h3>
      <div className={styles.actions}>
        <button className={`${styles.btn} ${styles.btnAdd}`} onClick={onAdd}>
          Add <IoMdAdd />
        </button>
        <button
          className={`${styles.btn} ${styles.btnMinus}`}
          onClick={onMinus}
        >
          Minus <IoIosRemove />
        </button>
      </div>
    </div>
  );
};

export default Counter;
