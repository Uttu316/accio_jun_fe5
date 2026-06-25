import "./App.css";
import Counter from "./components/counter";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/userList";
import UserManagement from "./components/usermanagement";

function App() {
  return (
    <div className="app_container">
      <Header title="Store" />
      <UserList />
      <Counter />
      <UserManagement />
      <Footer />
    </div>
  );
}
export default App;
