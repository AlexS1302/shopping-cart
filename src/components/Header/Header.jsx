import { Link } from "react-router";
import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "lucide-react";

function Header() {
  return (
    <div className="Header">
      <nav>
        <h1 className="header-title">
          <Link to="/">Shopping Cart</Link>
        </h1>

        <div className="search-section">
          <Search />
          <input
            id="search"
            name="search"
            placeholder="What are you looking for?"
            className="search-input"
          ></input>
        </div>

        <ul className="nav-links">
          <li className="shop-section">
            <Link to="shop" className="shop-link">
              <ShoppingCart />
              Shop
            </Link>
          </li>
          <li className="cart-section">
            <Link to="cart" className="cart-link">
              <ShoppingBag />
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
