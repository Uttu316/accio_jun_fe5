import { useState } from "react";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
const Counter = () => {
  const [x, setX] = useState(0); //created a state name "x"and got a function to update x

  const onAdd = () => {
    setX((currX) => currX + 1); //tell react about latest value so that react can call Counter again with latest value of x
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
    <div>
      <h2>Counter</h2>
      <h3 id="Counter_value">{x}</h3>
      <button onClick={onAdd}>
        Add <IoMdAdd />
      </button>
      <button onClick={onMinus}>
        Minus <IoIosRemove />
      </button>
    </div>
  );
};

export default Counter;
