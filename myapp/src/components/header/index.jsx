import logo from "../../assets/react.svg";
import "./header.css";

const Header = (props) => {
  return (
    <header className="app_header">
      <div className="app_logo_container">
        <img className="app_logo" src={logo} />
        <h2 className="app_title text">{props.title || "My App"}</h2>
      </div>
      <nav className="app_navbar">
        <a>Contact</a>
        <a>About</a>
      </nav>
    </header>
  );
};
export default Header;
