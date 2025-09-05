import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "lucide-react";

function Header() {
  return (
    <div className="Header">
      <h1 className="header-title">Shopping Cart</h1>
      <div className="search-section">
        <Search />
        <input
          id="search"
          name="search"
          placeholder="What are you looking for?"
          className="search-input"
        ></input>
      </div>
      <div className="shop-section">
        <a href="shop" className="shop-link">
          <ShoppingCart />
          Shop
        </a>
      </div>
      <div className="cart-section">
        <a href="cart" className="cart-link">
          <ShoppingBag />
          Cart
        </a>
      </div>
    </div>
  );
}
export default Header;
