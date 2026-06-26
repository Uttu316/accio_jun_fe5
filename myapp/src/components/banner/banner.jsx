import { useState } from "react";
import SaleBanner from "./saleBanner";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <div>
      <h2>Banner Controller</h2>
      {showBanner && <SaleBanner />}
      <button onClick={() => setShowBanner(!showBanner)}>
        {showBanner ? "Hide Sale Banner" : "Show Sale Banne"}
      </button>
    </div>
  );
};

export default Banner;
