import { Link, NavLink } from "react-router";
import logo from "../../assets/react.svg";
import "./header.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Header = (props) => {
  const { cartSize } = useContext(CartContext); // access the context values
  return (
    <header className="app_header">
      <div className="app_logo_container">
        <Link to="/">
          <img className="app_logo" src={logo} />
        </Link>
        <h2 className="app_title text">{props.title || "My App"}</h2>
      </div>
      <nav className="app_navbar">
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/contact" className="cart-link">
          Cart{cartSize > 0 && <span className="cart-badge">{cartSize}</span>}
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/practice">Practice</NavLink>
      </nav>
    </header>
  );
};
export default Header;
