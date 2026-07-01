import Banner from "../../components/banner/banner";
import Counter from "../../components/counter";
import Footer from "../../components/footer";
import Header from "../../components/header";
import PageWrapper from "../../components/pageWrapper";
import UserList from "../../components/userList";
import UserManagement from "../../components/usermanagement";

function PracticePage() {
  return (
    <PageWrapper className="app_container">
      <UserList />
      <Counter />
      <UserManagement />
      <Banner />
    </PageWrapper>
  );
}
export default PracticePage;
