import CartProvider from "./contexts/CartContext";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notfound";
import PracticePage from "./pages/practice";
import ProductPage from "./pages/product";
import StorePage from "./pages/store";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
