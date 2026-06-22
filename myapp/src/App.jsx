import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/userList";

function App() {
  return (
    <div className="app_container">
      <Header title="Store" />
      <UserList />
      <Footer />
    </div>
  );
}
export default App;
