import { Outlet, useLocation } from "react-router";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={styles.App}>
      <header
        className={isHomePage ? styles.overlayHeader : styles.normalHeader}
      >
        <Header />
      </header>

      <main>
        <Outlet context={{ cartItems, setCartItems }} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
