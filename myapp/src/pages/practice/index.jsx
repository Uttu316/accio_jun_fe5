import Banner from "../../components/banner/banner";
import Counter from "../../components/counter";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserList from "../../components/userList";
import UserManagement from "../../components/usermanagement";

function PracticePage() {
  return (
    <div className="app_container">
      <Header title="Store" />
      <UserList />
      <Counter />
      <UserManagement />
      <Banner />
      <Footer />
    </div>
  );
}
export default PracticePage;
