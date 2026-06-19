import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  let fname = "Utkarsh";
  let lname = "Gupta";

  const user = {
    name: "ABC",
    age: 23,
    city: "Jaipur",
  };

  function getUserAge() {
    return 24;
  }
  let isAdult = false;
  return (
    <div className="app_container">
      <Header />
      {2 + 2}
      <h1 className="app_heading">Hello React</h1>
      <h2>{fname + " " + lname}</h2>
      <h3>Age:{getUserAge()}</h3>
      {isAdult ? <h4>Let's Party</h4> : <h4>Let's Study</h4>}
      {isAdult && <h4>Let's Travel</h4>}
      {!isAdult && <h4>Let's Pray</h4>}
      {[<p>A</p>, <span>B</span>, <p>C</p>]}
      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.city}</li>
      </ul>
      <Footer />
    </div>
  );
}
export default App;
