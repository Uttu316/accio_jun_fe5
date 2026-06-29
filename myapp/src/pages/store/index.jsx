import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsContainer from "../../components/productsContainer";

const StorePage = () => {
  return (
    <div>
      <Header title="My Store" />
      <ProductsContainer />
      <Footer />
    </div>
  );
};

export default StorePage;
