import { useEffect, useState } from "react";

const SaleBanner = () => {
  const [sale, setSale] = useState(0);

  const getJokes = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/random/25",
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    console.log("Sale Banner has mounted");
    getJokes();
    return () => {
      console.log("Sale banner has unmounted");
    };
  }, []);

  useEffect(() => {
    //setup will trigger every time any variable in dependecy array will change

    console.log("Sale updated");
  }, [sale]);
  return (
    <div>
      <h1>Sale is Live- {sale}% off</h1>
      <button onClick={() => setSale(sale + 5)}>Increase sale</button>
    </div>
  );
};

export default SaleBanner;

// React called Salebanner -> produced vdom-> append VDOM in DOM -> dom appear in screen->setup will trigger
